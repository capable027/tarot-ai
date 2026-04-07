"use client";

import { SignInButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { MagicLoader } from "~/components/magic-loader";
import { ReadingBody } from "~/components/reading-body";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useReadingFlow } from "~/stores/reading-flow";
import { api } from "~/trpc/react";

export default function ReadingPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const spreadName = useReadingFlow((s) => s.spreadName);
  const draws = useReadingFlow((s) => s.draws);
  const cardCount = useReadingFlow((s) => s.cardCount);
  const interpretation = useReadingFlow((s) => s.interpretation);
  const setInterpretation = useReadingFlow((s) => s.setInterpretation);

  const interpret = api.tarot.interpret.useMutation();
  const createReading = api.reading.create.useMutation();
  const utils = api.useUtils();

  const ranRef = useRef(false);
  const [error, setError] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);

  useEffect(() => {
    const st = useReadingFlow.getState();
    if (!st.spreadId) {
      router.replace("/spread");
      return;
    }
    if (st.draws.length !== st.cardCount) {
      router.replace("/draw");
      return;
    }
    if (st.interpretation) {
      ranRef.current = true;
      return;
    }
    if (ranRef.current) return;
    ranRef.current = true;

    interpret.mutate(
      {
        spreadId: st.spreadId,
        question: st.question,
        draws: st.draws.map((d) => ({
          cardId: d.cardId,
          reversed: d.reversed,
          positionLabel: d.positionLabel,
        })),
      },
      {
        onSuccess: (r) => {
          setInterpretation(r.text);
          setError(null);
        },
        onError: (e) => {
          setError(e.message);
        },
      },
    );
  }, [interpret, router, setInterpretation]);

  const { data: meta } = api.tarot.cardsMeta.useQuery();

  const onSave = () => {
    const text = useReadingFlow.getState().interpretation;
    const st = useReadingFlow.getState();
    if (!text || !st.spreadId) return;
    setBanner(null);
    createReading.mutate(
      {
        spreadId: st.spreadId,
        question: st.question.trim() || undefined,
        drawResult: st.draws.map((d) => ({
          cardId: d.cardId,
          reversed: d.reversed,
          positionLabel: d.positionLabel,
          positionIndex: d.positionIndex,
        })),
        interpretation: text,
      },
      {
        onSuccess: async () => {
          setBanner("已保存到你的历史记录");
          await utils.reading.list.invalidate();
        },
        onError: (e) => setBanner(e.message),
      },
    );
  };

  const loading = interpret.isPending && !interpretation;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-6 text-center">
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground">
          STEP 4 · READING
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-cinzel)] text-xl text-[#c9a84c]">
          牌面解读
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{spreadName}</p>
      </header>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {draws.map((d) => {
          const m = meta?.find((c) => c.id === d.cardId);
          return (
            <div
              key={d.positionIndex}
              className="flex flex-col items-center gap-1 text-[0.65rem] text-muted-foreground"
            >
              <div
                className={`flex h-16 w-10 items-center justify-center rounded border border-[#c9a84c]/40 bg-card/80 text-lg ${d.reversed ? "rotate-180" : ""}`}
              >
                {m?.emoji ?? "🎴"}
              </div>
              <span className="max-w-[4rem] text-center leading-tight">
                {d.positionLabel}
              </span>
            </div>
          );
        })}
      </div>

      {loading ? <MagicLoader /> : null}

      {error ? (
        <div className="mb-6 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      {interpretation ? <ReadingBody text={interpretation} /> : null}

      {banner ? (
        <p className="mt-4 text-center text-sm text-[#c4a8f0]">{banner}</p>
      ) : null}

      <p className="mt-8 border-t border-border/60 pt-6 text-center text-[0.7rem] tracking-wide text-muted-foreground">
        仅供娱乐参考，不构成现实决策依据
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {isLoaded && isSignedIn ? (
          <Button
            type="button"
            disabled={!interpretation || createReading.isPending}
            onClick={onSave}
          >
            ✦ 保存记录
          </Button>
        ) : isLoaded ? (
          <SignInButton mode="modal">
            <button
              type="button"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              登录后保存记录
            </button>
          </SignInButton>
        ) : null}
        <Link href="/spread" className={cn(buttonVariants())}>
          重新占卜
        </Link>
        <Link
          href="/history"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          历史记录
        </Link>
      </div>
    </main>
  );
}
