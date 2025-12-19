import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../component/cart-tile/CartTile";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
  setTotalCart(
    cart.reduce((acc, curr) => {
      const price = Number(curr.price) || 0;
      const qty = Number(curr.quantity) || 1;
      return acc + price * qty;
    }, 0)
  );
}, [cart]);


  return (
    <div className="min-h-[80vh] max-w-6xl mx-auto p-4">

      {cart && cart.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT SIDE - CART ITEMS */}
          <div className="flex flex-col gap-4">
            {cart.map((cartItem) => (
              <CartTile key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          {/* RIGHT SIDE - CART SUMMARY */}
          <div className="bg-gray-100 p-6 rounded-lg h-max shadow-sm">

            <h1 className="text-2xl font-bold mb-4">Order Summary</h1>

           

            <div className="flex justify-between mb-4">
              <p className="text-gray-700">Total Price:</p>
              <p className="font-semibold text-lg">${totalCart}</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        // EMPTY CART VIEW
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-3">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-blue-300 px-4 py-2 rounded-lg font-bold hover:bg-blue-400 active:bg-blue-500">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
