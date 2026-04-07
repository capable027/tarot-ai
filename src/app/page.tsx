import Link from "next/link";

import { buttonVariants } from "~/lib/button-variants";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="relative mb-8 size-28">
        <div
          className="absolute inset-0 rounded-full border border-[#c9a84c]/50"
          style={{ animation: "mystic-spin 22s linear infinite" }}
        />
        <div
          className="absolute inset-2 rounded-full border border-[#9575de]/35"
          style={{ animation: "mystic-spin 16s linear infinite reverse" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl text-[#c9a84c]">
          ✦
        </div>
      </div>

      <h1 className="font-[family-name:var(--font-cinzel)] text-3xl font-bold tracking-[0.2em] sm:text-4xl">
        <span className="bg-gradient-to-br from-[#e8c76a] via-[#c4a8f0] to-[#c9a84c] bg-clip-text text-transparent">
          ARCANA ORACLE
        </span>
      </h1>
      <p className="mt-2 text-xs tracking-[0.35em] text-muted-foreground">
        星命塔罗 · AI 智能解读
      </p>

      <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
        还原洗牌、抽牌、翻面与牌阵摆放的线下仪式感；结合服务端
        AI（密钥仅在后端）生成通俗指引。凝神静气，让牌面成为自我对话的镜子。
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/spread"
          className={cn(buttonVariants({ size: "lg" }), "px-8")}
        >
          ✦ 开始占卜
        </Link>
        <Link
          href="/history"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          历史记录
        </Link>
      </div>

      <p className="mt-14 text-[0.7rem] tracking-widest text-muted-foreground">
        仅供娱乐参考，不构成现实决策依据
      </p>

      <p className="mt-4 text-[0.65rem] text-muted-foreground/80">
        静态原型见{" "}
        <a
          className="text-[#c4a8f0] underline-offset-2 hover:underline"
          href="/tarot-prototype.html"
        >
          tarot-prototype.html
        </a>
      </p>
    </main>
  );
}
