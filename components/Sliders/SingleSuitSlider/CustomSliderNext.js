import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import style from "./Style.module.css";

const CustomSliderNext = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={style["subFindPlaces-slider-next"]}>
      <AiOutlineRight className={style["text-sliderNavBtn"]} />
    </div>
  );
};

export default CustomSliderNext;
