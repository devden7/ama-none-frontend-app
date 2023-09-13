import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import OrderContext from "./order-context";
import AuthContext from "./auth-context";
import CartContext from "./cart-context";
import config from "../config";

const OrderProvider = (props) => {
  const [loading, setLoading] = useState(null);
  const [tokenUser, setTokenUser] = useState(null);

  //USER LIST ORDER
  const [orderItems, setOrderItems] = useState();
  const [singleItem, setSingleItem] = useState();
  const [orderId, setOrderId] = useState();

  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const token = () => {
    setTokenUser(authCtx.token);
  };

  useEffect(() => {
    token();
  }, [authCtx.token]);

  const getOrder = async () => {
    if (
      authCtx.isAuth &&
      tokenUser !== null &&
      authCtx.isAuth &&
      !authCtx.isAdmin
    ) {
      setLoading(true);
      try {
        const response = await fetch(`${config.urlApi}get-order`, {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        });
        const data = await response.json();

        if (response.status !== 200) {
          authCtx.logoutHandler();
          history.push("/login");
          console.log(data.message);
          return;
        }
        setOrderItems(data.dataOrder);
        setLoading(null);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    getOrder();
  }, [tokenUser]);

  const getIdOrder = (id) => {
    setOrderId(id);
  };

  const getSingleOrder = async () => {
    if (
      orderId !== undefined &&
      tokenUser !== null &&
      authCtx.isAuth &&
      !authCtx.isAdmin
    ) {
      setLoading(true);
      try {
        const response = await fetch(
          `${config.urlApi}get-single-order/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${tokenUser}`,
            },
          }
        );
        const data = await response.json();
        if (response.status !== 200) {
          console.log(data.message);
          return;
        }

        setSingleItem(data.orderDetail);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const addOrder = async (order) => {
    try {
      const response = await fetch(`${config.urlApi}order-product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenUser}`,
        },
        body: JSON.stringify(order),
      });
      if (response.status !== 201) {
        return;
      }
      const data = await response.json();
      cartCtx.setItemCart([]);
      history.push("/riwayatorder");
    } catch (err) {
      console.log(err);
    }
    getOrder();
  };

  const orderValue = {
    orderItems,
    singleItem,
    loading,
    orderId,
    tokenUser,
    getOrder,
    getSingleOrder,
    getIdOrder,
    addOrder,
    token,
  };

  return (
    <OrderContext.Provider value={orderValue}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
