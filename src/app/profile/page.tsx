"use client";

import { useUser } from "@clerk/nextjs";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const { data: rows } = api.reading.list.useQuery();

  return (
    <main className="mx-auto max-w-lg px-4 py-10 sm:px-6">
      <header className="mb-8 text-center">
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground">
          PROFILE
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-cinzel)] text-xl text-[#c9a84c]">
          个人中心
        </h1>
      </header>

      <Card className="border-border/70 bg-card/60">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">账号信息</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          {!isLoaded ? (
            <p>加载中…</p>
          ) : (
            <>
              <p>
                昵称：{" "}
                <span className="text-foreground">
                  {user?.username ??
                    user?.firstName ??
                    user?.primaryEmailAddress?.emailAddress ??
                    "旅人"}
                </span>
              </p>
              <p>
                邮箱：{" "}
                <span className="text-foreground">
                  {user?.primaryEmailAddress?.emailAddress ?? "—"}
                </span>
              </p>
            </>
          )}
          <p className="pt-2 text-[0.75rem] leading-relaxed">
            头像、密码与安全设置请使用右上角用户菜单（Clerk）管理。
          </p>
        </CardContent>
      </Card>

      <Card className="mt-6 border-border/70 bg-card/60">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">解读统计</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          已保存解读{" "}
          <span className="font-semibold text-[#c4a8f0]">
            {rows?.length ?? 0}
          </span>{" "}
          条（最近 100 条内）
        </CardContent>
      </Card>
    </main>
  );
}
