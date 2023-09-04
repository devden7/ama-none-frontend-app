import { Fragment, useState, useContext } from "react";

import Header from "./header/Header";
import SideMenu from "./sideMenu/SideMenu";
import AuthContext from "../../store/auth-context";

const Layout = (props) => {
  const [openNav, setOpenNav] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [mainClick, setMainClick] = useState(false);

  const [userButton, setUserButton] = useState(false);
  const [adminButton, setAdminButton] = useState(false);

  const AuthCtx = useContext(AuthContext);

  const clickHandler = () => {
    if (userButton) {
      setMainClick(!mainClick);
      setUserButton(false);
    }

    if (adminButton) {
      setMainClick(!mainClick);
      setAdminButton(false);
    }
  };

  return (
    <Fragment>
      <SideMenu
        openNav={openNav}
        setNav={setOpenNav}
        openBackdrop={backdrop}
        setBackd={setBackdrop}
        isAuth={AuthCtx.isAuth}
        logoutHandler={AuthCtx.logoutHandler}
      />
      <Header
        openNav={openNav}
        setNav={setOpenNav}
        userButton={userButton}
        setUserButton={setUserButton}
        adminButton={adminButton}
        setAdminButton={setAdminButton}
        mainClick={mainClick}
        setMainClick={setMainClick}
        userName={AuthCtx.userName}
        isAuth={AuthCtx.isAuth}
        isAdmin={AuthCtx.isAdmin}
        logoutHandler={AuthCtx.logoutHandler}
      />
      <main onClick={clickHandler}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
