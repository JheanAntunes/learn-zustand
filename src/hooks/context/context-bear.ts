"use client";
import { createContext } from "react";
import { BearStore } from "../store/use-store-init-props";

export const BearContext = createContext<BearStore | null>(null);
