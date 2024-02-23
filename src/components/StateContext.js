import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [basket, setBasket] = useState({});
  // Add other global state variables as needed

  return (
    <StateContext.Provider value={{ basket, setBasket }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
