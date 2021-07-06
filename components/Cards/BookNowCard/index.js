import React from 'react';
import { BiCheck } from "react-icons/bi";


const BookNowCard = () => {
    return (
        <div className={'mx-3'}>
            <div className={'bg-white text-gray-700 py-5 lg:py-20 px-8'}>
                <div className={'pt-4 px-2'}><img src={'./Images/Logo.png'} alt='not found' /></div>
                <div className={'flex justify-center pt-10'}>
                    <div><BiCheck className={'w-16 md:w-24 h-16 md:h-24'} /></div>
                </div>
                <div className={'text-head-6 lg:text-head-3 text-green-500 pb-8 text-center'}>9.5</div>
                <div className={'flex justify-center pb-10'}>
                    <div>
                        <img className={'w-44'} src={'./Images/BookNow/Logo-Booking.com_.png'} alt='not found' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookNowCard
