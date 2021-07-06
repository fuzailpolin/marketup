import React from 'react';
import { ImageSlider } from '../../../';

const UniversalSection = ({ data, textLeft }) => {

    return (
        <div className={'container mx-auto'}>

            {
                data?.map((item, index) => {
                    return (
                        ((index + textLeft) % 2) ? (
                            <div className={'grid grid-cols-12 lg:my-28'}>
                                <div className={'lg:hidden col-span-12 lg:col-span-7 max-h-screen m-5'}>
                                    <ImageSlider data={item?.images} />
                                </div>
                                <div className={' overflow-hidden col-span-12 lg:col-span-5 mx-10 my-16 md:my-32 lg:my-2 flex items-center'}>
                                    <div>
                                        <div  data-aos="fade-right" className={'hidden md:block'}>
                                            <p className={' text-xl text-center lg:text-left md:text-4xl pb-14 font-primary font-bold'}>{item?.title}</p>
                                        </div>
                                        <div className={'block md:hidden'}>
                                            <p className={'text-xl text-center lg:text-left md:text-4xl pb-14 font-primary font-bold'}>{item?.title}</p>
                                        </div>
                                        <p className={' text-lg md:text-2xl pb-14 font-primary text-gray-500'}>
                                            {item?.description}
                                        </p>
                                        <div className={'grid grid-cols-10 text-sm md:text-sub-head-5 font-bold font-primary'}>
                                            {
                                                item?.benifits?.map((ben) => {
                                                    return (
                                                        <p className={'col-span-5 m-2'}>{ben}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={'hidden lg:block col-span-12 lg:col-span-7 max-h-screen m-5'}>
                                    <ImageSlider data={item?.images} />
                                </div>
                            </div>
                        ) : (
                            <div className={'grid grid-cols-12 lg:my-28'}>
                                 <div className={' col-span-12 lg:col-span-7 max-h-screen m-5'}>
                                    <ImageSlider data={item?.images} />
                                </div>
                                <div className={'col-span-12 lg:col-span-5 mx-10 my-16 md:my-32 lg:my-2 flex items-center '}>
                                    <div>
                                        <div data-aos="fade-left" className={'hidden md:block'}>
                                            <p className={'text-xl text-center lg:text-left md:text-4xl pb-14 font-primary font-bold'}>{item?.title}</p>
                                        </div>
                                        <div className={'block md:hidden'}>
                                            <p className={'text-xl text-center lg:text-left md:text-4xl pb-14 font-primary font-bold'}>{item?.title}</p>
                                        </div>
                                        <p className={'text-lg md:text-2xl pb-14 font-primary text-gray-500'}>
                                            {item?.description}
                                        </p>
                                        <div className={'grid grid-cols-10 text-sm md:text-sub-head-5 font-bold font-primary'}>
                                            {
                                                item?.benifits?.map((ben) => {
                                                    return (
                                                        <p className={'col-span-5 m-2'}>{ben}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
        
    )
}

export default UniversalSection;
