import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
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

export const useStoreAnimais = create<UseStoreAnimais>()(
  immer((set) => ({
    mae: 0,
    pai: {
      dogs: {
        dog: {
          children: 0,
        },
      },
    },
    // addChildrenDog: () =>
    //   set((state) => ({
    //     pai: {
    //       ...state.pai,
    //       dogs: {
    //         ...state.pai.dogs,
    //         dog: { children: state.pai.dogs.dog.children + 1 },
    //       },
    //     },
    //   })),

    addChildrenDog: () =>
      set((state) => {
        ++state.pai.dogs.dog.children;
      }),
  }))
);
