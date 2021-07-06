import Link from 'next/link'
import "./style.module.css";

const SuitCardDetailed = ({image,suitName,link,price }) => {
  return (
    <div className="h-detailed-suit-height cursor-pointer noSelect">
      <img src={image} alt="" className="h-4/5 w-full object-cover" />
      <div className="text-center">
        <p className="uppercase mt-5 text-xl text-gray-500 font-primary font-semibold">
            <Link href={link}>
                {suitName}
            </Link>
        </p>
        <p className="text-lg text-primary">${price.toFixed(2)}/Night</p>
      </div>
    </div>
  );
};

export default SuitCardDetailed;
