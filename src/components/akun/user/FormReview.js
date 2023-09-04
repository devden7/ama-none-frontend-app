import { useState } from "react";

const FormReview = (props) => {
  const [userOptionValue, setUserOptionValue] = useState();
  const [inputUserReview, setInputUserReview] = useState();

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
  const handlerSelect = (e) => {
    setUserOptionValue(e.target.value);
  };

  const handlerInputUserReview = (e) => {
    setInputUserReview(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userOptionValue === "Pilih...") {
      console.log("Rating tidak valid");
      return;
    }

    if (inputUserReview?.length === 0) {
      console.log("Silahkan masukan review");
      return;
    }

    const ambilAngkaReview = userOptionValue.split(" ")[0];
    const dataInput = {
      rating: +ambilAngkaReview,
      review: inputUserReview,
    };
    props.submitButtonReview(props.id, dataInput);
  };

  //console.log(props.reviewList.length);
  return (
    <div
      className={`w-full  transition-all ${
        !props.review ? "duration-100" : "duration-200"
      } ${
        props.isOpen
          ? `${!props.review ? "h-37" : "h-32"} visible`
          : "h-0 opacity-0 collapse"
      }`}
    >
      <h4 className="text-2xl font-bold text-slate-900 mb-3">Masukan Review</h4>
      {!props.review ? (
        <form onSubmit={submitHandler}>
          <label htmlFor="review" className="block mb-3">
            Rating
          </label>
          <select
            onChange={handlerSelect}
            id="review"
            className="w-full mb-3 border-solid border-[1px] border-slate-300 rounded lg p-2"
          >
            <option>Pilih...</option>
            <option value="1 Sangat jelek">1 Sangat jelek</option>
            <option value="2 jelek">2 jelek</option>
            <option value="3 Biasa aja">3 Biasa aja</option>
            <option value="4 Bagus">4 Bagus</option>
            <option value="5 Sangat bagus">5 Sangat bagus</option>
          </select>
          <label htmlFor="userreview">
            <input
              onChange={handlerInputUserReview}
              type="textarea"
              className="w-full h-16 border-solid border-[1px] border-slate-300 rounded-lg mb-2"
              id="userreview"
            />
          </label>
          <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-2 p-2 rounded-md ">
            Kirim
          </button>
        </form>
      ) : (
        <div>
          <p>{props.review.accountInfo.tanggal}</p>
          {props.review.accountInfo.rating === 1 && ratingBintangSatu}
          {props.review.accountInfo.rating === 2 && ratingBintangDua}
          {props.review.accountInfo.rating === 3 && ratingBintangTiga}
          {props.review.accountInfo.rating === 4 && ratingBintangEmpat}
          {props.review.accountInfo.rating === 5 && ratingBintangLima}
          <p>{props.review.accountInfo.review}</p>
        </div>
      )}
    </div>
  );
};

export default FormReview;
