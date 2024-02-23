"use client";
import React, { useState } from "react";
import ShoppingList from "../components/ShoppingList";
import ItemDisplay from "../components/ItemDisplay";
import Basket from "../components/Basket";
import Item from "../components/Item";

export default function Home() {
  const [basket, setBasket] = useState([]); // Initializing state as an empty array

  const items = [
    new Item("Item 1", 10),
    new Item("Item 2", 20),
    // Add more items as needed
  ];

  const handleAddToBasket = (item) => {
    // Create a new copy of the basket array with the new item added
    const updatedBasket = [...basket, item];
    setBasket(updatedBasket); // Update state with the new basket
  };

  return (
    <main className="">
      <div>
        <h1>My Store</h1>
        <div>
          {items.map((item, index) => (
            <ItemDisplay
              key={index}
              item={item}
              onAddToBasket={handleAddToBasket}
            />
          ))}
        </div>
        <ShoppingList basket={basket} />
      </div>
    </main>
  );
}
