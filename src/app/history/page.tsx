"use client";

import { useMemo, useState } from "react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { api } from "~/trpc/react";

type DrawRow = {
  cardId: number;
  reversed: boolean;
  positionLabel: string;
  positionIndex: number;
};

export default function HistoryPage() {
  const [spreadFilter, setSpreadFilter] = useState<string>("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [detailId, setDetailId] = useState<string | null>(null);

  const listInput = useMemo(() => {
    const input: {
      spreadId?: string;
      from?: Date;
      to?: Date;
    } = {};
    if (spreadFilter !== "all") input.spreadId = spreadFilter;
    if (from) input.from = new Date(from);
    if (to) {
      const end = new Date(to);
      end.setHours(23, 59, 59, 999);
      input.to = end;
    }
    return Object.keys(input).length ? input : undefined;
  }, [spreadFilter, from, to]);

  const { data: rows, isLoading } = api.reading.list.useQuery(listInput);
  const { data: spreads } = api.spread.list.useQuery();
  const { data: detail } = api.reading.getById.useQuery(
    { id: detailId ?? "" },
    { enabled: !!detailId },
  );

  const utils = api.useUtils();
  const del = api.reading.delete.useMutation({
    onSuccess: async () => {
      await utils.reading.list.invalidate();
      setDetailId(null);
    },
  });
  const clearAll = api.reading.clearAll.useMutation({
    onSuccess: async () => {
      await utils.reading.list.invalidate();
    },
  });

  const drawRows = (detail?.drawResult ?? []) as DrawRow[];

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="mb-8 text-center">
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground">
          HISTORY
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-cinzel)] text-xl text-[#c9a84c]">
          历史记录
        </h1>
      </header>

      <Card className="mb-6 border-border/70 bg-card/60">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">筛选</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="spread-filter">牌阵</Label>
            <select
              id="spread-filter"
              className="border-input bg-background focus-visible:ring-ring flex h-9 w-full rounded-md border px-2 text-sm shadow-xs outline-none focus-visible:ring-2"
              value={spreadFilter}
              onChange={(e) => setSpreadFilter(e.target.value)}
            >
              <option value="all">全部</option>
              {spreads?.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="from">开始日期</Label>
            <Input
              id="from"
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="to">结束日期</Label>
            <Input
              id="to"
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {isLoading ? (
        <p className="text-center text-sm text-muted-foreground">加载中…</p>
      ) : !rows?.length ? (
        <p className="text-center text-sm text-muted-foreground">
          暂无记录。完成一次解读并保存后会出现在这里。
        </p>
      ) : (
        <div className="space-y-3">
          {rows.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setDetailId(r.id)}
              className="w-full rounded-lg border border-border/70 bg-card/50 p-4 text-left transition-colors hover:border-[#9575de]/50 hover:shadow-[0_0_18px_rgba(94,53,136,0.15)]"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-[family-name:var(--font-cinzel)] text-sm text-[#c9a84c]">
                  {r.spread.name}
                </span>
                <span className="text-[0.7rem] text-muted-foreground">
                  {new Date(r.createdAt).toLocaleString("zh-CN")}
                </span>
              </div>
              {r.question ? (
                <p className="mt-2 text-xs italic text-muted-foreground">
                  「{r.question}」
                </p>
              ) : null}
            </button>
          ))}
        </div>
      )}

      {rows?.length ? (
        <div className="mt-8 flex justify-center">
          <Button
            variant="destructive"
            type="button"
            disabled={clearAll.isPending}
            onClick={() => {
              if (
                !window.confirm("确认清空所有历史记录？此操作不可撤销。")
              ) {
                return;
              }
              clearAll.mutate();
            }}
          >
            清空全部记录
          </Button>
        </div>
      ) : null}

      <Dialog open={!!detailId} onOpenChange={() => setDetailId(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-border/80 bg-popover">
          <DialogHeader>
            <DialogTitle className="font-[family-name:var(--font-cinzel)] text-[#c9a84c]">
              {detail?.spread.name}
            </DialogTitle>
            <p className="text-xs text-muted-foreground">
              {detail
                ? new Date(detail.createdAt).toLocaleString("zh-CN")
                : ""}
            </p>
          </DialogHeader>
          {detail?.question ? (
            <p className="text-sm italic text-muted-foreground">
              「{detail.question}」
            </p>
          ) : null}
          <div className="flex flex-wrap gap-2">
            {drawRows.map((d) => (
              <div key={d.positionIndex} className="text-center text-[0.65rem]">
                <div className="mx-auto flex h-12 w-8 items-center justify-center rounded border border-border/60 bg-card text-base">
                  #{d.cardId}
                </div>
                <div className="mt-1 max-w-[4rem] text-muted-foreground">
                  {d.positionLabel}
                </div>
                <div>{d.reversed ? "逆" : "正"}</div>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-border/60 bg-card/50 p-3 text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
            {detail?.interpretation}
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="destructive"
              type="button"
              disabled={del.isPending || !detailId}
              onClick={() => {
                if (!detailId) return;
                if (!window.confirm("删除这条记录？")) return;
                del.mutate({ id: detailId });
              }}
            >
              删除
            </Button>
            <Button type="button" variant="outline" onClick={() => setDetailId(null)}>
              关闭
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
