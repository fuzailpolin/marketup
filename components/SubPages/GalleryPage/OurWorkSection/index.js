import {useState, useEffect, useRef} from "react";
import ImageGallery from "react-image-gallery";
import { FaTimes } from 'react-icons/fa'

const w = [
    {image:'/Images/Gallery/img1.jpg', company: 'company', work: 'work 1'},
    {image:'/Images/Gallery/img2.jpg', company: 'company', work: 'work1'},
    {image:'/Images/Gallery/img3.jpg', work: 'work 1', company: "company"},
    {image:'/Images/Gallery/img4.jpg', company: "company", work: "work 1"},
    {image: '/Images/Gallery/img1.jpg', company: 'company', work: "work 1"},
    {image: '/Images/Gallery/img2.jpg', company: "company", work: 'work 1'},
    {image:'/Images/Gallery/img3.jpg', work: "work 1", company: "company"}
]

const works = w.map(v => ({original: v.image, thumbnail: v.image}))


const OurWorkSection = () => {

    const clickBtn = useRef(null);
    const [visible, setVisible] = useState({show: false, fullscreen: 0})
    const hendleReview = index => {
        setVisible({show: true, fullscreen: index})
    }

    useEffect(() => {
        if(visible.show){
            if(clickBtn.current){
                clickBtn.current.click()
            }
        }
    }, [visible])

    return (
        <div className={'bg-black'}>
            {
                visible.show && (
                    <ImageGallery
                        items={works} startIndex={visible.fullscreen}
                        showPlayButton={false}
                        showThumbnails={false}
                        useBrowserFullscreen={false}

                        renderFullscreenButton={(c, isFull) => {
                            return (
                                <button ref={clickBtn} className={'absolute z-50 right-1 md:right-10 -top-0 text-white text-3xl'} onClick={() => {
                                    c()
                                    if(isFull){
                                        setVisible({show: false, fullscreen: 0})
                                    }
                                }}>
                                    <FaTimes />
                                </button>
                            )
                        }}

                    />
                )
            }




            <div className={'container mx-auto py-10'}>
                <div>
                    <h2 className={'text-gray-100 pb-5 font-medium text-center text-lg md:text-xl font-typoSlab'}>
                        Our
                        <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                   Work
                </span>
                    </h2>
                </div>
                <div className={'grid grid-cols-12 mx-5 gap-3 '}>
                    {
                        w.map((item, index) => {
                            return (
                                <div key={index} className={'col-span-12 md:col-span-6 lg:col-span-4 '}>
                                    <div className={'relative overflow-hidden h-56  xx'}>
                                        <img src={item.image} alt="item"
                                             className={'w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'}/>

                                        <div className={'absolute transition duration-300 md:opacity-0 -bottom-0 -left-0 bg-black bg-opacity-60 w-full'}>
                                            <p className={'uppercase text-left pl-2 font-semibold font-mons text-white'}>{item.company}</p>
                                            <p className={'uppercase l text-xs text-left  pl-2 py-1  font-medium  font-mons text-white'}>{item.work}</p>
                                        </div>


                                        <div className="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute transition duration-300 md:opacity-0">
                                            <button onClick={() => hendleReview(index)}  className={'bg-primary py-1 px-2 focus:outline-none text-white font-poppins font-base font-medium bg-opacity-80'}>Preview</button>
                                        </div>



                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default OurWorkSection;
