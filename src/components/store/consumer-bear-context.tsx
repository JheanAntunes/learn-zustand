"use client";

import { useBearContext } from "@/hooks/context/use-bear-context";

// Consumer usage of the custom hook
export function ConsumerBeaContext() {
  const bears = useBearContext((state) => state.bears);
  const addBear = useBearContext((state) => state.addBear);
  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  );
}
