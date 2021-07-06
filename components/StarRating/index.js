import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
const StarRating = ({ rating }) => {
  return (
    <Rating
      className={"text-yellow-600 "}
      emptySymbol={<FaRegStar />}
      fullSymbol={<FaStar />}
      initialRating={rating}
      readonly
    />
  );
};

export default StarRating;
