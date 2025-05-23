import {createContext, ReactNode, useContext, useState, FC} from "react";



export type AppContextType = {
    themeMode: "light" | "dark";
    setThemeMode: (mode: "light" | "dark") => void; 
}
type AppProviderProps = {
    children : ReactNode;
}

// Create context.
const AppContext = createContext<AppContextType | undefined>(undefined);


// This is Provider to Wrap entire App.
export const AppProvider:FC<AppProviderProps> = ({children}) =>{
    const getMode = localStorage.getItem("mode");
    const initialMode = getMode === "dark" ? "dark" : "light"; // Default to light
    const [themeMode, setThemeMode] = useState<"light" | "dark">(initialMode);
    localStorage.setItem("mode", themeMode);

    return (
        <AppContext.Provider value={{themeMode, setThemeMode}}>
            {children}
        </AppContext.Provider>
    )
}


// Custom hook to use context
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);

    if(!context){
        throw new Error("useAppContext must be used within an AppProvider")
    }

    return context;
}


