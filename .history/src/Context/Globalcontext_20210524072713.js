import React, { useContext, createContext } from "react";
import { useProvideAuth } from "../Hooks/useProvideAuth";
const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {!auth.loading && children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};
