import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import PembayaranMenu from "../components/transaksi/PembayaranMenu";
import AuthContext from "../store/auth-context";

const Pembayaran = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Pembayaran";
  }, []);

  const pageHandle =
    authCtx.isAuth && !authCtx.isAdmin ? <PembayaranMenu /> : null;

  if (!authCtx.isAuth || authCtx.isAdmin) {
    history.push("/");
  }
  return pageHandle;
};

export default Pembayaran;
