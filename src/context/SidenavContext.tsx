import { createContext, useState } from "react";

export const SidnavContext = createContext<{
  sidenav: string | null | undefined;
  setSidenav: React.Dispatch<React.SetStateAction<string>>;
}>({ sidenav: "", setSidenav: useState });
