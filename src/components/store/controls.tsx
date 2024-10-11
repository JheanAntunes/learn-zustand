"use client";
import React from "react";
import { Button } from "../ui/button";
import { useStoreCount } from "@/hooks/store/use-store-count";

const ControlsCount = () => {
  const incrementCount = useStoreCount((state) => state.incrementCount);
  const handleClick = () => incrementCount();
  return <Button onClick={handleClick}>Incrementa count</Button>;
};

export default ControlsCount;
