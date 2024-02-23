import React from "react";

export default function ItemDisplay({ item, onAddToBasket }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: £{item.getPrice()}</p>
      <button onClick={() => onAddToBasket(item)}>Add to Basket</button>
    </div>
  );
}
