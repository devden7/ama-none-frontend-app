import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const Pagination = (props) => {
  const [perPagination, setPerPagination] = useState(5);
  const [initPagination, setInitPagination] = useState(0);
  const [activePageButton, setActivePageButton] = useState(props.currentPage);
  const history = useHistory();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const ambilKategoriValue = queryParams.get("kategori");
  const ambilHargaValue = queryParams.get("harga");
  const ambilRatingValue = queryParams.get("rating");
  const ambilListValue = queryParams.get("list");

  const ambilKeywordQuery = queryParams.get("keyword");

  const getPaginationList = () => {
    const paginationLimit = 5;
    const panjangPagination = Math.ceil(props.allPage / paginationLimit);
    const paginationArray = [];
    for (let i = 1; i <= panjangPagination; i++) {
      paginationArray.push(i);
    }
    return paginationArray;
  };

  const paramsHandler = (getNumber) => {
    history.push(
      `/search?kategori=${
        ambilKategoriValue === null ? "semua" : ambilKategoriValue
      }&keyword=${
        ambilKeywordQuery === null ? "semua" : ambilKeywordQuery
      }&harga=${ambilHargaValue === null ? "semua" : ambilHargaValue}&rating=${
        ambilRatingValue === null ? "semua" : ambilRatingValue
      }&list=${
        ambilListValue === null ? "semua" : ambilListValue
      }&page=${getNumber}`
    );
  };

  const nextHandler = () => {
    if (props.currentPage + 1 > perPagination) {
      setPerPagination((prevPag) => prevPag + 5);
      setInitPagination((prevPag) => prevPag + 5);
    }
    setActivePageButton(props.currentPage + 1);
    paramsHandler(props.currentPage + 1);
    props.nextPagination();
  };

  const backHandler = () => {
    if ((props.currentPage - 1) % 5 === 0) {
      setPerPagination((prevPag) => prevPag - 5);
      setInitPagination((prevPag) => prevPag - 5);
    }
    setActivePageButton(props.currentPage - 1);
    paramsHandler(props.currentPage - 1);
    props.backPagination();
  };
  const ubahPage = (e) => {
    const pageNumber = Number(e.target.textContent);
    paramsHandler(pageNumber);
    setActivePageButton(pageNumber);
    props.pilihPagination(pageNumber);
  };
  const renderPaginationNumbers = getPaginationList().map((list) => {
    if (list < perPagination + 1 && list > initPagination) {
      return (
        <li key={list} id={list}>
          <button
            id={list}
            onClick={ubahPage}
            className={`${
              activePageButton === list ? "bg-[#212529] text-white w-8 h-8" : ""
            }`}
          >
            {list}
          </button>
        </li>
      );
    }
  });

  return (
    <div className="mb-8">
      <ul className="flex gap-2 items-center text-lg justify-center">
        {props.currentPage !== 1 && (
          <button onClick={backHandler} className="text-[#212529] pt-1">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
        )}
        {props.allPage !== undefined && renderPaginationNumbers}

        {props.currentPage !== renderPaginationNumbers.length && (
          <button onClick={nextHandler} className="text-[#212529] pt-1">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
