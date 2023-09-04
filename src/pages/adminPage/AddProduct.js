import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AddProductPage from "../../components/akun/admin/products/AddProductPage";
import AuthContext from "../../store/auth-context";

const AddProduct = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Tambahkan Product";
  }, []);

  const pageHandle = authCtx.isAuth ? (
    <AddProductPage token={authCtx.token} isAuth={authCtx.isAuth} />
  ) : (
    history.push("/login")
  );
  return pageHandle;
};

export default AddProduct;
