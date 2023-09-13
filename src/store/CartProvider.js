import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import CartContext from "./cart-context";
import AuthContext from "./auth-context";
import config from "../config";

const CartProvider = (props) => {
  const [itemCart, setItemCart] = useState([]);
  const [totalBelanja, setTotalBelanja] = useState(0);
  const [tokenUser, setTokenUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const token = () => {
    setTokenUser(authCtx.token);
  };

  useEffect(() => {
    token();
  }, [authCtx.isAuth, authCtx.token]);

  const takeDataCart = async () => {
    if (authCtx.role === "users" && authCtx.isAuth) {
      try {
        setLoading(true);
        const response = await fetch(`${config.urlApi}get-cart`, {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        });

        const data = await response.json();

        if (response.status !== 200) {
          console.log(data.message);
          return;
        } else if (data.items[0] === undefined) {
          authCtx.logoutHandler();
          history.push("/login");
          console.log("silahkan login ulang");
        } else {
          setItemCart(data.items[0].cart);
          let result = 0;
          for (let i = 0; i < data.items[0].cart.length; i++) {
            result =
              result +
              data.items[0].cart[i].harga * data.items[0].cart[i].quantityItem;
            setTotalBelanja(result);
          }
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (tokenUser !== null) {
      takeDataCart();
    }
  }, [tokenUser, authCtx.token]);

  const addItemToCart = async (item) => {
    try {
      const response = await fetch(`${config.urlApi}add-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenUser}`,
        },
        body: JSON.stringify(item),
      });
      if (response.status !== 201) {
        return;
      }
    } catch (err) {
      console.log(err);
    }
    takeDataCart();
  };

  const kurangItemFromCart = async (id) => {
    try {
      const response = await fetch(`${config.urlApi}reduce-quantity/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      if (response.status !== 201) {
        return;
      }
    } catch (err) {
      console.log(err);
    }
    takeDataCart();
  };

  const hapusItem = async (id) => {
    try {
      const response = await fetch(`${config.urlApi}delete-cart/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      if (response.status !== 201) {
        return;
      }
      const updateItemCart = itemCart.filter((itemId) => itemId.id !== id);

      const cariItemIndex = itemCart.findIndex(
        (itemIndex) => itemIndex.id === id
      );
      const itemReady = itemCart[cariItemIndex];
      setItemCart(updateItemCart);
      setTotalBelanja(totalBelanja - itemReady.harga * itemReady.quantityItem);
    } catch (err) {
      console.log(err);
    }
  };

  const resetTotalBelanja = () => {
    setTotalBelanja(0);
  };

  const cartValue = {
    items: itemCart,
    totalBelanja,
    loading,
    setItemCart,
    tambahItem: addItemToCart,
    kurangItem: kurangItemFromCart,
    hapusItem: hapusItem,
    takeDataCart,
    token,
    resetTotalBelanja,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
