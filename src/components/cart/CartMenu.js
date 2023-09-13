import { useContext } from "react";
import { NavLink } from "react-router-dom";

import CartList from "./CartList";
import OrderBar from "./OrderBar";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

const CartMenu = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const tambahQuantity = (item) => {
    cartCtx.tambahItem(item);
  };

  const kurangQuantity = (id) => {
    cartCtx.kurangItem(id);
  };

  const hapusItemCart = (id) => {
    cartCtx.hapusItem(id);
  };
  return (
    <section className="p-3">
      <div className="container mx-auto">
        <div className=" mx-auto">
          <h1 className="font-semibold text-3xl mb-2 text-slate-800">
            Keranjang Belanja
          </h1>
          <div className="flex flex-wrap justify-between md:flex-nowrap gap-4">
            <div className="flex flex-wrap flex-col w-full">
              <div className=" w-full">
                {authCtx.isAuth === true &&
                  cartCtx.items.length === 0 &&
                  cartCtx.loading === false && (
                    <div className="bg-[#b6effb]  p-4 rounded-lg">
                      <p>
                        Keranjang belanja kosong,
                        <NavLink to="/" className="text-blue-700">
                          Cari Barang..
                        </NavLink>
                      </p>
                    </div>
                  )}

                {!authCtx.isAuth && (
                  <div className="bg-[#b6effb]  p-4 rounded-lg">
                    <p>
                      Silahkan Login terlebih dahulu
                      <NavLink to="/login" className="text-blue-700 font-bold">
                        <span> </span>disini
                      </NavLink>
                    </p>
                  </div>
                )}
              </div>
              {authCtx.isAuth && (
                <CartList
                  items={cartCtx.items}
                  tambahQuantity={tambahQuantity}
                  kurangQuantity={kurangQuantity}
                  hapusItemCart={hapusItemCart}
                />
              )}
            </div>
            <OrderBar
              items={cartCtx.items}
              totalBelanja={cartCtx.totalBelanja}
              isAuth={authCtx.isAuth}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartMenu;
