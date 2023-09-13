import { useContext, useEffect } from "react";
import EditProductPage from "../../components/akun/admin/products/EditProductPage";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const EditProduct = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Edit Product";
  }, []);

  const pageHandle =
    authCtx.isAuth && authCtx.isAdmin ? (
      <EditProductPage token={authCtx.token} />
    ) : null;

  if (!authCtx.isAuth || !authCtx.isAdmin) {
    history.push("/");
  }

  return pageHandle;
};

export default EditProduct;
