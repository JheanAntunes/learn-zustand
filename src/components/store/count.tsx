"use client";
import { useStoreCount } from "@/hooks/store/use-store-count";
import React from "react";

const Count = () => {
  const Count = useStoreCount((state) => state.count);
  return (
    <div>
      <p>Count: {Count}</p>
    </div>
  );
};

export default Count;
