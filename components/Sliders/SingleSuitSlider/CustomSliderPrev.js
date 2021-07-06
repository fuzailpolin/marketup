import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import style from "./Style.module.css";

const CustomSliderPrev = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <div onClick={onClick} className={style["subFindPlaces-slider-prev"]}>
        <AiOutlineLeft className={style["text-sliderNavBtn"]} />
      </div>
    </div>
  );
};

export default CustomSliderPrev;
