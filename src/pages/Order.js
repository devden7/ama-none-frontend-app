import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import OrderMenu from "../components/transaksi/OrderMenu";
import AuthContext from "../store/auth-context";

const Order = () => {
  useEffect(() => {
    document.title = "Order";
  }, []);

  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const pageHandle = authCtx.isAuth ? <OrderMenu /> : history.push("/login");
  return pageHandle;
};

export default Order;
