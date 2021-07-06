import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";


const DropdownSelector = ({
  onChange,
  options,
  title,
  placeholder,
}) => {
  return (
    <div className={`bg-white text-gray-600 rounded-md mt-3 border-2 relative`}>
      <p className={"absolute left-3 top-2"}>{title}</p>
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default DropdownSelector;
