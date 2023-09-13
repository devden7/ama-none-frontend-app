import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "./auth-context";
import AdminOrderContext from "./admin-order-context";
import config from "../config";

const AdminOrderProvider = (props) => {
  //ADMIN LIST ORDER
  const [adminListOrder, setAdminListOrder] = useState();
  const [adminListSingleOrder, setAdminListSingleOrder] = useState();
  const [tokenUser, setTokenUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const token = () => {
    setTokenUser(authCtx.token);
  };

  useEffect(() => {
    token();
  }, [authCtx.token]);

  const getAdminOrder = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${config.urlApi}admin/get-all-order`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      setAdminListOrder(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getAdminSingleOrder = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${config.urlApi}admin/single-order-admin/${id}`,
        {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        }
      );
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      setAdminListSingleOrder(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatusPengiriman = async (id, status) => {
    try {
      const response = await fetch(`${config.urlApi}admin/kirim-barang/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenUser}`,
        },
        body: JSON.stringify(status),
      });

      if (response.status !== 201) {
        return;
      }
    } catch (err) {
      console.log(err);
    }
    history.push("/admin/orders");
  };

  const orderAdminValue = {
    adminListOrder,
    adminListSingleOrder,

    getAdminOrder,
    getAdminSingleOrder,
    updateStatusPengiriman,
    token,
    loading,
  };

  return (
    <AdminOrderContext.Provider value={orderAdminValue}>
      {props.children}
    </AdminOrderContext.Provider>
  );
};

export default AdminOrderProvider;
