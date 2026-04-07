import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const majors: Array<{
  id: number;
  name: string;
  emoji: string;
  element: string;
  upright: string;
  reversed: string;
}> = [
  {
    id: 0,
    name: "愚者",
    emoji: "🃏",
    element: "风",
    upright: "新的开始与冒险，无拘无束地踏上未知旅程",
    reversed: "逃避责任，缺乏方向，需要更多考量",
  },
  {
    id: 1,
    name: "魔术师",
    emoji: "🎩",
    element: "水星",
    upright: "意志力与创造力，你拥有实现目标的一切资源",
    reversed: "潜能未发挥，意志力散漫，欺骗或混乱",
  },
  {
    id: 2,
    name: "女祭司",
    emoji: "🌙",
    element: "月亮",
    upright: "直觉与内在智慧，聆听内心深处的声音",
    reversed: "忽视直觉，隐藏的秘密浮出水面",
  },
  {
    id: 3,
    name: "皇后",
    emoji: "♀",
    element: "金星",
    upright: "丰盛与创造力，生命力旺盛，好事即将到来",
    reversed: "创造力受阻，依赖他人，缺乏安全感",
  },
  {
    id: 4,
    name: "皇帝",
    emoji: "♦",
    element: "白羊",
    upright: "稳固的根基，权威与领导力，脚踏实地",
    reversed: "控制欲过强，专制固执，权威失衡",
  },
  {
    id: 5,
    name: "教皇",
    emoji: "⛪",
    element: "金牛",
    upright: "传统智慧的指引，寻求导师或精神支持",
    reversed: "反叛传统，质疑权威，寻找个人信仰",
  },
  {
    id: 6,
    name: "恋人",
    emoji: "❤",
    element: "双子",
    upright: "爱与选择，关系中的和谐与相互吸引",
    reversed: "关系不和谐，缺乏沟通，价值观冲突",
  },
  {
    id: 7,
    name: "战车",
    emoji: "🏆",
    element: "巨蟹",
    upright: "意志力与自制，凭借决心克服前进阻碍",
    reversed: "缺乏自制，方向不明，能量分散",
  },
  {
    id: 8,
    name: "力量",
    emoji: "🦁",
    element: "狮子",
    upright: "内在力量与勇气，温柔地征服恐惧与困境",
    reversed: "力量内耗，对自己过于苛刻，不自信",
  },
  {
    id: 9,
    name: "隐士",
    emoji: "🕯",
    element: "处女",
    upright: "内省与寻找内在真相，独立思考的智慧",
    reversed: "孤立与封闭，拒绝帮助，内心迷失",
  },
  {
    id: 10,
    name: "命运之轮",
    emoji: "☸",
    element: "木星",
    upright: "命运的转轮，变化即将到来，顺势而为",
    reversed: "抵抗变化，运气不佳，打破惯性循环",
  },
  {
    id: 11,
    name: "正义",
    emoji: "⚖",
    element: "天秤",
    upright: "公平与真相，用理性权衡，寻求平衡",
    reversed: "不公平与偏见，逃避责任与判断",
  },
  {
    id: 12,
    name: "倒吊人",
    emoji: "🔻",
    element: "海王",
    upright: "暂停与等待，换个角度看问题会有新发现",
    reversed: "内在的抵抗，不愿放下，执念阻碍成长",
  },
  {
    id: 13,
    name: "死神",
    emoji: "🌹",
    element: "天蝎",
    upright: "转化与蜕变，结束是另一段旅程的开始",
    reversed: "抗拒改变，停滞不前，害怕失去",
  },
  {
    id: 14,
    name: "节制",
    emoji: "🌊",
    element: "射手",
    upright: "耐心与平衡，融合不同能量，中庸之道",
    reversed: "极端与过激，缺乏耐心，能量失衡",
  },
  {
    id: 15,
    name: "恶魔",
    emoji: "🔗",
    element: "摩羯",
    upright: "物质束缚与执念，是时候检视内心的枷锁",
    reversed: "挣脱束缚，认识到自身的局限并突破",
  },
  {
    id: 16,
    name: "塔",
    emoji: "⚡",
    element: "火星",
    upright: "突如其来的变化，旧有结构的崩塌与重建",
    reversed: "内在的混乱被化解，避免突然的破坏",
  },
  {
    id: 17,
    name: "星星",
    emoji: "⭐",
    element: "水瓶",
    upright: "希望与灵感，黑暗后必将迎来曙光",
    reversed: "失去希望，消极情绪，需要重新找到方向",
  },
  {
    id: 18,
    name: "月亮",
    emoji: "🌕",
    element: "双鱼",
    upright: "潜意识与幻象，注意情绪变化，保持清醒",
    reversed: "恐惧消散，走出迷雾，混乱慢慢清晰",
  },
  {
    id: 19,
    name: "太阳",
    emoji: "☀",
    element: "太阳",
    upright: "活力与成功，积极向上，充满光明能量",
    reversed: "自我中心，过于乐观，忽视现实困难",
  },
  {
    id: 20,
    name: "审判",
    emoji: "🎺",
    element: "冥王",
    upright: "觉醒与重生，聆听内心呼唤，做出改变",
    reversed: "自我怀疑，拒绝成长的机会，错过觉醒",
  },
  {
    id: 21,
    name: "世界",
    emoji: "🌍",
    element: "土星",
    upright: "圆满完成，整合所有经验，达到新的高度",
    reversed: "半途而废，尚未完成的旅程，重新整合",
  },
];

const rankDefs = [
  { key: "ACE", zh: "王牌" },
  { key: "TWO", zh: "二" },
  { key: "THREE", zh: "三" },
  { key: "FOUR", zh: "四" },
  { key: "FIVE", zh: "五" },
  { key: "SIX", zh: "六" },
  { key: "SEVEN", zh: "七" },
  { key: "EIGHT", zh: "八" },
  { key: "NINE", zh: "九" },
  { key: "TEN", zh: "十" },
  { key: "PAGE", zh: "侍从" },
  { key: "KNIGHT", zh: "骑士" },
  { key: "QUEEN", zh: "王后" },
  { key: "KING", zh: "国王" },
] as const;

const suits = [
  { arcana: "WANDS", prefix: "权杖", emoji: "🜂", element: "火", baseId: 22 },
  { arcana: "CUPS", prefix: "圣杯", emoji: "🜄", element: "水", baseId: 36 },
  { arcana: "SWORDS", prefix: "宝剑", emoji: "🜁", element: "风", baseId: 50 },
  { arcana: "PENTACLES", prefix: "星币", emoji: "🜃", element: "土", baseId: 64 },
] as const;

function minorMeanings(
  prefix: string,
  rankZh: string,
  rankKey: string,
  element: string,
): { upright: string; reversed: string } {
  const isCourt = ["PAGE", "KNIGHT", "QUEEN", "KING"].includes(rankKey);
  const isAce = rankKey === "ACE";

  let upright: string;
  if (isAce) {
    upright = `${prefix}${rankZh}：${element}元素的新开端与潜能被点燃，适合启动计划、表达真实渴望。`;
  } else if (isCourt) {
    upright = `${prefix}${rankZh}：人物原型或他人影响浮现，与${element}相关的态度与互动方式正在塑造局势。`;
  } else {
    upright = `${prefix}${rankZh}：事件逐步推进，${element}能量在日常中具体化，留意节奏与资源分配。`;
  }

  let reversed: string;
  if (isAce) {
    reversed = `${prefix}${rankZh}（逆）：热情或动机受阻，建议放慢脚步、厘清目标再行动。`;
  } else if (isCourt) {
    reversed = `${prefix}${rankZh}（逆）：人际信号混乱或角色失衡，避免以偏概全与情绪化判断。`;
  } else {
    reversed = `${prefix}${rankZh}（逆）：进展迟滞或方向摇摆，需要复盘策略并修复沟通。`;
  }

  return { upright, reversed };
}

function buildMinorCards() {
  const cards: Array<{
    id: number;
    name: string;
    arcana: string;
    suit: string;
    rankKey: string;
    uprightMeaning: string;
    reversedMeaning: string;
    element: string;
    emoji: string;
  }> = [];

  for (const s of suits) {
    rankDefs.forEach((r, i) => {
      const id = s.baseId + i;
      const { upright, reversed } = minorMeanings(
        s.prefix,
        r.zh,
        r.key,
        s.element,
      );
      cards.push({
        id,
        name: `${s.prefix}${r.zh}`,
        arcana: s.arcana,
        suit: s.arcana,
        rankKey: r.key,
        uprightMeaning: upright,
        reversedMeaning: reversed,
        element: s.element,
        emoji: s.emoji,
      });
    });
  }

  return cards;
}

const spreads = [
  {
    id: "single",
    name: "单牌占卜",
    description:
      "简洁直指核心，适合日常指引、快速答疑，一张牌道尽此刻真相",
    cardCount: 1,
    hot: true,
    positions: ["当下指引"],
  },
  {
    id: "three",
    name: "三牌阵",
    description:
      "经典时间轴牌阵，过去成因、现在处境、未来走向，全局洞察",
    cardCount: 3,
    hot: true,
    positions: ["过去", "现在", "未来"],
  },
  {
    id: "choice",
    name: "二选一牌阵",
    description:
      "面对人生十字路口，当你徘徊于两个选择之间，让牌揭示各方走向",
    cardCount: 4,
    hot: false,
    positions: ["选项A能量", "选项A结果", "选项B能量", "选项B结果"],
  },
  {
    id: "hexagram",
    name: "六芒星牌阵",
    description:
      "深度探究复杂议题，从六个维度多角度分析，适合人生重大决策",
    cardCount: 6,
    hot: false,
    positions: [
      "过去",
      "现在",
      "未来",
      "潜意识",
      "外部影响",
      "指引",
    ],
  },
  {
    id: "celtic",
    name: "凯尔特十字",
    description:
      "塔罗最权威完整牌阵，十张牌环环相扣，揭示事件全貌与深层根源",
    cardCount: 10,
    hot: false,
    positions: [
      "现状",
      "阻碍",
      "根源",
      "近期",
      "理想",
      "潜意识",
      "建议",
      "外部",
      "希望与恐惧",
      "结果",
    ],
  },
];

async function main() {
  await prisma.readingRecord.deleteMany();
  await prisma.spread.deleteMany();
  await prisma.tarotCard.deleteMany();

  await prisma.tarotCard.createMany({
    data: majors.map((m) => ({
      id: m.id,
      name: m.name,
      arcana: "MAJOR",
      suit: null,
      rankKey: null,
      uprightMeaning: m.upright,
      reversedMeaning: m.reversed,
      element: m.element,
      emoji: m.emoji,
    })),
  });

  await prisma.tarotCard.createMany({
    data: buildMinorCards(),
  });

  for (const sp of spreads) {
    await prisma.spread.create({
      data: {
        id: sp.id,
        name: sp.name,
        description: sp.description,
        cardCount: sp.cardCount,
        positions: sp.positions,
        hot: sp.hot,
      },
    });
  }

  console.log("Seeded TarotCard, Spread");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
