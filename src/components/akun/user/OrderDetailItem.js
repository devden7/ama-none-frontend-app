import { Fragment, useState } from "react";

import FormReview from "./FormReview";
const OrderDetailItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ratingBintangSatu, setRatingBintangSatu] = useState(
    <div className="flex  items-center mb-2">
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
    </div>
  );

  const [ratingBintangDua, setRatingBintangDua] = useState(
    <div className="flex  items-center mb-2">
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
    </div>
  );

  const [ratingBintangTiga, setRatingBintangTiga] = useState(
    <div className="flex  items-center mb-2">
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
    </div>
  );

  const [ratingBintangEmpat, setRatingBintangEmpat] = useState(
    <div className="flex  items-center mb-2">
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-outline"></ion-icon>
      </span>
    </div>
  );

  const [ratingBintangLima, setRatingBintangLima] = useState(
    <div className="flex  items-center mb-2">
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
      <span className="text-yellow-400">
        <ion-icon name="star-sharp"></ion-icon>
      </span>
    </div>
  );
  const reviewFormHandler = () => {
    setIsOpen(!isOpen);
  };

  const reviewItemIndex = props.review.findIndex(
    (rev) => rev.accountInfo.prodId === props.id
  );

  return (
    <Fragment>
      <li className="flex flex-wrap justify-between items-center w-full  border-solid border-b-[1px] border-slate-300 ">
        <div className="w-24 border-[1px] border-solid border-slate-300 p-2 mb-3">
          <img src={props.imageUrl} alt={props.nama} />
        </div>
        <p>{props.nama}</p>
        <p>{props.harga}</p>
        <div className="flex items-center gap-4">
          <p>{props.quantityItem}</p>
        </div>

        {props.statusOrder === "Berhasil Dikirim" && (
          <div onClick={reviewFormHandler} className="flex items-center gap-2">
            {!props.review[reviewItemIndex] ? (
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
          id={props.id}
          nama={props.nama}
          review={props.review[reviewItemIndex]}
        />
      </li>
    </Fragment>
  );
};

export default OrderDetailItem;
