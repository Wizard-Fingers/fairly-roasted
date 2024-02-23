export default function ShoppingList({ basket }) {
  // Calculate total price using reduce method
  const totalPrice = basket
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div>
      <h2>Shopping Basket</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            {item.name} - £{item.getPrice()}
          </li>
        ))}
      </ul>
      <p>Total: £{totalPrice}</p> {/* Display the calculated total price */}
    </div>
  );
}
