import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/CartSlice";

const ProductTile = ({ products }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const exists = cart.some(item => item.id === products.id);

  return (
    <div className="group flex flex-col items-center border-2 border-red-400 gap-3 h-[360px] overflow-auto">
      <div className="h-[200px]">
        <img
          src={products.thumbnail}
          alt={products.title}
          onError={(e) => {
            e.target.src = "/fallback.png";
          }}
        />
      </div>

      <h1 className="w-40 mt-5 truncate font-semibold text-gray-700">
        {products.title}
      </h1>

      <button
        onClick={() =>
          exists
            ? dispatch(removeFromCart(products.id))
            : dispatch(addToCart(products))
        }
        className="bg-blue-300 px-4 py-2 rounded-lg font-bold hover:bg-blue-400 active:bg-blue-500"
      >
        {exists ? "Remove Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default ProductTile;
