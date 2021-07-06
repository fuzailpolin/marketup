import React from "react";
import { AgentImageContainer, HeroCardWithChildren } from "../../../";


const data = [
  {
    link: "/Images/bottom_suite_image/pres.jpg",
  },
  {
    link: "/Images/bottom_suite_image/governor.jpg",
  },
  {
    link: "/Images/bottom_suite_image/mayor.jpg",
  },
  {
    link: "/Images/bottom_suite_image/exe1.jpg",
  },
  {
    link: "/Images/bottom_suite_image/exe2.jpg",
  },
];

const SubContactNow = () => {
    return (
      <div className={"my-10 lg:my-24"}>
        <HeroCardWithChildren
          className={"z-0"}
          image={"/Images/contactUs/contact-us-bg.jpg"}
        >
          <div
            className={
              "md:text-sub-head-2 mt-8 md:-mt-40 lg:-mt-60 lg:text-head-5 uppercase"
            }
          >
            We are Here for you 24/7
          </div>
          <div className={"md:text-sub-head-2  lg:text-head-6 uppercase"}>
            Call us at{" "}
          </div>

          <p
            className={"font-bold md:text-sub-head-2 lg:text-sub-head-1 mt-10"}
          >
            <a
              href="tel:+1-888-288-7584"
              className=" bg-yellow-primary hover:bg-gray-500 hover:text-white p-3 text-gray-500 rounded-md duration-300"
            >
              1-888-AT-ASLTH
            </a>
          </p>

          <p
            className={"font-bold md:text-sub-head-2 lg:text-sub-head-1 mt-10"}
          >
            <a
              href="tel:+1-404-921-9598"
              className=" bg-yellow-primary hover:bg-gray-500 hover:text-white p-3 text-gray-500 rounded-md duration-300"
            >
              1-404-921-9598
            </a>
          </p>
          
        </HeroCardWithChildren>
        <div
          className={"hidden md:block z-30 md:-mt-52 lg:-mt-60 mb:20 md:mb-40"}
        >
          <AgentImageContainer data={data} />
        </div>
      </div>
    );
};

export default SubContactNow;
