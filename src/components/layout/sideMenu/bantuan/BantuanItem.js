import { NavLink } from "react-router-dom";

const BantuanItem = (props) => {
  return (
    <li className="ml-5 mt-5 flex flex-col  items-start gap-3">
      <h3 className="text-xl font-bold  text-slate-900">Bantuan</h3>
      {!props.isAuth ? (
        <NavLink to="/login" className="text-base">
          Login
        </NavLink>
      ) : (
        <button onClick={props.logoutHandler} className="text-base">
          Logout
        </button>
      )}
    </li>
  );
};

export default BantuanItem;
