import { useContext, useEffect } from "react";

import CartMenu from "../components/cart/CartMenu";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Cart = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Cart";
  }, []);

  const pageHandle = authCtx.role !== "admin" ? <CartMenu /> : null;

  return pageHandle;
};

export default Cart;
