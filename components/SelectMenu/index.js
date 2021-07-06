import React from 'react'
import { BiHandicap } from "react-icons/bi";

const SelectMenu = ({bedName}) => {
    return (
      <div className="flex">
        <BiHandicap className="text-2xl mr-1" />
        <p>{bedName} (handicapped accessible)</p>
      </div>
    );
}

export default SelectMenu
