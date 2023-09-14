import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";

const ProductPencarianItem = (props) => {
  const urlProduct = props.id + "/" + props.product.nama;

  const authCtx = useContext(AuthContext);
  const judulUntukLink = urlProduct.replace(" ", "-");

  const angkaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(props.product.harga);

  const addToCartHandler = () => {
    props.addToCart({
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
      <div className="mb-10 border-solid border-[1px] border-slate-300 text-slate-900 rounded-xl  sm:w-64 sm:mb-0  xl:w-72 md:w-52 overflow-hidden">
        <li className="flex flex-col">
          <div className=" h-96 sm:h-60 md:h-72 overflow-hidden relative">
            <Link to={"/product/" + judulUntukLink}>
              <img
                src={props.product.imageUrl}
                alt={props.product.nama}
                className="absolute w-full h-full object-cover   mx-auto"
              />
            </Link>
          </div>
          <div className="mx-2 ">
            <Link to={"/product/" + judulUntukLink}>
              <h3 className="text-lg font-medium mb-1">{props.product.nama}</h3>
            </Link>
            <div className="flex items-center">
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    props.product.rating > 0 && props.product.rating < 1
                      ? "star-half-outline"
                      : props.product.rating >= 1
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    props.product.rating > 1 && props.product.rating < 2
                      ? "star-half-outline"
                      : props.product.rating >= 2
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    props.product.rating > 2 && props.product.rating < 3
                      ? "star-half-outline"
                      : props.product.rating >= 3
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    props.product.rating > 3 && props.product.rating < 4
                      ? "star-half-outline"
                      : props.product.rating >= 4
                      ? "star-sharp"
                      : "star-outline"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-yellow-400">
                <ion-icon
                  name={`${
                    props.product.rating > 4 && props.product.rating < 5
                      ? "star-half-outline"
                      : props.product.rating >= 5
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
            <p className="text-xl font-bold">{angkaToRupiah}</p>
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

export default ProductPencarianItem;
