"use client";

import { createContext } from "react";
import { FishStore } from "../store/use-store-init-props-fish";

export const ContextFish = createContext<FishStore | null>(null);
