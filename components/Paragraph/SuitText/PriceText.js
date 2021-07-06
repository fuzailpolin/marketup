import React from "react";

const PriceText = ({ amount }) => {
  return (
    <>
      <p>
        <sup className={"font-medium text-lg md:text-2xl mr-1"}>$</sup>
        <span className={"text-xl md:text-3xl font-medium"}>{amount}</span> /
        night
      </p>
      <p className="text-xs text-gray-500 font-light">**Excluded: 16.9 % TAX, US$ 5.00 City tax per night</p>
    </>
  );
};

export default PriceText;


