import React from "react";
import Link from 'next/link';
import { AiOutlineInstagram } from "react-icons/ai";

const OpeningsDetails = ({ slug, position, vacancy, jobType, deadLine, link }) => {
  return (
    <div
      className={
        "grid grid-cols-12 justify-left md:justify-center items-center md:text-center pt-2 px-0 md:px-4"
      }
    >
      <div className={"col-span-12 md:col-span-4"}>
        <p
          className={
            "text-base text-gray-100 md:text-2xl font-semibold text-left md:text-left"
          }
        >
          {position}
        </p>
      </div>
      <div className={"col-span-12 md:col-span-8 grid grid-cols-12"}>
        <div className={"col-span-6 md:col-span-3 pb-2"}>
          <div className="leading-none flex flex-col justify-center">
            <div className="mb-2 text-xs md:text-sm text-gray-400 font-semibold">
              Vacancy
            </div>
            <div className="font-semibold text-gray-100 text-xs md:text-sm">{vacancy}</div>
          </div>
        </div>
        <div className={"col-span-6 md:col-span-3 pb-2"}>
          <div className="leading-none flex flex-col justify-center">
            <div className="mb-2 text-xs md:text-sm text-gray-400 font-semibold">
              Job Type
            </div>
            <div className="font-semibold text-gray-100 text-xs md:text-sm">{jobType}</div>
          </div>
        </div>
        <div className={"col-span-12 md:col-span-6 pb-2 md:ml-auto md:mr-0"}>
          <div className={'grid grid-cols-12'}>
            <div className={'col-span-6 '}>
              <div className="leading-none flex flex-col md:justify-center ">
                <div className="mb-2 text-xs md:text-sm text-gray-400 font-semibold ">
                  Deadline
                </div>
                <div
                  className={
                    "leading-none flex flex-row md:justify-center items-center"
                  }
                >
                  <div className="font-semibold text-gray-100 text-xs md:text-sm">
                    {deadLine?.lastDate}
                  </div>
                  <div className="font-bold text-xs text-gray-400 ml-2">
                    {deadLine?.daysLeft}
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-span-6'}>
              <div className={'grid place-items-start md:place-items-center'}>
                <div className={'flex'}>
                  <Link href={link?.fb}>
                    <img className={'mr-2 bg-gray-100 rounded-full p-2 w-9 h-9 cursor-pointer'} src='/Images/Career/facebook.svg' alt='fb not found' />
                  </Link>
                  <Link href={link?.insta}>
                    <AiOutlineInstagram className={'ml-2 bg-gray-100 text-primary rounded-full p-1 w-9 h-9 cursor-pointer'} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      <div className={"col-span-12 py-3"}>
        <hr />
      </div>
    </div>
  );
};

export default OpeningsDetails;
