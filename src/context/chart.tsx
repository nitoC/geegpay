import { createContext, useState } from "react";

export const SidnavContext = createContext<{
  chart: string | null | undefined;
  setChart: React.Dispatch<React.SetStateAction<string>>;
}>({ chart: "", setChart: useState });
