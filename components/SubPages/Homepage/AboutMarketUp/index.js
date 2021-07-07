import { useState } from "react";

const AboutMarketUp = () => {
    const [more, setMore] = useState(false)


    return (
        <div className={'container mx-auto py-5 md:py-10 bg-white bg-no-repeat bg-cover'} >
            <h2 className={'text-secondary font-medium text-center text-lg md:text-xl font-mons'}>
                About
                <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                    Marketupgroup
                </span>
            </h2>


            <p className={'text-secondary px-5 pb-3  pt-5 md:pt-10 font-poppins md:px-28 md:mx-12'}>A digital marketing agency revolving around the understanding of local psychology, beliefs and culture. Just like a crow, we symbolize transformation and change. We are everywhere and we understand your need to up your market through our expertise.</p>

            {
                more ? (
                    <>
                        <p className={'text-secondary px-5 pb-3  pt-3 md:pt-5 font-poppins md:px-28 md:mx-12'}>MarketUP is a digital marketing agencies driven by a group of young enthusiast, accomplished in their fields of digital marketing. Crows are our local friendly aves and so are we to you. With our correct analyticities, we find your niche and take your business in sky-scraping level. We understand your sentiments towards your business and we are here to market it up.</p>

                        <p className={'text-primary px-5 font-poppins md:px-28 md:mx-12'}><span className={'border-b border-primary text-sm cursor-pointer'} onClick={() => setMore(false)}>read less</span></p>
                    </>
                ) : (
                    <p className={'text-primary px-5 font-poppins md:px-28 md:mx-12'}><span className={'border-b border-primary text-sm cursor-pointer'} onClick={() => setMore(true)}>read more</span></p>
                )
            }



            <h2 className={'text-secondary pt-10 md:pt-16 font-medium text-center text-lg md:text-xl font-mons'}>
                Why Should
                <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                    You Choose Us?
                </span>
            </h2>


            <p className={'text-secondary px-5 pb-3  pt-5 md:pt-10 font-poppins md:px-24'}>We call us crows because we belief in locality. Your business is important to you and it should reflect who you are and what you want to bring in the market. We aim to work closely with you by understand your necessities and the emotion attached to your business. So what are you waiting for? Grow with the crows!</p>




        </div>
    )
}


export default AboutMarketUp
