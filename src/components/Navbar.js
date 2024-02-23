import Link from "next/link";

export default function Navbar({ basket, items }) {
  // Receive items as prop
  const totalQuantity = Object.values(basket).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const totalPrice = Object.entries(basket).reduce(
    (total, [itemName, quantity]) => {
      const item = items.find((item) => item.name === itemName);
      return total + item.price * quantity;
    },
    0
  );

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">My Store</h1>
        </div>
        <div>
          <Link
            href={{
              pathname: "/checkout",
              query: { basket: JSON.stringify(basket) },
            }}
          >
            <p className="text-white">Checkout</p>
          </Link>
        </div>
        <div>
          <p className="text-sm">Total Items: {totalQuantity}</p>
          <p className="text-sm">Total Price: £{totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </nav>
  );
}
