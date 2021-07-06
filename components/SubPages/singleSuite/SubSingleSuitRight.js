import ReviewCard from "../../Cards/ReviewCard";
import SuitPriceButton from "./SuitPriceButton";

const SubSingleSuitRight = ({ singleSuitData }) => {
  return (
    <div className={"col-span-12 md:col-span-4"}>
      <SuitPriceButton singleSuitData={singleSuitData} />
      <div className={"py-10 mx-2"}>
        {singleSuitData?.reviews.map((reviews, index) => (
          <ReviewCard reviews={reviews} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SubSingleSuitRight;
