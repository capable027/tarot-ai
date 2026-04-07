import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type DrawnCard = {
  cardId: number;
  reversed: boolean;
  flipped: boolean;
  fanIndex: number;
  positionIndex: number;
  positionLabel: string;
};

type ReadingFlowState = {
  spreadId: string | null;
  spreadName: string;
  question: string;
  positions: string[];
  cardCount: number;
  shuffleCount: number;
  draws: DrawnCard[];
  interpretation: string | null;
  usedFanIndices: Set<number>;
  setSpreadSelection: (input: {
    spreadId: string;
    spreadName: string;
    question: string;
    positions: string[];
    cardCount: number;
  }) => void;
  bumpShuffle: () => void;
  drawFromFan: (fanIndex: number) => void;
  toggleFlip: (positionIndex: number) => void;
  setAllFlipped: (value: boolean) => void;
  resetDraws: () => void;
  setInterpretation: (text: string | null) => void;
  resetAll: () => void;
};

const empty = (): Pick<
  ReadingFlowState,
  | "shuffleCount"
  | "draws"
  | "interpretation"
  | "usedFanIndices"
> => ({
  shuffleCount: 0,
  draws: [],
  interpretation: null,
  usedFanIndices: new Set(),
});

export const useReadingFlow = create<ReadingFlowState>()(
  persist(
    (set, get) => ({
      spreadId: null,
      spreadName: "",
      question: "",
      positions: [],
      cardCount: 0,
      shuffleCount: 0,
      draws: [],
      interpretation: null,
      usedFanIndices: new Set<number>(),

      setSpreadSelection: (input) =>
        set({
          spreadId: input.spreadId,
          spreadName: input.spreadName,
          question: input.question,
          positions: input.positions,
          cardCount: input.cardCount,
          ...empty(),
          usedFanIndices: new Set(),
        }),

      bumpShuffle: () =>
        set((s) => ({ shuffleCount: s.shuffleCount + 1 })),

      drawFromFan: (fanIndex) => {
        const {
          spreadId,
          cardCount,
          positions,
          draws,
          usedFanIndices,
        } = get();
        if (!spreadId || draws.length >= cardCount) return;
        if (usedFanIndices.has(fanIndex)) return;

        const cardId = Math.floor(Math.random() * 78);
        const reversed = Math.random() < 0.35;
        const positionIndex = draws.length;
        const positionLabel = positions[positionIndex] ?? `位置 ${positionIndex + 1}`;

        const nextUsed = new Set(usedFanIndices);
        nextUsed.add(fanIndex);

        set({
          draws: [
            ...draws,
            {
              cardId,
              reversed,
              flipped: false,
              fanIndex,
              positionIndex,
              positionLabel,
            },
          ],
          usedFanIndices: nextUsed,
        });
      },

      toggleFlip: (positionIndex) =>
        set((s) => ({
          draws: s.draws.map((d) =>
            d.positionIndex === positionIndex
              ? { ...d, flipped: !d.flipped }
              : d,
          ),
        })),

      setAllFlipped: (value) =>
        set((s) => ({
          draws: s.draws.map((d) => ({ ...d, flipped: value })),
        })),

      resetDraws: () =>
        set((s) => ({
          draws: [],
          usedFanIndices: new Set(),
          interpretation: null,
        })),

      setInterpretation: (text) => set({ interpretation: text }),

      resetAll: () =>
        set({
          spreadId: null,
          spreadName: "",
          question: "",
          positions: [],
          cardCount: 0,
          ...empty(),
          usedFanIndices: new Set(),
        }),
    }),
    {
      name: "tarot-reading-flow",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (s) => ({
        spreadId: s.spreadId,
        spreadName: s.spreadName,
        question: s.question,
        positions: s.positions,
        cardCount: s.cardCount,
        shuffleCount: s.shuffleCount,
        draws: s.draws,
        interpretation: s.interpretation,
        usedFanIndices: [...s.usedFanIndices],
      }),
      merge: (persisted, current) => {
        const p = persisted as Record<string, unknown>;
        const idxs = p.usedFanIndices as number[] | undefined;
        return {
          ...current,
          ...p,
          usedFanIndices: new Set(idxs ?? []),
        } as ReadingFlowState;
      },
    },
  ),
);
