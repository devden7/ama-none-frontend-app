import { useEffect } from "react";
import EditProductPage from "../../components/akun/admin/products/EditProductPage";

const EditProduct = () => {
  useEffect(() => {
    document.title = "Edit Product";
  }, []);
  return <EditProductPage />;
};

export default EditProduct;
