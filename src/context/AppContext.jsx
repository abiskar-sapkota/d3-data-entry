import React, { createContext } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={api}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
