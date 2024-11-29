import { ContextFish } from "@/hooks/context/context-fish";
import {
  createStoreFish,
  FishProps,
  FishStore,
} from "@/hooks/store/use-store-init-props-fish";
import React, { useRef } from "react";

type ProviderContextProps = React.PropsWithChildren<FishProps>;

const ProviderContextFish = ({ children, ...props }: ProviderContextProps) => {
  const store = useRef<FishStore>();
  if (!store.current) store.current = createStoreFish(props);

  return (
    <ContextFish.Provider value={store.current}>
      {children}
    </ContextFish.Provider>
  );
};

export default ProviderContextFish;
