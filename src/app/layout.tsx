import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { type Metadata } from "next";
import { Cinzel, Noto_Serif_SC } from "next/font/google";

import { SiteNav } from "~/components/site-nav";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "星命塔罗 · AI 智能解读",
  description:
    "沉浸式塔罗抽牌流程与 AI 解读，紫色神秘风占卜体验。仅供娱乐参考。",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
});

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html
        lang="zh-CN"
        className={`dark ${cinzel.variable} ${notoSerif.variable}`}
      >
        <body className="min-h-screen font-[family-name:var(--font-noto)] pt-14">
          <TRPCReactProvider>
            <SiteNav />
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
