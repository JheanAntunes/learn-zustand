"use client";
import useBearStore from "@/hooks/store/use-store-bears";
import React from "react";

const Bear = () => {
  const bears = useBearStore.use.bears();
  return (
    <div>
      <h1 className="text-2xl">Bear: {bears}</h1>
    </div>
  );
};

export default Bear;
