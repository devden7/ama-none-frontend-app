import ReviewItem from "./ReviewItem";

const ReviewList = (props) => {
  return (
    <ul className="flex flex-col mb-3">
      {props.productReview.map((review) => (
        <ReviewItem
          key={review._id}
          user={review.accountInfo.userName}
          rating={review.accountInfo.rating}
          reviewUser={review.accountInfo.review}
          tanggal={review.accountInfo.tanggal}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
