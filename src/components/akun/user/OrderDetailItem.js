import { Fragment, useState } from "react";

import FormReview from "./FormReview";
const OrderDetailItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const angkaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,

    currencyDisplay: "code",
  })
    .format(props.harga)
    .replace("IDR", " ")
    .trim();

  const reviewFormHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <li className="flex flex-wrap justify-between items-center w-full  border-solid border-b-[1px] border-slate-300 ">
        <div className="w-24 border-[1px] border-solid border-slate-300 p-2 mb-3">
          <img src={props.imageUrl} alt={props.nama} />
        </div>
        <p>{props.nama}</p>
        <p>Rp {angkaToRupiah}</p>
        <div className="flex items-center gap-4">
          <p>{props.quantityItem}</p>
        </div>

        {props.statusOrder === "Berhasil Dikirim" && (
          <div onClick={reviewFormHandler} className="flex items-center gap-2">
            {!props.isReview ? (
              <button>Beri Review</button>
            ) : (
              <button>Penilaian Kamu</button>
            )}
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        )}

        <FormReview
          isOpen={isOpen}
          submitButtonReview={props.submitButtonReview}
          orderId={props.orderId}
          id={props.id}
          userName={props.userName}
          nama={props.nama}
          review={props.review}
          isReview={props.isReview}
        />
      </li>
    </Fragment>
  );
};

export default OrderDetailItem;
