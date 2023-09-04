import { NavLink } from "react-router-dom";

const FilterRatingItem = (props) => {
  return (
    <div>
      <li>
        <NavLink
          to={`/search?kategori=${props.ambilKategoriValue}&keyword=${
            props.ambilKeywordQuery === null ? "semua" : props.ambilKeywordQuery
          }&harga=${
            props.ambilHargaValue === null ? "semua" : props.ambilHargaValue
          }&rating=4&list=${
            props.ambilListValue === null ? "terbaru" : props.ambilListValue
          }&page=1`}
          activeClassName={props.ambilRatingValue === "4" ? "font-bold" : ""}
        >
          <div className="flex text-yellow-400 items-center">
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <p className="pl-1 text-sm">Keatas</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/search?kategori=${props.ambilKategoriValue}&harga=${
            props.ambilHargaValue === null ? "semua" : props.ambilHargaValue
          }&rating=3&list=${
            props.ambilListValue === null ? "terbaru" : props.ambilListValue
          }&page=1`}
          activeClassName={props.ambilRatingValue === "3" ? "font-bold " : ""}
        >
          <div className="flex text-yellow-400 items-center">
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <p className="pl-1 text-sm">Keatas</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/search?kategori=${props.ambilKategoriValue}&harga=${
            props.ambilHargaValue === null ? "semua" : props.ambilHargaValue
          }&rating=2&list=${
            props.ambilListValue === null ? "terbaru" : props.ambilListValue
          }&page=1`}
          activeClassName={props.ambilRatingValue === "2" ? "font-bold" : ""}
        >
          <div className="flex text-yellow-400 items-center">
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <p className="pl-1 text-sm">Keatas</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/search?kategori=${props.ambilKategoriValue}&harga=${
            props.ambilHargaValue === null ? "semua" : props.ambilHargaValue
          }&rating=1&list=${
            props.ambilListValue === null ? "terbaru" : props.ambilListValue
          }&page=1`}
          activeClassName={props.ambilRatingValue === "1" ? "font-bold" : ""}
        >
          <div className="flex text-yellow-400 items-center mb-5">
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <p className="pl-1 text-sm">Keatas</p>
          </div>
        </NavLink>
      </li>
    </div>
  );
};

export default FilterRatingItem;
