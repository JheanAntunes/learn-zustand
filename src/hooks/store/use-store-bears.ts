import createSelectors from "@/lib/generate-selectors";
import { createStore } from "zustand";

interface BearState {
  bears: number;
}

interface BearAction {
  increase: (by: number) => void;
  increment: () => void;
}
const initStateBear: BearState = {
  bears: 0,
};

const store = createStore<BearState & BearAction>((set) => ({
  ...initStateBear,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increment: () => set((state) => ({ bears: state.bears + 1 })),
}));

export const setIncrease = () =>
  store.setState((state) => ({
    bears: state.bears + 1,
  }));

export const resetState = () => store.setState(initStateBear);

const useBearStore = createSelectors(store);

export default useBearStore;
