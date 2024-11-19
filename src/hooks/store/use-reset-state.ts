import { create } from "zustand";

// define types for state values and actions separately
type State = {
  salmon: number;
  tuna: number;
};

type Actions = {
  addSalmon: (qty: number) => void;
  addTuna: (qty: number) => void;
  reset: () => void;
};

// define the initial state
const initialState: State = {
  salmon: 0,
  tuna: 0,
};

// create store
export const useSlice = create<State & Actions>()((set, get) => ({
  ...initialState,
  addSalmon: (qty: number) => {
    set({ salmon: get().salmon + qty });
  },
  addTuna: (qty: number) => {
    set({ tuna: get().tuna + qty });
  },
  reset: () => {
    set(initialState);
  },
}));
