import { create } from "zustand";

export type FishProps = {
  fishes: number;
};

export type FishState = FishProps & {
  addFish: () => void;
};

export type FishStore = ReturnType<typeof createStoreFish>;

export const createStoreFish = (initProps?: Partial<FishProps>) => {
  const defaultValue: FishProps = {
    fishes: 0,
  };

  const createStore = create<FishState>()((set) => ({
    ...defaultValue,
    ...initProps,
    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
  }));
  return createStore;
};
