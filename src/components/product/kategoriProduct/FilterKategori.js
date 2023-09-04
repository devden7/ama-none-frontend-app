import { NavLink, useLocation } from "react-router-dom";

import FilterKategoriItem from "./FilterKategoriItem";

const FilterKategori = (props) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const ambilKategoriValue = queryParams.get("kategori");
  const ambilHargaValue = queryParams.get("harga");
  const ambilRatingValue = queryParams.get("rating");
  const ambilListValue = queryParams.get("list");
  const ambilKeywordQuery = queryParams.get("keyword");

  const isActive =
    ambilKategoriValue === "semua"
      ? "font-bold text-blue-700"
      : "text-blue-700";

  const defaultCurrentPageBtn = () => {
    props.setDefaultCurrentPage();
  };
  return (
    <ul onClick={defaultCurrentPageBtn} className="list-disc pl-7">
      <li>
        <NavLink
          to={`/search?kategori=semua&keyword=${
            ambilKeywordQuery === null ? "semua" : ambilKeywordQuery
          }&harga=${
            ambilHargaValue === null ? "semua" : ambilHargaValue
          }&rating=${
            ambilRatingValue === null ? "semua" : ambilRatingValue
          }&list=${
            ambilListValue === null ? "terbaru" : ambilListValue
          }&page=1`}
          activeClassName={
            ambilKategoriValue === "semua" || ambilKategoriValue === null
              ? "font-bold"
              : ""
          }
        >
          Semua
        </NavLink>
      </li>
      {props.kategori.map((product) => (
        <FilterKategoriItem
          key={product._id}
          id={product._id}
          harga={product.harga}
          rating={product.rating}
          isActive={isActive}
          ambilKategoriValue={ambilKategoriValue}
          ambilHargaValue={ambilHargaValue}
          ambilRatingValue={ambilRatingValue}
          ambilListValue={ambilListValue}
          ambilKeywordQuery={ambilKeywordQuery}
        />
      ))}
    </ul>
  );
};

export default FilterKategori;
