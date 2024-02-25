"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    // Initialize basket state with values from localStorage, if available
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : {};
  });

  useEffect(() => {
    // Update localStorage whenever basket state changes
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <StateContext.Provider value={{ basket, setBasket }}>
      {children}
    </StateContext.Provider>
  );
};
