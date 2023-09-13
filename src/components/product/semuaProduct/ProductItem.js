import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";

const ProductItem = (props) => {
  const urlProduct = props.id + "/" + props.nama;
  const authCtx = useContext(AuthContext);
  const judulUntukLink = urlProduct.replace(" ", "-");

  const angkaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(props.product.harga);

  const jumlahRating = props.product.review?.reduce((quantity, item) => {
    return quantity + item.accountInfo.rating;
  }, 0);

  const addToCartHandler = () => {
    props.addCart({
      id: props.id,
      nama: props.product.nama,
      harga: props.product.harga,
      imageUrl: props.product.imageUrl,
      quantityItem: 1,
      kategori: props.product.kategori,
      isReview: null,
      review: {},
    });
  };

  return (
    <Fragment>
      <div
        id="prodId"
        className="mb-10 border-solid border-[1px] border-slate-300 text-slate-900 rounded-xl w-4/5 sm:w-64 sm:mb-0 xl:w-72 md:w-52 overflow-hidden"
      >
        <li className=" flex flex-col">
          <div className=" h-96 sm:h-72  relative overflow-hidden">
            <Link to={"/product/" + judulUntukLink}>
              <img
                src={props.product.imageUrl}
                alt={props.product.nama}
                className="h-full w-full object-cover  mx-auto absolute"
              />
            </Link>
          </div>
          <div className="mx-2">
            <Link to={"/product/" + judulUntukLink}>
              <h3 className="text-lg font-medium mb-1">{props.product.nama}</h3>
            </Link>
            <div className="flex items-center">
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    jumlahRating / props.product.review?.length > 0 &&
                    jumlahRating / props.product.review?.length < 1
                      ? "star-half-outline"
                      : jumlahRating / props.product.review?.length >= 1
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    jumlahRating / props.product.review?.length > 1 &&
                    jumlahRating / props.product.review?.length < 2
                      ? "star-half-outline"
                      : jumlahRating / props.product.review?.length >= 2
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    jumlahRating / props.product.review?.length > 2 &&
                    jumlahRating / props.product.review?.length < 3
                      ? "star-half-outline"
                      : jumlahRating / props.product.review?.length >= 3
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    jumlahRating / props.product.review?.length > 3 &&
                    jumlahRating / props.product.review?.length < 4
                      ? "star-half-outline"
                      : jumlahRating / props.product.review?.length >= 4
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    jumlahRating / props.product.review?.length > 4 &&
                    jumlahRating / props.product.review?.length < 5
                      ? "star-half-outline"
                      : jumlahRating / props.product.review?.length >= 5
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <p className="ml-2">
                {props.product.rating}
                <span> </span>review
              </p>
            </div>
            <p className="text-lg font-bold">{angkaToRupiah}</p>
            {!authCtx.isAdmin &&
              (props.product.stok > 0 ? (
                <button
                  onClick={addToCartHandler}
                  className="bg-[#f0c040] hover:bg-[#e9ba3a] my-2 p-2 rounded-md"
                >
                  Simpan Ke Keranjang
                </button>
              ) : (
                <p className="inline-block bg-[#e93a3a] text-white my-2 p-2 rounded-md">
                  stok habis
                </p>
              ))}
          </div>
        </li>
      </div>
    </Fragment>
  );
};

export default ProductItem;
