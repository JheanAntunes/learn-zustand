"use client";
import React from "react";
import { Button } from "../ui/button";
import useBearStore from "@/hooks/store/use-store-bears";

const BearControl = () => {
  const increment = useBearStore.use.increment();
  return (
    <div>
      <Button onClick={() => increment()}>Adicionar um Urso</Button>
    </div>
  );
};

export default BearControl;
