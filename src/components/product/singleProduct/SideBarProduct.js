import { useContext } from "react";

import AuthContext from "../../../store/auth-context";

const SideBarProduct = (props) => {
  const AuthCtx = useContext(AuthContext);
  const angkaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,

    currencyDisplay: "code",
  })
    .format(props.harga)
    .replace("IDR", " ")
    .trim();

  const addToCartHandler = () => {
    props.addToCart({
      id: props.id,
      nama: props.nama,
      harga: props.harga,
      imageUrl: props.imageUrl,
      quantityItem: 1,
      kategori: props.kategori,
    });
  };

  return (
    <div className="w-full md:md:w-1/4">
      <div className=" p-5 border-solid border-[1px] border-slate-300 rounded-md mb-3">
        <div className="flex justify-between">
          <p>Rp:</p>
          <p>{angkaToRupiah}</p>
        </div>
        <hr className="mb-2 border-slate-300" />
        <div className="flex justify-between">
          <p>Status:</p>
          {props.stok > 0 ? (
            <p className="text-sm bg-green-700 mb-1 text-white p-1 rounded-md">
              Tersedia
            </p>
          ) : (
            <p className="text-sm bg-red-700 mb-1 text-white p-1 rounded-md">
              stok habis
            </p>
          )}
        </div>
        <hr className="mb-2 border-slate-300" />
        {props.stok > 0 && !AuthCtx.isAdmin && (
          <button
            onClick={addToCartHandler}
            className="bg-[#f0c040] hover:bg-[#e9ba3a] my-2 p-2 rounded-md w-full"
          >
            Simpan Ke Keranjang
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBarProduct;
