import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/CartSlice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between w-full border p-4 bg-white rounded-lg shadow-sm">
      {/* IMAGE */}
      <img
        src={cartItem.thumbnail}
        alt={cartItem.title}
        className="w-20 h-20 object-cover rounded-md"
      />

      {/* TITLE + PRICE */}
      <div className="flex-1 px-4">
        <h1 className="font-semibold truncate w-40">{cartItem.title}</h1>
        <p className="text-gray-600 text-sm">${cartItem.price}</p>
      </div>

      

        <span className="font-semibold">{cartItem.quantity}</span>

        

      {/* REMOVE BUTTON */}
      <button
        onClick={() => dispatch(removeFromCart(cartItem.id))}
        className="bg-blue-300 px-4 py-2 rounded-lg font-bold hover:bg-blue-400 active:bg-blue-500"
      >
        Remove
      </button>
    </div>
  );
};

export default CartTile;
