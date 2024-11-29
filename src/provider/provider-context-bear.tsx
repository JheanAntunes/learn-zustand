"use client";
import { BearContext } from "@/hooks/context/context-bear";
import {
  BearProps,
  BearStore,
  createBearStore,
} from "@/hooks/store/use-store-init-props";
import React, { useRef } from "react";

type ProviderContextBearProps = React.PropsWithChildren<BearProps>;

const ProviderContextBear = ({
  children,
  ...props
}: ProviderContextBearProps) => {
  const store = useRef<BearStore>();
  if (!store.current) store.current = createBearStore(props);
  return (
    <BearContext.Provider value={store.current}>
      {children}
    </BearContext.Provider>
  );
};

export default ProviderContextBear;
