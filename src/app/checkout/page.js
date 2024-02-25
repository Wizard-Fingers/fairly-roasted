"use client";
import React, { useState, useEffect } from "react";
import ShoppingList from "../../components/ShoppingList";
import { StateProvider } from "@/components/StateContext";

export default function Checkout() {
  const [basket, setBasket] = useState({});

  useEffect(() => {
    // Extract basket data from the query parameters in the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const basketJson = urlParams.get("basket");
    const basket = JSON.parse(basketJson || "{}");

    setBasket(basket);
  }, []); // Run this effect only once on component mount

  return (
    <StateProvider>
      <div>
        <h1>Checkout Page</h1>
        <ShoppingList basket={basket} />
      </div>
    </StateProvider>
  );
}
