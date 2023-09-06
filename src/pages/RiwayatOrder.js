import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import RiwayatOrderMenu from "../components/akun/user/RiwayatOrderMenu";
import AuthContext from "../store/auth-context";

const RiwayatOrder = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const pageHandle = authCtx.isAuth ? (
    <RiwayatOrderMenu />
  ) : (
    history.push("/login")
  );

  useEffect(() => {
    document.title = "Riwayat Order";
  }, []);

  return pageHandle;
};

export default RiwayatOrder;
