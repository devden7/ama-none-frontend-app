import HasilPencarian from "./HasilPencarian";
import ProductPencarianList from "./ProductPencarianlList";
import Pagination from "../../layout/Pagination";
import Loading from "../../layout/loading/Loading";

const HasilProduct = (props) => {
  return (
    <div className=" md:w-[480px] lg:w-9/12">
      <div className="flex flex-wrap ">
        <HasilPencarian
          product={props.products}
          allPage={props.allPage}
          setDefaultCurrentPage={props.setDefaultCurrentPage}
        />
        <div className=" flex-grow">{props.loading && <Loading />}</div>
        {props.products?.length === 0 && <p>product tidak ditemukan</p>}
        {props.loading === false && (
          <ProductPencarianList
            products={props.products}
            addToCart={props.addToCart}
          />
        )}
      </div>

      <Pagination
        products={props.products}
        allPage={props.allPage}
        currentPage={props.currentPage}
        pilihPagination={props.pilihPagination}
        nextPagination={props.nextPagination}
        backPagination={props.backPagination}
      />
    </div>
  );
};

export default HasilProduct;
