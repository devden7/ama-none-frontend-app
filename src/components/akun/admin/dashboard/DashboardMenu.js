import { useContext, useEffect, useState } from "react";

import DashBoardPenghasilan from "./DashboardPenghasilan";
import AreaChart from "./AreaChart";
import PieChart from "./PieChart";
import AdminOrderContext from "../../../../store/admin-order-context";
import AuthContext from "../../../../store/auth-context";
import config from "../../../../config";

const DashboardMenu = (props) => {
  const [userList, setUserList] = useState();
  const adminOrderCtx = useContext(AdminOrderContext);
  const authCtx = useContext(AuthContext);

  const getUser = async () => {
    const response = await fetch(`${config.urlApi}admin/get-all-user`, {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    });
    const data = await response.json();
    setUserList(data.userList);
  };

  useEffect(() => {
    getUser();
    if (authCtx.isAuth) {
      adminOrderCtx.getAdminOrder();
    }
  }, [authCtx.isAuth]);

  const jumlahPenjualan = adminOrderCtx.adminListOrder?.reduce(
    (quantity, item) => {
      return quantity + item.detailOrderan.totalBelanja;
    },
    0
  );

  return (
    <section className="p-3">
      <div className="container">
        <h1 className="font-semibold text-3xl mb-8 text-slate-800">
          Dashboard
        </h1>

        <DashBoardPenghasilan
          userList={userList}
          totalOrder={adminOrderCtx.adminListOrder?.length}
          jumlahPenjualan={jumlahPenjualan}
          order={adminOrderCtx?.adminListOrder}
        />

        <AreaChart order={adminOrderCtx.adminListOrder} />

        <PieChart order={adminOrderCtx.adminListOrder} />
      </div>
    </section>
  );
};

export default DashboardMenu;
