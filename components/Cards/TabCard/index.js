import React from "react";
import style from "./TabCard.module.css";
const TabCard = ({ Logo, title, text }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className={"col-span-12 text-center"}>
          <img src={Logo} className={`${style["tab-card-logo"]}`} />
        </div>
        <div className={"col-span-12 text-center"}>
          <h3 className={`${style["tab-card-title"]} text-center`}>{title}</h3>
          {/*<p className={`${style["tab-card-content"]}`}>{text}</p>*/}
        </div>
      </div>
    </div>
  );
};

export default TabCard;
