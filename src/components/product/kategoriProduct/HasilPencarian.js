import { useHistory, useLocation } from "react-router-dom";

const HasilPencarian = (props) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const ambilKategoriValue = queryParams.get("kategori");
  const ambilHargaValue = queryParams.get("harga");
  const ambilRatingValue = queryParams.get("rating");
  const ambilKeywordQuery = queryParams.get("keyword");
  const history = useHistory();
  const selectHandlerChange = (e) => {
    props.setDefaultCurrentPage();
    history.push(
      `/search?kategori=${
        ambilKategoriValue === null ? "semua" : ambilKategoriValue
      }&keyword=${
        ambilKeywordQuery === null ? "semua" : ambilKeywordQuery
      }&harga=${ambilHargaValue === null ? "semua" : ambilHargaValue}&rating=${
        ambilRatingValue === null ? "semua" : ambilRatingValue
      }&list=${e.target.value}&page=1`
    );
  };
  return (
    <div className="flex justify-between mb-4 w-full">
      <p>{props.allPage} Hasil</p>
      <div>
        <p className="inline-block mr-1">Urutan Berdasarkan</p>

        <select
          onChange={selectHandlerChange}
          className="border-solid border-[1px] border-slate-300"
        >
          <option value="terbaru">terbaru</option>
          <option value="termahal">termahal</option>
          <option value="termurah">Termurah</option>
          <option value="rating">Rating Terbaik</option>
        </select>
      </div>
    </div>
  );
};

export default HasilPencarian;
