import { useEffect, useState } from "react";

import KategoriList from "./KategoriList";

const KategoriNav = () => {
  const [listKategori, setListKategori] = useState([]);

  const takeKategori = async () => {
    try {
      const response = await fetch(
        "https://amanone-backend-app.vercel.app/product/list-kategori"
      );
      const data = await response.json();
      setListKategori(data.kategori);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    takeKategori();
  }, []);

  return <KategoriList listKategori={listKategori} />;
};

export default KategoriNav;
