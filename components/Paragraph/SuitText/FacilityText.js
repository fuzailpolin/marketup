import React from "react";

const FacilityText = ({ image, facility, orientation }) => {
  return (
    <p
      className={`text-base md:text-lg flex items-center justify-start  ${
        orientation === "LR" ? "md:justify-end" : "md:justify-start"
      }`}
    >
      <img src={image} alt="pic" className={"w-4 h-4 mb-1 mr-2"} />
      {facility}
    </p>
  );
};

export default FacilityText;
