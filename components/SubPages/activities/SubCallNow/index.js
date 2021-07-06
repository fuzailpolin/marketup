import React from "react";
import { AgentImageContainer, HeroCardWithChildren } from "../../../";



const data = [
    {link: './Images/contactAgent/img1.jpg'},
    {link: './Images/contactAgent/img2.jpg'},
    {link: './Images/contactAgent/img3.jpg'},
    {link: './Images/contactAgent/img4.jpg'},
    {link: './Images/contactAgent/img5.jpg'}
];

const SubCallNow = () => {
    return (
        <div className={'my-10 lg:my-24'}>
            <HeroCardWithChildren className={'z-0'} image={'./Images/activities/callBG.jpg'}>
                <div className={'md:text-sub-head-2 mt-8 md:-mt-40 lg:-mt-60 lg:text-head-4'}>LEAVE YOUR NUMBER,</div>
                <div className={'md:text-sub-head-2  lg:text-head-4'}>WE'LL CALL YOU NOW</div>
                <div className={'flex justify-center  text-gray-900'}>
                    <form>
                        <div className={'grid grid-cols-12 -mt-16 md:mt-10 lg:mt-32'}>
                            <div className={'col-span-12 mt-20 md:mt-0 md:col-span-8'}>
                                <input 
                                    className={'h-14 lg:h-20 w-full text-sub-head-4 font-bold text-center focus:opacity-80 transition duration-700'}
                                    type="text"
                                    placeholder='YOUR PHONE NUMBER' 
                                />
                            </div>
                            <div className={'col-span-10 pb-5 md:pb-0 mt-5 md:mt-0 ml-14 md:ml-0 md:col-span-4 font-primary text-sub lg:text-sub-head-4 font-bold'} >
                                <button className={'text-white bg-gray-800 border-gray-800 w-56 lg:w-80 h-14 lg:h-20 hover:border-red-700 border-2 hover:bg-red-700 transition duration-700'}>
                                    CHECKING AVAILABILITY
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </HeroCardWithChildren>
            <div className={"hidden md:block z-30 md:-mt-52 lg:-mt-60 mb:20 md:mb-40"}>
                <AgentImageContainer data={data} />
            </div>
        </div>
  );
};

export default SubCallNow;
