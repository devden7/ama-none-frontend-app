import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import FilterHargaItem from "./FilterHargaItem";

const hargaKategori = [
  { id: 1, harga: "1000-49000" },
  { id: 2, harga: "50000-90000" },
  { id: 3, harga: "100000-490000" },
  { id: 4, harga: "500000-999000" },
  { id: 5, harga: "1000000-keatas" },
];

const FilterHarga = (props) => {
  const [listHarga, setListHarga] = useState(hargaKategori);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const ambilKategoriValue = queryParams.get("kategori");
  const ambilHargaValue = queryParams.get("harga");
  const ambilRatingValue = queryParams.get("rating");
  const ambilListValue = queryParams.get("list");
  const ambilKeywordQuery = queryParams.get("keyword");

  const defaultCurrentPageBtn = () => {
    props.setDefaultCurrentPage();
  };

  return (
    <ul onClick={defaultCurrentPageBtn} className="list-disc pl-7">
      <li>
        <NavLink
          to={`/search?kategori=${ambilKategoriValue}&keyword=${
            ambilKeywordQuery === null ? "semua" : ambilKeywordQuery
          }&harga=${
            ambilHargaValue === null ? "semua" : ambilHargaValue
          }&rating=${
            ambilRatingValue === null ? "semua" : ambilRatingValue
          }&list=${ambilListValue === null ? "semua" : ambilListValue}&page=1`}
          activeClassName={
            ambilHargaValue === "semua" || ambilHargaValue === null
              ? "font-bold"
              : ""
          }
        >
          Semua
        </NavLink>
      </li>
      {listHarga.map((list) => (
        <FilterHargaItem
          key={list.id}
          id={list.id}
          harga={list.harga}
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

export default FilterHarga;
