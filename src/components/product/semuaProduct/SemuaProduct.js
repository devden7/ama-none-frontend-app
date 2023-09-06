import { useEffect, useState, useContext } from "react";

import Loading from "../../layout/loading/Loading";
import ProductList from "./ProductList";
import CartContext from "../../../store/cart-context";
import config from "../../../config";

const MainHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const cartCtx = useContext(CartContext);

  const addToCart = (item) => {
    cartCtx.tambahItem(item);
  };
  const takeProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${config.urlApi}product`);
      console.log(config.urlApi);
      const data = await response.json();
      if (response.status !== 200) {
        return;
      }
      setLoading(false);
      setProducts(data.product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    takeProduct();
  }, []);

  return (
    <section className="p-3">
      <div className="container">
        <h1 className="font-semibold text-3xl mb-2">Products</h1>
        {loading && <Loading />}
        <ProductList
          products={products}
          addCart={addToCart}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default MainHome;
