import { useContext, useEffect } from "react";

import OrdersList from "./OrdersList";
import AdminOrderContext from "../../../../store/admin-order-context";
import AuthContext from "../../../../store/auth-context";
import Loading from "../../../layout/loading/Loading";

const AdminOrders = () => {
  const adminOrderCtx = useContext(AdminOrderContext);
  const authCtx = useContext(AuthContext);

  if (adminOrderCtx.adminListOrder?.length === 0) {
    console.log("tidak ada order");
  }
  const getSingleOrderHandler = (id) => {
    adminOrderCtx.getAdminSingleOrder(id);
  };

  useEffect(() => {
    if (authCtx.isAuth) {
      adminOrderCtx.getAdminOrder();
    }
  }, [authCtx.isAuth]);

  return (
    <section className="p-3">
      <div className="container">
        {adminOrderCtx.loading && <Loading />}
        {adminOrderCtx.loading === false && (
          <div>
            <h1 className="font-semibold text-3xl my-2">Orders</h1>
            <table className="table-auto w-full text-left border-b-[1px] border-solid border-slate-300 p-3">
              {adminOrderCtx.adminListOrder?.length !== 0 && (
                <thead className="border-b-[1px] border-solid border-slate-300 my-3 ">
                  <tr className="p-5">
                    <th className="pr-2">ID</th>
                    <th className="pr-2">User</th>
                    <th className="pr-2">Tanggal</th>
                    <th className="pr-2">Total</th>
                    <th className="pr-2">Pembayaran</th>
                    <th className="pr-2">SESUAIKAN</th>
                  </tr>
                </thead>
              )}

              {adminOrderCtx.adminListOrder?.map((order) => (
                <OrdersList
                  key={order._id}
                  id={order._id}
                  nama={order.accountInfo.namaAkun}
                  tanggal={order.detailOrderan.tanggal}
                  totalBelanja={order.detailOrderan.totalBelanja}
                  pembayaran={order.detailOrderan.pembayaran}
                  getSingleOrderHandler={getSingleOrderHandler.bind(
                    null,
                    order._id
                  )}
                />
              ))}
            </table>
            <div>
              {adminOrderCtx.adminListOrder?.length === 0 && (
                <p>tidak ada list orders</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminOrders;
