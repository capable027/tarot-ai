"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { Badge } from "~/components/ui/badge";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useReadingFlow } from "~/stores/reading-flow";
import { api } from "~/trpc/react";

export default function SpreadPage() {
  const router = useRouter();
  const { data: spreads, isLoading } = api.spread.list.useQuery();
  const setSpreadSelection = useReadingFlow((s) => s.setSpreadSelection);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [question, setQuestion] = useState("");

  const selected = useMemo(
    () => spreads?.find((s) => s.id === selectedId) ?? null,
    [spreads, selectedId],
  );

  const positions = useMemo(() => {
    if (!selected?.positions) return [];
    return selected.positions as string[];
  }, [selected]);

  const onContinue = () => {
    if (!selected) return;
    const q = question.trim();
    if (q.length > 200) {
      alert("心中疑问请控制在 200 字以内");
      return;
    }
    setSpreadSelection({
      spreadId: selected.id,
      spreadName: selected.name,
      question: q,
      positions,
      cardCount: selected.cardCount,
    });
    router.push("/shuffle");
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-8 text-center">
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground">
          STEP 1 · CHOOSE YOUR SPREAD
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-cinzel)] text-xl tracking-[0.12em] text-[#c9a84c] sm:text-2xl">
          选择牌阵
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          不同的牌阵对应不同的人生议题，选择最契合你当下疑惑的牌阵
        </p>
      </header>

      <div className="mx-auto mb-8 max-w-xl space-y-2">
        <Label htmlFor="q" className="text-muted-foreground">
          ✦ 心中疑问（选填，≤200 字）
        </Label>
        <Textarea
          id="q"
          rows={2}
          maxLength={200}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="如：我现在的感情状况如何？这份工作适合我吗？"
          className="border-border/80 bg-card/60"
        />
      </div>

      {isLoading ? (
        <p className="text-center text-sm text-muted-foreground">加载牌阵…</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {spreads?.map((s) => {
            const pos = s.positions as string[];
            const active = selectedId === s.id;
            return (
              <Card
                key={s.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedId(s.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedId(s.id);
                  }
                }}
                className={`cursor-pointer border transition-all hover:border-[#9575de]/60 hover:shadow-[0_0_20px_rgba(94,53,136,0.2)] ${
                  active
                    ? "border-[#c9a84c]/70 shadow-[0_0_24px_rgba(201,168,76,0.15)]"
                    : "border-border/70 bg-card/50"
                }`}
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    {s.hot ? (
                      <Badge
                        variant="outline"
                        className="border-[#c9a84c]/50 text-[#c9a84c]"
                      >
                        热门
                      </Badge>
                    ) : (
                      <span />
                    )}
                    <span className="text-lg text-[#c9a84c]/80">
                      {s.cardCount} 张
                    </span>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-cinzel)] text-base tracking-wide">
                    {s.name}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {s.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {pos.map((p) => (
                      <span
                        key={p}
                        className="rounded border border-border/50 bg-secondary/40 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
          ← 返回
        </Link>
        <Button disabled={!selected} onClick={onContinue}>
          进入洗牌 →
        </Button>
      </div>
    </main>
  );
}
