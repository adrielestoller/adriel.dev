"use client";

import { createContext } from "react";

export const FontContext = createContext({});

export function FontProvider({ children, fonts }) {
  return <FontContext.Provider value={fonts}>{children}</FontContext.Provider>;
}
