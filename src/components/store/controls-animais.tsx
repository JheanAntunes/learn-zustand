"use client";
import React from "react";
import { Button } from "../ui/button";
import { useStoreAnimais } from "@/hooks/store/use-store-animais";

const ControlsAnimais = () => {
  const addChildrenDog = useStoreAnimais((state) => state.addChildrenDog);

  return (
    <div className="flex gap-5">
      <Button onClick={() => addChildrenDog()}>Add Children Dogs</Button>
    </div>
  );
};

export default ControlsAnimais;
