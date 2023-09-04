import { useEffect } from "react";

import KategoriProduct from "../components/product/kategoriProduct/KategoriProduct";

const Kategori = () => {
  useEffect(() => {
    document.title = "Product Search";
  }, []);
  return <KategoriProduct />;
};

export default Kategori;
