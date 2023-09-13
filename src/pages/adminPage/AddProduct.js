import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AddProductPage from "../../components/akun/admin/products/AddProductPage";
import AuthContext from "../../store/auth-context";

const AddProduct = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Tambahkan Product";
  }, []);

  const pageHandle =
    authCtx.isAuth && authCtx.isAdmin ? (
      <AddProductPage token={authCtx.token} isAuth={authCtx.isAuth} />
    ) : null;

  if (!authCtx.isAuth || !authCtx.isAdmin) {
    history.push("/");
  }
  return pageHandle;
};

export default AddProduct;
