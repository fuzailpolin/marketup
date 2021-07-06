import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TabButton = ({ icon, btnText, slug, handleClick, active }) => {
  return (
    <button
      onClick={() => handleClick(slug)}
      className={`${
        active ? "bg-black text-white" : "bg-white text-gray-600"
      } hover:bg-black hover:text-white border border-black  px-6 py-2 m-2 inline-flex outline-none focus:outline-none transition duration-100 justify-center items-center`}
    >
      {icon && (
        <FaArrowAltCircleRight
          className={`mr-1 text-lg ${
            active ? "text-blue-400" : "text-gray-600"
          }`}
        />
      )}
      {btnText}
    </button>
  );
};

export default TabButton;
