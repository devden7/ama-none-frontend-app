import { useEffect } from "react";

import CartMenu from "../components/cart/CartMenu";

const Cart = () => {
  useEffect(() => {
    document.title = "Cart";
  }, []);
  return <CartMenu />;
};

export default Cart;
