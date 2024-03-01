import { createContext } from "react"

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
    return (
        <GlobalContext.Provider
            value={{

            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}