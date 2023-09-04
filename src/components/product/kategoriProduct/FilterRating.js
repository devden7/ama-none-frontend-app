import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import FilterRatingItem from "./FilterRatingItem";

const FilterRating = (props) => {
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
    <Fragment>
      <h3 className="text-3xl text-slate-900 font-semibold mb-2">Rating</h3>
      <ul onClick={defaultCurrentPageBtn} className="list-disc pl-7 text-lg">
        <FilterRatingItem
          ambilKategoriValue={ambilKategoriValue}
          ambilRatingValue={ambilRatingValue}
          ambilHargaValue={ambilHargaValue}
          ambilListValue={ambilListValue}
          ambilKeywordQuery={ambilKeywordQuery}
        />
      </ul>
    </Fragment>
  );
};

export default FilterRating;
