import React from 'react';
import { HeroCardWithChildren, BookNowCard } from '../../';
import { BsArrowRight } from "react-icons/bs";

const data = {
    title: "WE ARE WORKING TO GIVE YOU THE MOST PERFECT SERVICE.",
    buttonText: "BOOK NOW"
}

const SubBookNow = () => {

    return (
        <div>
            <HeroCardWithChildren image={'/Images/BookNow/img2.jpg'} className={'my-20'}>
                <div className={'grid grid-cols-12'}>
                    <div className={'md:col-span-1'}></div>
                    <div className={'md:col-span-6 lg:col-span-7 col-span-12 py-10'}>
                        <p data-aos="fade-right" className={'md:text-5xl lg:text-6xl text-2xl font-primary text-white font-normal text-center sm:text-left mt-4'}>{data.title}</p>
                        <div className={'flex justify-center sm:justify-start'}>
                            <button className={'w-64 h-16 mt-10 md:mt-20 duration-500 text-gray-700 border-yellowButton bg-yellowButton text-sub-head-2 font-semibold grid hover:bg-gray-700 hover:text-white hover:border-gray-100 border-2'}>
                                <div className={'grid grid-cols-12 mt-3'}>
                                    <div className={'col-span-9'}>{data.buttonText}</div>
                                    <div className={'col-span-3'}><BsArrowRight className={'md:text-4xl'} /></div>
                                </div>
                            </button>
                        </div>
                        
                    </div>
                    <div  className={'md:col-span-4 lg:col-span-3 hidden md:block'}>
                        <BookNowCard />
                    </div>
                    <div className={'md:col-span-1'}></div>
                </div>
            </HeroCardWithChildren>
            <div className={'md:col-span-4 md:hidden'}>
                <BookNowCard />
            </div>
        </div>
    )
}

export default SubBookNow
