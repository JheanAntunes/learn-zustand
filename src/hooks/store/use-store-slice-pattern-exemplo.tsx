import { create, StateCreator } from "zustand";

type StoreBear = {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
};

type StoreFish = {
  fishes: number;
  addFish: () => void;
};

const createStoreBear: StateCreator<
  StoreBear & StoreFish,
  [],
  [],
  StoreBear
> = (set) => ({
  bears: 0,
  addBear: () => {},
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

const createStoreFish: StateCreator<
  StoreFish & StoreBear,
  [],
  [],
  StoreFish
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

export const useStoreBound = create<StoreFish & StoreBear>()((...a) => ({
  ...createStoreBear(...a),
  ...createStoreFish(...a),
}));
