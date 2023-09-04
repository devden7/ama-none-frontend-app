import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import RiwayatOrderMenu from "../components/akun/user/RiwayatOrderMenu";
import AuthContext from "../store/auth-context";

const RiwayatOrder = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Riwayat Order";
  }, []);

  const pageHandle = authCtx.isAuth ? (
    <RiwayatOrderMenu />
  ) : (
    history.push("/login")
  );
  return pageHandle;
};

export default RiwayatOrder;
