export function MagicLoader({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <div className="relative size-20">
        <div
          className="magic-ring-spin absolute inset-0 rounded-full border-2 border-transparent border-t-[#7c54c4] border-r-[#7c54c4]"
          aria-hidden
        />
        <div
          className="magic-ring-spin-rev absolute inset-2 rounded-full border-2 border-transparent border-b-[#c9a84c] border-l-[#c9a84c]"
          aria-hidden
        />
        <div
          className="magic-ring-spin absolute inset-4 rounded-full border-2 border-transparent border-t-[#bfa7f2]"
          aria-hidden
        />
      </div>
      <p className="magic-text-pulse font-[family-name:var(--font-cinzel)] text-sm tracking-[0.15em] text-[#c4a8f0]">
        {text ?? "正在为您解读牌面深意…"}
      </p>
    </div>
  );
}
