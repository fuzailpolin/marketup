import React from 'react';
import { BookNowSuitImage } from '../../../';
import Link from 'next/link';

const ps = '/Images/OnlineBooking/presedentialSuite.jpg';
const ms = '/Images/OnlineBooking/mayorSuite.jpg';
const es = '/Images/OnlineBooking/executiveSuite.jpg';
const gs = '/Images/OnlineBooking/gorvernorSuite.jpg';


const data = [
    {
        title: 'Presedential Suite',
        price: 44.65,
        image: ps,
        link: ''
    },
    {
        title: `Governor's Suite`,
        price: 25.00,
        image: gs,
        link: ''
    },
    {
        title: `Mayor's Suite`,
        price: 23.95,
        image: ms,
        link: ''
    },
    {
        title: 'Executive Suite',
        price: 19.73,
        image: es,
        link: ''
    }
]

const SubBookingSuits = () => {
    return (
        <div>
            <div className={'grid grid-cols-12 mt-40 mb-20'}>
                {
                    data.map((item, index)=>{
                        return (
                            <div key={index} className={'m-5 col-span-12 md:col-span-6'}>
                                <Link href='#'>
                                    <a>
                                        <BookNowSuitImage image={item?.image} title={item?.title} price={item?.price} /> 
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SubBookingSuits;
