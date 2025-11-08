import { useState } from "react";

import { LoaderContext } from "../contexts/LoaderContext";

import { Loader } from '../components/Loader.component';

export function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      <Loader isLoading={isLoading}>
        {children}
      </Loader>
    </LoaderContext.Provider>
  );
}

