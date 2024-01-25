import { createContext, useState } from "react";

export const MyContext = createContext<{
  theme: string | null | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({ theme: "", setTheme: useState });
