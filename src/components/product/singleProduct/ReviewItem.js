import { useState, Fragment } from "react";

const ReviewItem = (props) => {
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

  return (
    <Fragment>
      <li className="p-5  border-solid border-[1px] border-slate-300  first:rounded-t-lg  last:rounded-b-lg ">
        <p>{props.tanggal}</p>
        <p className="font-semibold ">{props.user}</p>
        {props.rating === 1 && ratingBintangSatu}
        {props.rating === 2 && ratingBintangDua}
        {props.rating === 3 && ratingBintangTiga}
        {props.rating === 4 && ratingBintangEmpat}
        {props.rating === 5 && ratingBintangLima}

        <p>{props.reviewUser}</p>
      </li>
    </Fragment>
  );
};

export default ReviewItem;
