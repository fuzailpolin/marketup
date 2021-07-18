import {useState, useEffect, useRef} from "react";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import {FaTimes} from 'react-icons/fa'
import axiosGet from "../../../frontend/helpers/axiosGet";
import {Image, Transformation} from "cloudinary-react";
import {cloudinaryCloudName} from "../../../frontend/env";


const OurWorkSection = () => {

    const [mappedWork, setMappedWork] = useState([])

    const [workss, setWorks] = useState([])
    useEffect(() => {
        axiosGet('/api/works')
            .then(res => setWorks(res.data.slice(0, 3)))
            .catch(err => setWorks([]))
    }, [])

    useEffect(() => {

        setMappedWork(workss.map(v => (
            {
                original:  `http://res.cloudinary.com/${cloudinaryCloudName}/image/upload/c_fill,g_south,w_1200/v1/${v.image}`,
                thumbnail: `http://res.cloudinary.com/${cloudinaryCloudName}/image/upload/c_fill,g_south,w_1200/v1/${v.image}`
            }
            )
        )
        )

    }, [workss])



    const clickBtn = useRef(null);
    const [visible, setVisible] = useState({show: false, fullscreen: 0})
    const hendleReview = index => {
        setVisible({show: true, fullscreen: index})
    }

    useEffect(() => {
        if (visible.show) {
            if (clickBtn.current) {
                clickBtn.current.click()
            }
        }
    }, [visible])

    return (
        <div className={'bg-black pb-10'}>
            {
                visible.show && (
                    <ImageGallery
                        items={mappedWork} startIndex={visible.fullscreen}
                        showPlayButton={false}
                        showThumbnails={false}
                        useBrowserFullscreen={false}

                        renderFullscreenButton={(c, isFull) => {
                            return (
                                <button ref={clickBtn}
                                        className={'absolute z-50 right-1 md:right-10 -top-0 text-white text-3xl'}
                                        onClick={() => {
                                            c()
                                            if (isFull) {
                                                setVisible({show: false, fullscreen: 0})
                                            }
                                        }}>
                                    <FaTimes/>
                                </button>
                            )
                        }}

                    />
                )
            }


            <div className={'container mx-auto pt-20'} id={'work'}>
                <div>
                    <h2 className={'text-gray-200 pb-10 font-medium text-center text-lg md:text-2xl font-typoSlab'}>
                        Our
                        <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                            Works
                        </span>
                    </h2>
                </div>
                <div className={'grid grid-cols-12 mx-5 gap-3 '}>
                    {
                        workss.map((item, index) => {
                            return (
                                <div key={index} className={'col-span-12 md:col-span-6 lg:col-span-4 '}>
                                    <div className={'relative overflow-hidden h-56  xx'}>
                                        <Image className={'w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} cloudName={cloudinaryCloudName} publicId={item.image}>
                                            <Transformation width={300}  gravity="south" crop="fill" />
                                        </Image>


                                        <div
                                            className={'absolute transition duration-300 md:opacity-0 -bottom-0 -left-0 bg-black bg-opacity-60 w-full'}>
                                            <p className={'uppercase text-left pl-2 font-semibold font-mons text-white'}>{item.company}</p>
                                            <p className={'uppercase l text-xs text-left  pl-2 py-1  font-medium  font-mons text-white'}>{item.work}</p>
                                        </div>


                                        <div
                                            className="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute transition duration-300 md:opacity-0">
                                            <button onClick={() => hendleReview(index)}
                                                    className={'bg-primary py-1 px-2 focus:outline-none text-white font-poppins font-base font-medium bg-opacity-80'}>Preview
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            )
                        })
                    }

                </div>


                <div>
                    <h2 className={'text-secondary font-medium text-center text-lg md:text-xl font-mons my-6'}>
                        <Link href={'/gallery'}>
                            <a className={'text-white font-mons bg-primary py-2 px-3 rounded-full font-semibold'}>
                                View More
                            </a>
                        </Link>

                    </h2>
                </div>
            </div>
        </div>
    );
}

export default OurWorkSection;
