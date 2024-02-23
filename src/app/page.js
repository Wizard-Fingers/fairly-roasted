"use client";
import React, { useState } from "react";
import ShoppingList from "../components/ShoppingList";
import ItemDisplay from "../components/ItemDisplay";
import Item from "../components/Item";

export default function Home() {
  const [basket, setBasket] = useState({}); // Initialize basket as an empty object

  const items = [
    new Item("Item 1", 10),
    new Item("Item 2", 20),
    // Add more items as needed
  ];

  const handleAddToBasket = (item) => {
    // Check if the item already exists in the basket
    if (basket[item.name]) {
      // If yes, increment its quantity
      const updatedBasket = { ...basket };
      updatedBasket[item.name] += 1;
      setBasket(updatedBasket);
    } else {
      // If not, add it to the basket with a quantity of 1
      setBasket({ ...basket, [item.name]: 1 });
    }
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
