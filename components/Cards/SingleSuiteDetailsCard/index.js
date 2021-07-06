import React from 'react';
import { BsArrowRightShort } from "react-icons/bs";

const data = {
    title: 'PRESIDENTIAL SUITE', 
    price: 44.65,
    description: 'Be our guest in this private Presidential Suite. It provides plenty of space and a peace of mind for a single or couples to relax and unwind. Feel right at home with this Platinum Plus Suite',
    amenities: [
        'Free high-speed wi-fi',
        'Smart tv in-room',
        'Smart tv in-dayroom',
        'Keyless room entry',
        'Security system',
        'Fresh clean linen & pillows for daily stays',
        'Brand new bath kit for new guests',
        'Onsite laundry facility',
        'Complimentary coffee',
        'Food delivery services via the Instacart app',
    ]
}

const SingleSuiteDetailsCard = () => {
    return (
        <div>
            <div className={'m-7'}>
                <p className={'text-xl md:text-3xl text-gray-600 font-primary my-3'}>{data.title}</p>
                <p className={'text-xl md:text-3xl text-blue-500 font-primary my-3'}>
                    <span className={'font-extrabold'}>
                        ${data.price}
                    </span> / Night
                </p>
                <p className={'text-base md:text-lg text-gray-500 font-semibold my-5'}>{data.description}</p>
                <p className={'text-lg md:text-xl text-gray-500 font-primary my-3'}>Amenities:</p>
                {
                    data?.amenities.map((item, index) =>{
                        return (
                            <div className={'flex text-gray-500 ml-3'}>
                                <BsArrowRightShort className={' w-6 md:w-7 h-6 md:h-7'} />
                                <p className={'text-base md:text-lg pl-3'} key={index}>{item}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default SingleSuiteDetailsCard;
