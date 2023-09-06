import { useContext, useEffect } from "react";

import RiwayatOrderlist from "./RiwayatOrderList";
import orderContext from "../../../store/order-context";
import Loading from "../../layout/loading/Loading";
import AuthContext from "../../../store/auth-context";

const RiwayatOrderMenu = () => {
  const orderCtx = useContext(orderContext);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx.isAuth) {
      orderCtx.getOrder();
    }
  }, [authCtx.isAuth, authCtx.token]);

  const getIdOrder = (id) => {
    orderCtx.getIdOrder(id);
  };

  return (
    <section className="p-3">
      <div className="container">
        <div>
          <h1 className="font-semibold text-3xl my-2">Riwayat Pesanan</h1>
          {orderCtx.loading === true && <Loading />}
          {orderCtx.orderItems?.length === 0 && orderCtx.loading === false && (
            <p>Transaksi pesanan tidak ada</p>
          )}
          {orderCtx.loading === false && orderCtx.orderItems.length !== 0 && (
            <RiwayatOrderlist
              orderList={orderCtx.orderItems}
              getIdOrder={getIdOrder}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default RiwayatOrderMenu;
