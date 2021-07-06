import React from "react";
import { SuitCardDetailed } from "../../../";
import suiteCardDetailedData from "../../../../Assets/Data/SuiteCardDetailedData";

const SubSuitDetails = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 mt-5">

      {suiteCardDetailedData.map((item,index) => {
        return <SuitCardDetailed key={index} {...item} />;
      })}

    </div>
  );
};

export default SubSuitDetails;
