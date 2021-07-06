import style from "./Style.module.css";

const SingleSuitSlider = ({ image, tag, cost }) => {
  return (
    <div className={style["SingleSuitSlider-wrapper"]}>
      <div className="w-full h-full">
        <img className={style["SingleSuitSlider-Image"]} src={image} alt="carousel" />
      </div>
      <div className={`${style["SingleSuitSlider-overlay"]} grid`}>
        <p className="text-black text-xl md:text-3xl font-medium  absolute bottom-12 left-14 font-suit">
          {tag}
          <div className={"mt-2 text-red-800"}>{cost}</div>
        </p>
      </div>
    </div>
  );
};

export default SingleSuitSlider;
