import { createContext } from "react";

export type Theme = "light" | "dark"

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}