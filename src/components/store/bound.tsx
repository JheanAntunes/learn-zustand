"use client";
import { useBoundStore } from "@/hooks/store/use-store-slice-pattern";
import React from "react";
import { Button } from "../ui/button";

const Bound = () => {
  const bears = useBoundStore((state) => state.bears);
  const fishes = useBoundStore((state) => state.fishes);
  const addBoth = useBoundStore((state) => state.addBoth);
  return (
    <div>
      <p>Números de Urso {bears}</p>
      <p>Números de Peixe {fishes}</p>
      <Button onClick={() => addBoth()}>Add Urso e peixe</Button>
    </div>
  );
};

export default Bound;
