import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AdminOrders from "../../components/akun/admin/orders/AdminOrders";
import AuthContext from "../../store/auth-context";

const Orders = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    document.title = "Orders List";
  }, []);

  const pageHandle = authCtx.isAuth ? <AdminOrders /> : history.push("/login");

  return pageHandle;
};

export default Orders;
