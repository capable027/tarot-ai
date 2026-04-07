import OpenAI from "openai";

import { env } from "~/env";
import { db } from "~/server/db";

export type DrawLine = {
  cardId: number;
  reversed: boolean;
  positionLabel: string;
};

function getOpenAIClient(): OpenAI | null {
  if (env.DEEPSEEK_API_KEY) {
    return new OpenAI({
      apiKey: env.DEEPSEEK_API_KEY,
      baseURL: "https://api.deepseek.com/v1",
    });
  }
  if (env.OPENAI_API_KEY) {
    return new OpenAI({ apiKey: env.OPENAI_API_KEY });
  }
  return null;
}

function modelFor(): string {
  if (env.DEEPSEEK_API_KEY) return env.DEEPSEEK_MODEL;
  return "gpt-4o-mini";
}

function buildPrompt(
  spreadName: string,
  question: string,
  lines: { name: string; reversed: boolean; position: string }[],
): string {
  const cardsDesc = lines
    .map(
      (l) =>
        `${l.position}：${l.name}（${l.reversed ? "逆位" : "正位"}）`,
    )
    .join("、");

  return `你是一位专业而富有洞察力的塔罗牌占卜师。请根据以下信息提供一次专业、通俗易懂的塔罗牌解读：

牌阵：${spreadName}
${question ? `用户问题：${question}` : "（用户未指定问题，请提供通用指引）"}

抽取的牌面：
${cardsDesc}

硬性要求：
- 用中文输出，语气温暖、清晰，偏向心理与行动建议。
- 避免封建迷信、宿命论与恐吓式表述；强调自我觉察与选择。
- 开头或结尾需自然体现「仅供娱乐参考，不构成现实决策依据」。

请按以下结构输出（使用【】标题）：

【整体运势】
简述此次占卜整体能量与核心信息（2-3段）

【牌面详解】
逐一解读每张牌在其位置的含义，结合正逆位分析（每张2-3句）

【综合建议】
给出实际可行的人生建议，以积极向上的角度结尾（1-2段）`;
}

export async function interpretDraw(
  spreadName: string,
  question: string,
  draws: DrawLine[],
): Promise<string> {
  const ids = [...new Set(draws.map((d) => d.cardId))];
  const cards = await db.tarotCard.findMany({ where: { id: { in: ids } } });
  const byId = new Map(cards.map((c) => [c.id, c]));

  const lines = draws.map((d) => {
    const c = byId.get(d.cardId);
    const name = c?.name ?? `牌#${d.cardId}`;
    return { name, reversed: d.reversed, position: d.positionLabel };
  });

  const client = getOpenAIClient();
  if (!client) {
    return buildFallbackText(spreadName, question, draws, byId, "no_key");
  }

  const messages = [
    {
      role: "user" as const,
      content: buildPrompt(spreadName, question, lines),
    },
  ];
  const common = { messages, max_tokens: 1800, temperature: 0.75 };

  try {
    const completion = await client.chat.completions.create({
      model: modelFor(),
      ...common,
    });
    const text = completion.choices[0]?.message?.content?.trim();
    if (!text) {
      return buildFallbackText(spreadName, question, draws, byId, "api_error");
    }
    return `${text}\n\n—— 仅供娱乐参考，不构成现实决策依据。`;
  } catch {
    return buildFallbackText(spreadName, question, draws, byId, "api_error");
  }
}

function buildFallbackText(
  spreadName: string,
  question: string,
  draws: DrawLine[],
  byId: Map<
    number,
    { name: string; uprightMeaning: string; reversedMeaning: string }
  >,
  reason: "no_key" | "api_error" = "no_key",
): string {
  let out = `【整体运势】\n\n`;
  out += `此次占卜选用「${spreadName}」。`;
  if (question) out += `你所关注的是：「${question}」。`;
  out +=
    `\n牌面整体呈现出变化与觉察交织的能量。当前阶段更适合放慢判断，先整理事实与感受，再决定下一步。\n\n`;
  out += `【牌面详解】\n\n`;
  for (const d of draws) {
    const c = byId.get(d.cardId);
    const meaning = c
      ? d.reversed
        ? c.reversedMeaning
        : c.uprightMeaning
      : "请结合牌意做开放式理解。";
    const ori = d.reversed ? "逆位" : "正位";
    out += `· ${d.positionLabel}：${c?.name ?? "未知牌"}（${ori}）\n${meaning}。在「${d.positionLabel}」这个位置，它提示你留意该议题下的节奏、边界与沟通方式。\n\n`;
  }
  out += `【综合建议】\n\n`;
  out +=
    `塔罗更像一面镜子：它反映的是你当下的状态与潜在选择，而不是不可更改的命运。\n建议你在接下来一段时间保持觉察，优先处理可控的小事，把大问题拆小；需要支持时，向信任的人或专业资源求助。\n\n`;
  out +=
    reason === "api_error"
      ? `（大模型请求未成功，以上为基于牌库条目的基础解读。请检查 API Key、模型 ID、余额或网络后重试。）\n\n`
      : `（当前未配置服务端 AI Key，以上为基于牌库条目的基础解读。配置 DEEPSEEK_API_KEY 或 OPENAI_API_KEY 可启用大模型深度解读。）\n\n`;
  out += `—— 仅供娱乐参考，不构成现实决策依据。`;
  return out;
}
