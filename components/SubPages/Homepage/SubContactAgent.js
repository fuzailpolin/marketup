import React from 'react';
import { AgentImageContainer, HeroCardWithChildren } from '../../';
import { FaPhoneAlt } from "react-icons/fa";


const data = [
  { link: "./Images/contactAgent/img1.jpg" },
  { link: "./Images/contactAgent/img2.jpg" },
  { link: "./Images/contactAgent/img3.jpg" },
  { link: "./Images/contactAgent/img4.jpg" },
  {
    link: "/Images/bottom_suite_image/exe01.jpg",
  },
];

const SubContactAgent = () => {
    return (
        <div>
            <HeroCardWithChildren className={'z-0'} image={'./Images/contactAgent/building.jpg'}>
                <div className={'md:text-head-6 md:-mt-20 lg:text-head-3'}>HAVE A QUESTION?</div>
                <div className={'md:text-head-6 lg:text-head-3'}>CONTACT OUR AGENT</div>
                <div className={'flex justify-center'}>
                    <button className={'w-60 md:w-72 h-12 md:h-20 lg:mt-20 text-gray-700 rounded-xl transform hover:scale-110 duration-500 border-yellowButton bg-yellowButton text-sub-head-6 md:text-sub-head-4 font-semibold grid hover:bg-gray-600 hover:text-white'}>
                        <div className={'grid grid-cols-12 mt-2 md:mt-5'}>
                            <div className={'col-span-2 p-2 ml-5 md:ml-3'}><FaPhoneAlt /></div>
                            <div className={'col-span-10 p-1 mr-4'}>
                                <a href="tel:+1-888-288-7584">Call An Agent</a>
                            </div>
                        </div>
                    </button>
                </div>
            </HeroCardWithChildren>
            <div className={'hidden md:block z-30 md:-mt-40 lg:-mt-60 mb:20 md:mb-40'}>
               <AgentImageContainer data={data} />
            </div>
        </div>
    )
}

export default SubContactAgent;
