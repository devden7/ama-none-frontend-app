import { Fragment, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import CartContext from "../../../store/cart-context";

const AkunHeader = (props) => {
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  const userClick = () => {
    props.setMainClick(false);
    props.setUserButton(!props.userButton);
  };
  const adminClick = () => {
    props.setMainClick(false);
    props.setAdminButton(!props.adminButton);
  };

  const logoutBtnHandler = () => {
    props.logoutHandler();
    cartCtx.resetTotalBelanja();
    history.push("/login");
  };
  return (
    <Fragment>
      <div
        className="flex items-center gap-1 relative cursor-pointer"
        onClick={userClick}
      >
        {!props.isAdmin && props.isAuth && (
          <button className="ml-2">{props.userName}</button>
        )}
        {!props.isAuth && (
          <NavLink to="/login" className="ml-2">
            Login
          </NavLink>
        )}
        {props.isAuth && !props.isAdmin && (
          <ion-icon name="chevron-down-outline"></ion-icon>
        )}

        {props.userButton &&
          !props.mainClick &&
          props.isAuth &&
          !props.isAdmin && (
            <div className="flex flex-col w-[120px] gap-2 p-2 absolute  top-11 right-1 bg-white shadow-md rounded-md text-slate-700 z-50">
              <NavLink to="/profile">User Profile</NavLink>
              <NavLink to="/riwayatorder">Orders History</NavLink>
              <hr />
              <p onClick={logoutBtnHandler}>Sign Out</p>
            </div>
          )}
      </div>
      {props.isAdmin && props.isAuth && (
        <div
          className="flex items-center gap-1 relative cursor-pointer"
          onClick={adminClick}
        >
          <button>Admin</button>
          <ion-icon name="chevron-down-outline"></ion-icon>

          {props.adminButton && (
            <div className="flex flex-col w-[110px] gap-2 p-2 absolute  top-11 right-1 bg-white shadow-md rounded-md text-slate-700 z-10">
              <NavLink to="/admin/dashboard">Dashboard</NavLink>
              <NavLink to="/admin/products">Products</NavLink>
              <NavLink to="/admin/orders">Orders</NavLink>
              <NavLink to="/admin/users">Users</NavLink>
              <p onClick={logoutBtnHandler}>Sign Out</p>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default AkunHeader;
