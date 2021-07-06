import React from 'react';


const SubHeader = ({data}) => {
    return (
        <div className={'mx-3 mb-16 mt-40'}>
            <div className={'text-center grid grid-cols-12'}>
                <div className={'md:col-span-2'}></div>
                <div className={'col-span-12 md:col-span-8'}> 
                    <p className={'text-head-6 md:text-head-4 font-bold font-primary mt-24'}>{data.title}</p>
                    <p className={'mt-5 text-sub-head-3 text-gray-500'}>
                        {data.description}
                    </p>
                </div>
                <div className={'md:col-span-2'}></div>
            </div>
        </div>
    )
}

export default SubHeader;
