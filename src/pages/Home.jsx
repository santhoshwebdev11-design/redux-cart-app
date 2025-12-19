import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import ProductTile from "../component/product-tile/ProductTile";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    console.log(data);

    if (data) {
      setProducts(data.products); // ✔ Correct array
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          <HashLoader size={100} color="blue" />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-6xl">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile key={productItem.id} products={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
