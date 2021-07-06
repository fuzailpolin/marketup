import React from "react";
import { FaDollarSign } from 'react-icons/fa'

const SubDonationSection = () => {
  const handlesubnit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto my-20 w-11/12 md:w-1/3 border border-yellow-500 bg-white">
      <div className="p-5 space-y-5 shadow-xl">
        <img
          src="https://cdn0.iconfinder.com/data/icons/app-finance-bold-line/128/1-34-128.png"
          alt="donate"
          className={"mx-auto p-2 mb-2"}
        />

        <form onSubmit={handlesubnit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-yellow-500 col-span-2 md:col-span-1"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-yellow-500 col-span-2 md:col-span-1"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-yellow-500 col-span-2"
              placeholder="Email"
            />
            <input
              type="tel"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-yellow-500 col-span-2"
              placeholder="Phone"
            />
            <div className={'col-span-2 relative'}>
              <FaDollarSign className={'absolute top-3 left-1 text-gray-400'} size={18} />
              <input
                  type="number"
                  className="input-number border border-gray-500 pl-6 w-full pr-4 py-2 focus:outline-none focus:border-yellow-500 "
                  placeholder="Donation Amount"
              />
            </div>


            <textarea
              cols="10"
              rows="5"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-yellow-500 col-span-2"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Donation"
            className="focus:outline-none mt-5 bg-yellowButton px-4 py-3 text- font-bold w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default SubDonationSection;
