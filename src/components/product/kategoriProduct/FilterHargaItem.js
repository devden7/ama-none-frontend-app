import { NavLink } from "react-router-dom";
const FilterHargaItem = (props) => {
  return (
    <li>
      <NavLink
        to={`/search?kategori=${props.ambilKategoriValue}&keyword=${
          props.ambilKeywordQuery === null ? "semua" : props.ambilKeywordQuery
        }&harga=${props.harga}&rating=${
          props.ambilRatingValue === null ? "semua" : props.ambilRatingValue
        }&list=${
          props.ambilListValue === null ? "terbaru" : props.ambilListValue
        }&page=1`}
        activeClassName={
          props.ambilHargaValue === props.harga ? "font-bold" : ""
        }
      >
        Rp.{props.harga}
      </NavLink>
    </li>
  );
};

export default FilterHargaItem;
