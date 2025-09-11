import { createContext, useState } from "react";
import { Loader } from "../components/Loader.component";

export const LoaderContext = createContext();

export function LoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            <Loader isLoading={isLoading}>
                {children}
            </Loader>
        </LoaderContext.Provider>
    );
}

