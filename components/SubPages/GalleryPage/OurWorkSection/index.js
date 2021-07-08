
const works = [
    '/Images/Gallery/img1.jpg',
    '/Images/Gallery/img2.jpg',
    '/Images/Gallery/img3.jpg',
    '/Images/Gallery/img4.jpg',
    '/Images/Gallery/img1.jpg',
    '/Images/Gallery/img2.jpg',
    '/Images/Gallery/img3.jpg'
]
const OurWorkSection = () => {



    return (
        <>


            <div className={'container mx-auto my-10'}>
                <div>
                    <h2 className={'text-secondary pb-5 font-medium text-center text-lg md:text-xl font-mons'}>
                        Our
                        <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                   Work
                </span>
                    </h2>
                </div>
                <div className={'grid grid-cols-12 mx-5 gap-3 '}>
                    {
                        works.map((item, index) => {
                            return (
                                <div key={index} className={'col-span-12 md:col-span-6 lg:col-span-4 '}>
                                    <div className={'relative overflow-hidden h-56'}>
                                        <img src={item} alt="item"
                                             className={'w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'}/>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default OurWorkSection;
