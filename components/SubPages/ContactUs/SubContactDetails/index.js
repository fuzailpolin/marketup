import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const SubContactDetails = ({contactDetails}) => {
    return (
      <div className={"container mx-auto my-20"}>
        <hr />
        <div className={"grid grid-cols-12 justify-center"}>
          <div
            className={
              " col-span-8 lg:col-span-4 flex lg:justify-center ml-10 lg:ml-0 lg:border-r border-grey-200 hover:bg-gray-200"
            }
          >
            <div
              className={
                "grid grid-cols-12 justify-center items-center lg:pl-12"
              }
            >
              <FaPhone
                className={"col-span-2 h-10 w-10 mr-5 text-yellow-primary"}
                
              />
              <div className={"ml-5 md:ml-0 col-span-10 "}>
                <p className={"text-xs text-gray-600"}>RESERVATION NUMBER</p>
                <p className={"font-bold text-lg"}>
                  <a href="tel:+1-888-288-7584">1-888-AT-ASLTH</a>
                </p>
                <p className={"font-bold text-lg"}>
                  <a href="tel:+1-404-921-9598">1-404-921-9598</a>
                </p>
              </div>
            </div>
          </div>
          <hr className={"my-10 col-span-12 lg:hidden"} />
          <div
            className={
              " col-span-8 lg:col-span-4 flex lg:justify-center pl-10 lg:ml-0 hover:bg-gray-200 "
            }
          >
            <div className={"grid grid-cols-12 justify-center items-center"}>
              <FaMapMarkerAlt
                className={"col-span-2 w-10 h-10 text-yellow-primary"}
              />
              <div className={" ml-5 md:ml-0 col-span-10 "}>
                <p className={"text-xs text-gray-600"}>LOCATION</p>
                <p className={"font-bold text-sm"}>{contactDetails.location}</p>
              </div>
            </div>
          </div>
          <hr className={"my-10 col-span-12 lg:hidden"} />
          <div
            className={
              "col-span-8 lg:col-span-4 flex lg:justify-center lg:pl-10 pl-10 lg:border-l border-grey-200 hover:bg-gray-200 "
            }
          >
            <div
              className={"grid grid-cols-12 justify-center items-center py-10 "}
            >
              <FaEnvelope
                className={"col-span-2 h-10 w-10 text-yellow-primary"}
              />
              <div className={"col-span-10 ml-5"}>
                <p className={"text-xs text-gray-600"}>HUMAN RESOURCES</p>
                <p className={"font-bold text-lg"}>{contactDetails.email}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
}

export default SubContactDetails; 
