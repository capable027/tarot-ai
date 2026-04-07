"use client";

import { useMemo } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

/** Renders AI / fallback text with 【章节】titles into cards. */
export function ReadingBody({ text }: { text: string }) {
  const sections = useMemo(() => {
    const raw = text.trim();
    const parts = raw.split(/【([^】]+)】/);
    if (parts.length <= 1) {
      return [{ title: "解读", body: raw }];
    }
    const out: { title: string; body: string }[] = [];
    for (let i = 1; i < parts.length; i += 2) {
      const title = parts[i] ?? "解读";
      const body = (parts[i + 1] ?? "").trim();
      if (body) out.push({ title, body });
    }
    return out.length ? out : [{ title: "解读", body: raw }];
  }, [text]);

  return (
    <div className="space-y-4">
      {sections.map((s) => (
        <Card
          key={s.title}
          className="border-border/80 bg-card/80 shadow-[0_0_24px_rgba(94,53,136,0.12)]"
        >
          <CardHeader className="pb-2">
            <CardTitle className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.12em] text-[#c9a84c]">
              ✦ {s.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {s.body.split(/\n\n+/).map((p, i) => (
                <p key={`${s.title}-${i}`}>{p}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
