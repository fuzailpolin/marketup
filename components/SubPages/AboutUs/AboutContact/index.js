import React from 'react';
import Link from 'next/link';
import { AgentImageContainer } from '../../..';

const data = [
    { link: '/Images/contactAgent/img1.jpg' },
    { link: '/Images/contactAgent/img2.jpg'},
    { link: '/Images/contactAgent/img3.jpg'},
    { link: '/Images/contactAgent/img4.jpg' },
    { link: '/Images/contactAgent/img5.jpg' },
];

const AboutContact = ({designImage}) => {
    return (
      <div>
        <div className={"grid place-items-center p-5"}>
          <p className="md:text-sub-head-2 lg:text-head-5 uppercase text-primary">
            we are here for you 24/7
          </p>
          <p className="md:text-sub-head-2 lg:text-head-5 uppercase text-primary">
            call us at
          </p>

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
        </div>
      </div>
    );
}

export default AboutContact;
