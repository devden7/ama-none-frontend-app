import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import FilterProduct from "./FilterProduct";
import HasilProduct from "./HasilProduct";
import CartContext from "../../../store/cart-context";

const KategoriProduct = () => {
  const [kategori, setKategori] = useState([]);
  const [products, setProducts] = useState([]);
  const [allPage, setAllPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(null);
  const { search } = useLocation();

  const cartCtx = useContext(CartContext);

  const queryParams = new URLSearchParams(search);

  const ambilKategoriValue = queryParams.get("kategori");
  const ambilHargaValue = queryParams.get("harga");
  const ambilRatingValue = queryParams.get("rating");
  const ambilListValue = queryParams.get("list");
  const ambilKeywordQuery = queryParams.get("keyword");

  const productFilter = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/search?kategori=${
          ambilKategoriValue === null ? "semua" : ambilKategoriValue
        }&keyword=${
          ambilKeywordQuery === null ? "semua" : ambilKeywordQuery
        }&harga=${
          ambilHargaValue === null ? "semua" : ambilHargaValue
        }&rating=${
          ambilRatingValue === null ? "semua" : ambilRatingValue
        }&list=${
          ambilListValue === null ? "semua" : ambilListValue
        }&page=${currentPage}`
      );
      if (response.status !== 200) {
        return;
      }
      setLoading(false);
      const data = await response.json();
      setProducts(data.filterProduct);
      setAllPage(data.totalDocumentProduct);
    } catch (err) {
      console.log(err);
    }
  };
  const takeKategori = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/product/list-kategori"
      );
      const data = await response.json();
      if (response.status !== 200) {
        return;
      }
      setKategori(data.kategori);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    productFilter();
    takeKategori();
  }, [
    ambilKategoriValue,
    ambilHargaValue,
    ambilRatingValue,
    ambilListValue,
    currentPage,
    ambilKeywordQuery,
  ]);

  const pilihPagination = (pageClick) => {
    setCurrentPage(pageClick);
  };

  // jika di current page 3, dan memilih product baru, maka set currentpage kembali ke 1
  const setDefaultCurrentPage = () => {
    setCurrentPage(1);
  };
  const nextPagination = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const backPagination = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const addToCart = (item) => {
    cartCtx.tambahItem(item);
  };
  return (
    <section className="p-3">
      <div className="container">
        <div className="flex flex-wrap justify-between ">
          <FilterProduct
            kategori={kategori}
            products={products}
            setDefaultCurrentPage={setDefaultCurrentPage}
          />
          <HasilProduct
            products={products}
            allPage={allPage}
            currentPage={currentPage}
            pilihPagination={pilihPagination}
            nextPagination={nextPagination}
            backPagination={backPagination}
            addToCart={addToCart}
            loading={loading}
            setDefaultCurrentPage={setDefaultCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default KategoriProduct;
