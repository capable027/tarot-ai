"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useReadingFlow } from "~/stores/reading-flow";
import { api } from "~/trpc/react";

const FAN_COUNT = 22;

export default function DrawPage() {
  const router = useRouter();
  const spreadId = useReadingFlow((s) => s.spreadId);
  const spreadName = useReadingFlow((s) => s.spreadName);
  const positions = useReadingFlow((s) => s.positions);
  const cardCount = useReadingFlow((s) => s.cardCount);
  const shuffleCount = useReadingFlow((s) => s.shuffleCount);
  const draws = useReadingFlow((s) => s.draws);
  const usedFanIndices = useReadingFlow((s) => s.usedFanIndices);
  const drawFromFan = useReadingFlow((s) => s.drawFromFan);
  const toggleFlip = useReadingFlow((s) => s.toggleFlip);
  const setAllFlipped = useReadingFlow((s) => s.setAllFlipped);
  const resetDraws = useReadingFlow((s) => s.resetDraws);

  const { data: meta } = api.tarot.cardsMeta.useQuery();

  const byId = useMemo(() => {
    const m = new Map<number, { name: string; emoji: string }>();
    meta?.forEach((c) => m.set(c.id, { name: c.name, emoji: c.emoji }));
    return m;
  }, [meta]);

  useEffect(() => {
    if (!spreadId) router.replace("/spread");
  }, [spreadId, router]);

  useEffect(() => {
    if (shuffleCount < 3) router.replace("/shuffle");
  }, [shuffleCount, router]);

  useEffect(() => {
    if (draws.length === cardCount && cardCount > 0) {
      const t = window.setTimeout(() => setAllFlipped(true), 450);
      return () => window.clearTimeout(t);
    }
  }, [draws.length, cardCount, setAllFlipped]);

  const progress =
    draws.length < cardCount
      ? `请抽取第 ${draws.length + 1} 张牌（共 ${cardCount} 张）`
      : `✦ 已全部抽完 · 点击牌面可翻面，然后开始解读`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <header className="mb-8 text-center">
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground">
          STEP 3 · DRAW
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-cinzel)] text-xl text-[#c9a84c]">
          {spreadName || "抽取牌面"}
        </h1>
      </header>

      <p className="mb-4 text-center text-sm text-muted-foreground">
        {progress}
      </p>

      <div className="mb-8 flex min-h-[200px] flex-wrap items-center justify-center gap-2">
        {Array.from({ length: FAN_COUNT }).map((_, i) => {
          const used = usedFanIndices.has(i);
          return (
            <button
              key={i}
              type="button"
              disabled={used || draws.length >= cardCount}
              onClick={() => drawFromFan(i)}
              className={`relative h-32 w-20 shrink-0 rounded-md border transition-all sm:h-36 sm:w-[4.5rem] ${
                used
                  ? "pointer-events-none border-border/30 opacity-30"
                  : "border-border/70 bg-card/80 hover:-translate-y-2 hover:border-[#c9a84c]/50 hover:shadow-[0_12px_30px_rgba(94,53,136,0.25)]"
              }`}
            >
              <span className="absolute inset-0 rounded-md bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(156,110,232,0.06)_6px,rgba(156,110,232,0.06)_12px)]" />
              <span className="relative z-[1] flex h-full items-center justify-center text-lg text-[#c9a84c]/50">
                ✦
              </span>
            </button>
          );
        })}
      </div>

      <p className="mb-3 text-center text-xs text-muted-foreground">
        ⬇ 已抽取的牌（点击翻面）
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: cardCount }).map((_, idx) => {
          const d = draws.find((x) => x.positionIndex === idx);
          const label = positions[idx] ?? `位置 ${idx + 1}`;
          return (
            <div key={idx} className="flex w-[5.5rem] flex-col items-center gap-2">
              <span className="text-center text-[0.65rem] tracking-wide text-[#c9a84c]">
                {label}
              </span>
              <button
                type="button"
                disabled={!d}
                onClick={() => d && toggleFlip(d.positionIndex)}
                className="perspective-800 h-32 w-20 sm:h-36 sm:w-[4.5rem]"
                style={{ perspective: "800px" }}
              >
                <div
                  className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
                  style={{
                    transform:
                      d?.flipped === true ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-md border border-border/70 bg-card/90 [backface-visibility:hidden]"
                    style={{ WebkitBackfaceVisibility: "hidden" }}
                  >
                    <span className="text-lg text-[#c9a84c]/60">✦</span>
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-md border border-border/70 bg-gradient-to-br from-card to-secondary/40 p-1 [backface-visibility:hidden]"
                    style={{
                      transform: "rotateY(180deg)",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {d ? (
                      <>
                        <span
                          className={`text-2xl ${d.reversed ? "rotate-180" : ""}`}
                        >
                          {byId.get(d.cardId)?.emoji ?? "🎴"}
                        </span>
                        <span className="mt-1 line-clamp-3 text-center text-[0.6rem] leading-tight text-muted-foreground">
                          {byId.get(d.cardId)?.name ?? `#${d.cardId}`}
                        </span>
                        <span
                          className={`absolute top-1 right-1 rounded px-0.5 text-[0.55rem] font-semibold ${
                            d.reversed
                              ? "bg-amber-950/70 text-amber-100"
                              : "bg-[#4a2c6a]/80 text-[#e8d8ff]"
                          }`}
                        >
                          {d.reversed ? "逆" : "正"}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button variant="outline" onClick={resetDraws}>
          重新抽牌
        </Button>
        <Button
          disabled={draws.length < cardCount}
          onClick={() => router.push("/reading")}
        >
          开始解读 →
        </Button>
        <Link href="/shuffle" className={cn(buttonVariants({ variant: "ghost" }))}>
          ← 返回洗牌
        </Link>
      </div>
    </main>
  );
}
