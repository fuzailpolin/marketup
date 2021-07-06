import StarRating from "../../StarRating";

const ReviewCard = ({ reviews }) => {
  return (
    <div>
      <div className={"flex justify-between"}>
        <StarRating rating={reviews?.rating} />
        <p className="font-bold text-xs  text-gray-500 text-left mb-10">
          {reviews?.date}
        </p>
      </div>
      <div>
        <p className="font-medium text-sm  text-gray-700 text-left mb-5">
          {reviews?.comment}
        </p>
      </div>
      <div>
        <p className={"font-bold uppercase text-sm text-left mb-5"}>
          {reviews?.reviewerName}
        </p>
      </div>
      <hr className={`my-12`} />
    </div>
  );
};

export default ReviewCard;
