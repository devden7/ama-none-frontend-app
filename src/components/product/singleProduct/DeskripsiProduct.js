const DeskripsiProduct = (props) => {
  const angkaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(props.product.harga);

  return (
    <div className="flex flex-col gap-2 md:w-1/4">
      <h3 className="text-3xl font-medium mb-1">{props.product.nama}</h3>
      <hr className=" border-slate-300" />
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
        <p className="ml-2">{props.product.rating}</p>
      </div>
      <hr className=" border-slate-300" />

      <p className="text-md font-bold">{angkaToRupiah}</p>
      <hr className=" border-slate-300" />
      <div className="w-56 md:w-1/3  border-[1px] border-solid border-slate-300 p-2 mx-auto">
        <img src={props.product.imageUrl} alt={props.product.nama} />
      </div>
      <hr className=" border-slate-300" />
      <p>{props.product.deskripsi}</p>
    </div>
  );
};

export default DeskripsiProduct;
