import React from "react";

const SuitImage = ({ image }) => {
  return (
    <div className="flex justify-center items-center max-h-80  md:max-h-96  md:w-2/3 overflow-hidden">
      <img src={image} alt="suit" className={"w-full border-gray-300"} />
    </div>
  );
};

export default SuitImage;
