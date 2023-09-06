import { useEffect, useState } from "react";

import KategoriList from "./KategoriList";
import config from "../../../../config";

const KategoriNav = () => {
  const [listKategori, setListKategori] = useState([]);

  const takeKategori = async () => {
    try {
      const response = await fetch(`${config.urlApi}product/list-kategori`);
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
