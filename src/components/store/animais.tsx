"use client";
import { useStoreAnimais } from "@/hooks/store/use-store-animais";
import React from "react";

const Animais = () => {
  const dogChildren = useStoreAnimais((state) => state.pai.dogs.dog.children);
  return (
    <div>
      <h1>Animais</h1>
      <p>Cachorros Filhotes: {dogChildren}</p>
    </div>
  );
};

export default Animais;
