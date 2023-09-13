import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import OrderMenu from "../components/transaksi/OrderMenu";
import AuthContext from "../store/auth-context";

const Order = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Order";
  }, []);

  const pageHandle = authCtx.isAuth && !authCtx.isAdmin ? <OrderMenu /> : null;

  if (!authCtx.isAuth || authCtx.isAdmin) {
    history.push("/");
  }
  return pageHandle;
};

export default Order;
