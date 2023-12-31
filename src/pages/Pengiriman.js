import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import PengirimanMenu from "../components/transaksi/PengirimanMenu";
import AuthContext from "../store/auth-context";

const Pengiriman = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Pengiriman";
  }, []);

  const pageHandle =
    authCtx.isAuth && !authCtx.isAdmin ? <PengirimanMenu /> : null;

  if (!authCtx.isAuth || authCtx.isAdmin) {
    history.push("/");
  }
  return pageHandle;
};

export default Pengiriman;
