import { create } from "zustand";

type Store = {
  count: number;
};

type Action = {
  incrementCount: () => void;
};

type UseStoreCount = Store & Action;

export const useStoreCount = create<UseStoreCount>()((set) => ({
  count: 0,
  incrementCount: () => set((prevState) => ({ count: prevState.count + 1 })),
}));
