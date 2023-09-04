import { NavLink } from "react-router-dom";

const FilterKategoriItem = (props) => {
  return (
    <li>
      <NavLink
        to={`/search?kategori=${props.id}&keyword=${
          props.ambilKeywordQuery === null ? "semua" : props.ambilKeywordQuery
        }&harga=${
          props.ambilHargaValue === null ? "semua" : props.ambilHargaValue
        }&rating=${
          props.ambilRatingValue === null ? "semua" : props.ambilRatingValue
        }&list=${
          props.ambilListValue === null ? "terbaru" : props.ambilListValue
        }&page=1`}
        activeClassName={
          props.ambilKategoriValue === props.id ? `font-bold` : ""
        }
      >
        {props.id}
      </NavLink>
    </li>
  );
};

export default FilterKategoriItem;
