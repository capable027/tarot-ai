"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useReadingFlow } from "~/stores/reading-flow";

export default function ShufflePage() {
  const router = useRouter();
  const spreadId = useReadingFlow((s) => s.spreadId);
  const shuffleCount = useReadingFlow((s) => s.shuffleCount);
  const bumpShuffle = useReadingFlow((s) => s.bumpShuffle);

  const [shuffling, setShuffling] = useState(false);

  useEffect(() => {
    if (!spreadId) router.replace("/spread");
  }, [spreadId, router]);

  const onDeckClick = () => {
    setShuffling(true);
    bumpShuffle();
    window.setTimeout(() => setShuffling(false), 700);
  };

  const canDraw = shuffleCount >= 3;

  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-lg flex-col items-center justify-center px-4 py-12 text-center">
      <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground">
        STEP 2 · SHUFFLE
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-cinzel)] text-xl tracking-[0.12em] text-[#c9a84c]">
        洗牌凝心
      </h1>

      <button
        type="button"
        onClick={onDeckClick}
        className={`relative mt-10 h-48 w-28 cursor-pointer touch-manipulation ${shuffling ? "shuffle-anim" : ""}`}
        aria-label="点击洗牌"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="deck-layer absolute h-48 w-28 rounded-md border border-border/80 bg-card/90 shadow-md"
            style={{
              transform: `translate(${(i - 2) * 5}px, ${(2 - i) * 5}px) rotate(${(i - 2) * 2.5}deg)`,
              zIndex: i,
            }}
          />
        ))}
        <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-2xl text-[#c9a84c]/70">
          ✦
        </span>
      </button>

      <p className="mt-8 font-[family-name:var(--font-cinzel)] text-3xl text-[#c9a84c]">
        {shuffleCount}
      </p>
      <p className="text-xs tracking-widest text-muted-foreground">次洗牌</p>

      <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
        点击牌组，带着你的疑问专注洗牌。至少洗牌 3 次再进入抽牌，保持仪式感。
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/spread"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          ← 重选牌阵
        </Link>
        <Button disabled={!canDraw} onClick={() => router.push("/draw")}>
          抽牌 →
        </Button>
      </div>
    </main>
  );
}
