"use client";
import React, { useState } from "react";
import ShoppingList from "../components/ShoppingList";
import ItemDisplay from "../components/ItemDisplay";
import Item from "../components/Item";
import Navbar from "../components/Navbar";

export default function Home() {
  const [basket, setBasket] = useState({});

  const items = [
    new Item("Item 1", 10),
    new Item("Item 2", 20),
    // Add more items as needed
  ];

  const handleAddToBasket = (item) => {
    if (basket[item.name]) {
      const updatedBasket = { ...basket };
      updatedBasket[item.name] += 1;
      setBasket(updatedBasket);
    } else {
      setBasket({ ...basket, [item.name]: 1 });
    }
  };

  return (
    <main className="">
      <Navbar basket={basket} items={items} /> {/* Pass items array as prop */}
      <div>
        <h1 className=" text-center my-4 text-4xl font-bold">My Store</h1>
        <div>
          {items.map((item, index) => (
            <ItemDisplay
              key={index}
              item={item}
              onAddToBasket={handleAddToBasket}
            />
          ))}
        </div>
        {/* <ShoppingList basket={basket} /> */}
      </div>
    </main>
  );
}
