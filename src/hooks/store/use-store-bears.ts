import createSelectors from "@/lib/generate-selectors";
import { createStore } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
  increment: () => void;
}

const store = createStore<BearState>((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increment: () => set((state) => ({ bears: state.bears + 1 })),
}));

const useBearStore = createSelectors(store);

export default useBearStore;
