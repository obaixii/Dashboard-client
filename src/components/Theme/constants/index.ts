import { createContext } from "react"
import { ThemeProviderState } from "../types/types"


export const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)