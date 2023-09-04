import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AkunHeader from "./AkunHeader";
import Search from "./Search";
import CartContext from "../../../store/cart-context";
import AuthContext from "../../../store/auth-context";

const Header = (props) => {
  const [totalCalcItems, setTotalCalcItems] = useState();
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const calcItem = () => {
    const jumlahItems = cartCtx.items.reduce((quantity, item) => {
      const itemQuantity =
        item.quantityItem === undefined ? 0 : item.quantityItem;
      return props.isAuth ? quantity + itemQuantity : 0;
    }, 0);
    setTotalCalcItems(jumlahItems);
  };

  useEffect(() => {
    if (!authCtx.isAdmin) {
      calcItem();
    }
  }, [authCtx.isAdmin]);

  const openSearch = () => {
    setOpen(!open);
  };

  const openNav = () => {
    props.setNav(!props.openNav);
  };

  return (
    <header className=" bg-[#212529] ">
      <div className="container mx-auto flex flex-wrap  justify-between items-center text-slate-50 py-3 px-5 relative">
        <div className="flex gap-5 text-2xl items-center">
          <button onClick={openNav}>
            <ion-icon name="menu-sharp"></ion-icon>
          </button>
          <button onClick={openSearch} className="transition lg:hidden">
            <ion-icon name="search-sharp"></ion-icon>
          </button>
          <NavLink to="/" className="flex-auto font-sans text-xl font-bold">
            amanone
          </NavLink>
        </div>
        <div className="flex gap-3 ">
          {!props.isAdmin && (
            <NavLink to="/cart">
              <button className="text-2xl relative">
                <ion-icon name="cart-sharp"></ion-icon>

                {totalCalcItems !== 0 && (
                  <p className="mt-2 h-5 w-5  rounded-full  bg-red-500 text-xs absolute mr-2 -top-3 left-5">
                    {totalCalcItems}
                  </p>
                )}
              </button>
            </NavLink>
          )}
          <AkunHeader
            userButton={props.userButton}
            setUserButton={props.setUserButton}
            adminButton={props.adminButton}
            setAdminButton={props.setAdminButton}
            mainClick={props.mainClick}
            setMainClick={props.setMainClick}
            userName={props.userName}
            isAuth={props.isAuth}
            isAdmin={props.isAdmin}
            logoutHandler={props.logoutHandler}
          />
        </div>
        <Search open={open} />
      </div>
    </header>
  );
};

export default Header;
