import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const keywordHandler = (e) => {
    setKeyword(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const searchKeyword = keyword === "" ? "semua" : keyword;
    history.push("/search/?keyword=" + searchKeyword);
  };
  return (
    <div
      className={`h-0 w-full overflow-hidden transition-[height] duration-300 ease md:absolute md:left-44 md:-top-2  md:w-1/2 ${
        !props.open ? "static" : "h-16 "
      } lg:h-16  lg:flex`}
    >
      <form onSubmit={searchHandler} className={`flex h-max mt-4 lg:w-1/2  `}>
        <input
          type="search"
          placeholder="Cari Product..."
          className=" w-full  p-2 rounded-l-md text-black"
          onChange={keywordHandler}
        />
        <button className="bg-[#f0c040] px-4 rounded-r-md mr-3 text-xl text-black">
          <ion-icon name="search-sharp"></ion-icon>
        </button>
      </form>
    </div>
  );
};

export default Search;
