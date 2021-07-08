import React from "react";
import { jobData } from "./OpeningsDetails/Jobs";
import OpeningsDetails from "./OpeningsDetails/OpeningsDetails";

const CurrentOpenings = () => {
  return (
    <>
      <div>
        <h2 className={'text-secondary pb-5 font-medium text-center text-lg md:text-2xl font-mons'}>
          Recent
          <span className={'ml-2 text-primary font-bold'}>
            Jobs
          </span>
        </h2>
      </div>
      <div className="text-textColor  container mx-auto">
        <div className="container px-2 md:px-14 py-6 mx-auto lg:border lg:border-gray-200">
          {jobData.map((data, index) => (
            <OpeningsDetails {...data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CurrentOpenings;
