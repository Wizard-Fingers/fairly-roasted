export default function ShoppingList({ basket }) {
  return (
    <div>
      <h2>Shopping Basket</h2>
      <ul>
        {Object.keys(basket).map((itemName, index) => (
          <li key={index}>
            {itemName} - Quantity: {basket[itemName]}
          </li>
        ))}
      </ul>
    </div>
  );
}
