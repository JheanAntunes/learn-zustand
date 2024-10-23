import { create } from "zustand";
type State = {
  mae: number;
  pai: {
    dogs: {
      dog: {
        children: number;
      };
    };
  };
};

type Action = {
  addChildrenDog: () => void;
};

type UseStoreAnimais = State & Action;

export const useStoreAnimais = create<UseStoreAnimais>()((set) => ({
  mae: 0,
  pai: {
    dogs: {
      dog: {
        children: 0,
      },
    },
  },
  addChildrenDog: () =>
    set((state) => ({
      pai: {
        ...state.pai,
        dogs: {
          ...state.pai.dogs,
          dog: { children: state.pai.dogs.dog.children + 1 },
        },
      },
    })),
}));
