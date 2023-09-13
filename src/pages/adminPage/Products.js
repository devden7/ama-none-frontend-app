import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AdminProducts from "../../components/akun/admin/products/AdminProducts";
import AuthContext from "../../store/auth-context";

const Products = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Products List";
  }, []);

  const pageHandle =
    authCtx.isAuth && authCtx.isAdmin ? (
      <AdminProducts token={authCtx.token} isAuth={authCtx.isAuth} />
    ) : null;

  if (!authCtx.isAuth || !authCtx.isAdmin) {
    history.push("/");
  }
  return pageHandle;
};

export default Products;
