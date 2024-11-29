"use client";
import { useContext } from "react";
import { useStore } from "zustand";
import { BearContext } from "./context-bear";
import { BearState } from "../store/use-store-init-props";

export function useBearContext<T>(selector: (state: BearState) => T): T {
  const store = useContext(BearContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  return useStore(store, selector);
}
