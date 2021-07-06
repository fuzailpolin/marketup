import React from "react";

const LegendCard = ({ legendImg, title, desc, classProps }) => {
  return (
    <div className={"py-7"}>
      <div className={"p-0 md:p-6"}>
        <img
          src={legendImg}
          alt="Legend"
          className={"w-3/5 md:w-1/5 mx-auto"}
        />
      </div>
      <div className={"w-11/12 md:w-55 text-center mx-auto"}>
        <h1
          className={` ${classProps}  uppercase  md:leading-tight text-center py-2`}
        >
          {title}
        </h1>
        <p className="font-semibold text-xs md:text-base md:leading-tight text-gray-500 text-center pt-6 pb-2">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default LegendCard;
