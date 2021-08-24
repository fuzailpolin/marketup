import React, {useEffect, useState} from "react";
import OpeningsDetails from "./OpeningsDetails/OpeningsDetails";
import axiosGet from "../../../../frontend/helpers/axiosGet";

const CurrentOpenings = () => {
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        axiosGet('/api/jobs')
            .then(res => setJobData(res.data))
            .catch(er => setJobData([]))
    })


  return (
    <div className={'bg-black pb-10'}>
      <div>
        <h2 className={'text-gray-100 pb-5 font-medium text-center text-lg md:text-2xl font-typoSlab'}>
          Recent
          <span className={'ml-2 text-primary font-bold'}>
            Jobs
          </span>
        </h2>
      </div>
        {
          jobData && jobData.length ? 
            <div className="text-textColor  container mx-auto">
              <div className="container px-2 md:px-14 py-6 mx-auto lg:border lg:border-gray-200">
                {jobData?.map((data, index) => (
                    <OpeningsDetails
                        position={data.position}
                        vacancy={data.vacancy}
                        jobType={data.jobType}
                        deadLine={{lastDate: data.lastDate}}
                        link={{
                            fb: data?.fb || "#",
                            insta: data?.insta || "#"
                        }}
                        key={data._id}
                    />
                ))}
              </div> 
            </div> :
            <div className={'text-gray-300 text-center font-poppins text-lg'}>
              We dont have any job opening right now! Thank you for staying by us.
            </div>
        }
    </div>
  );
};

export default CurrentOpenings;
