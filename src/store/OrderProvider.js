import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import OrderContext from "./order-context";
import AuthContext from "./auth-context";
import CartContext from "./cart-context";

const OrderProvider = (props) => {
  const [loading, setLoading] = useState(null);
  const [tokenUser, setTokenUser] = useState(null);

  //USER LIST ORDER
  const [orderItems, setOrderItems] = useState();
  const [singleItem, setSingleItem] = useState();
  const [orderId, setOrderId] = useState();
  const [reviewList, setReviewList] = useState([]);

  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const getOrder = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://amanone-backend-app.vercel.app/get-order",
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
      setOrderItems(data.dataOrder);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getIdOrder = async (id) => {
    setOrderId(id);
  };

  useEffect(() => {
    getIdOrder();
  }, [orderId]);

  const getSingleOrder = async () => {
    try {
      setLoading(null);
      setLoading(true);
      const response = await fetch(
        "https://amanone-backend-app.vercel.app/get-single-order/" + orderId,
        {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        }
      );
      if (response.status !== 200) {
        console.log(data.message);
        return;
      }

      const data = await response.json();
      setSingleItem(data.orderDetail);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getReviewUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://amanone-backend-app.vercel.app/get-review/" + orderId
      );
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();

      setReviewList(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const addOrder = async (order) => {
    try {
      const response = await fetch(
        "https://amanone-backend-app.vercel.app/order-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenUser}`,
          },
          body: JSON.stringify(order),
        }
      );
      if (response.status !== 201) {
        return;
      }
      const data = await response.json();
      cartCtx.setItemCart([]);
      cartCtx.setTotalBelanja(0);
      history.push("/riwayatorder");
    } catch (err) {
      console.log(err);
    }
    getOrder();
  };

  const token = () => {
    setTokenUser(authCtx.token);
  };

  useEffect(() => {
    token();
  }, [authCtx.token]);

  const orderValue = {
    orderItems: orderItems,
    singleItem: singleItem,
    reviewList,
    loading,
    getOrder: getOrder,
    getSingleOrder: getSingleOrder,
    getIdOrder: getIdOrder,
    getReviewUser,
    addOrder: addOrder,
    token: token,
  };

  return (
    <OrderContext.Provider value={orderValue}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
