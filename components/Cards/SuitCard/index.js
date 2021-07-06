import Link from "next/link";
import style from "./style.module.css";

const SuitCard = ({ suitName, image, link }) => {
  return (
    <div className={style["suitCard-wrapper"]}>
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div
        className={`${style["suitCard-overlay"]} place-items-center h-full w-full grid `}
      >
        <Link href={link}>
          <a className="text-white text-lg md:text-2xl uppercase underline">
            {suitName}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SuitCard;
