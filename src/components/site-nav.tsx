"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";

import { cn } from "~/lib/utils";

const links = [
  { href: "/", label: "占卜" },
  { href: "/spread", label: "牌阵" },
  { href: "/history", label: "历史" },
  { href: "/profile", label: "我的" },
];

export function SiteNav() {
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/80 bg-[#0a0810]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] text-[#c9a84c]"
        >
          ☽ <span className="text-[#c4a8f0]">星命塔罗</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-xs tracking-widest transition-colors",
                pathname === l.href
                  ? "text-[#c9a84c]"
                  : "text-muted-foreground hover:text-[#c4a8f0]",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {!isLoaded ? (
            <span className="h-8 w-16 rounded-full bg-muted/40" />
          ) : isSignedIn ? (
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "ring-1 ring-[#9575de]/50",
                },
              }}
            />
          ) : (
            <SignInButton mode="modal">
              <button
                type="button"
                className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-[#c4a8f0] transition-colors hover:border-[#9575de] hover:bg-secondary/60"
              >
                登录
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
}
