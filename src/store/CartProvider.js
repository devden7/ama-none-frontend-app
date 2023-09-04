import { useEffect, useState, useContext } from "react";

import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
  const [itemCart, setItemCart] = useState([]);
  const [totalBelanja, setTotalBelanja] = useState(0);
  const [tokenUser, setTokenUser] = useState(null);

  const authCtx = useContext(AuthContext);

  const token = () => {
    setTokenUser(authCtx.token);
  };

  useEffect(() => {
    token();
  }, [authCtx.isAuth]);

  const takeDataCart = async () => {
    if (!authCtx.isAdmin) {
      try {
        const response = await fetch("http://localhost:8080/get-cart", {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        });

        const data = await response.json();
        if (response.status !== 200) {
          console.log(data.message);
          return;
        } else {
          setItemCart(data?.items[0].cart);
          let result = 0;
          for (let i = 0; i < data.items[0].cart.length; i++) {
            result =
              result +
              data.items[0].cart[i].harga * data.items[0].cart[i].quantityItem;
            setTotalBelanja(result);
          }
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
  }, [tokenUser]);

  const addItemToCart = async (item) => {
    try {
      const response = await fetch("http://localhost:8080/add-cart", {
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
      const response = await fetch(
        `http://localhost:8080/reduce-quantity/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
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
      const response = await fetch(`http://localhost:8080/delete-cart/${id}`, {
        method: "DELETE",
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

  const cartValue = {
    items: itemCart,
    setItemCart,
    totalBelanja: totalBelanja,
    takeDataCart: takeDataCart,
    tambahItem: addItemToCart,
    kurangItem: kurangItemFromCart,
    hapusItem: hapusItem,
    token: token,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
