import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import RiwayatOrderMenu from "../components/akun/user/RiwayatOrderMenu";
import AuthContext from "../store/auth-context";

const RiwayatOrder = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Riwayat Order";
  }, []);

  const pageHandle =
    authCtx.isAuth && !authCtx.isAdmin ? <RiwayatOrderMenu /> : null;

  if (!authCtx.isAuth || authCtx.isAdmin) {
    history.push("/");
  }

  return pageHandle;
};

export default RiwayatOrder;
