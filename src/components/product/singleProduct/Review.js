import ReviewList from "./ReviewList";

const Review = (props) => {
  return (
    <div className="w-full">
      <h4 className="text-2xl font-bold text-slate-900 mb-3">Reviews</h4>
      <ReviewList productReview={props.productReview} />
    </div>
  );
};

export default Review;
