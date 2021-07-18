import { useEffect, useState } from 'react';
import axiosGet from '../../../../frontend/helpers/axiosGet';
import HeroSlider from '../../../Slider/HeroSlider';

const HeroSection = () => {

    const [images, setImages] = useState([])

    useEffect(()=>{
        axiosGet('api/home_slider')
        .then(res=>{
            setImages(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])

    return (
        <div className={'relative z-0'}>
            {/* <img className={'w-full md:h-70vh'} src="/Images/Website-front-cover-02.png" alt="Home Hero"/> */}
            <HeroSlider images={images} />
            <img src="/Images/logo2.gif" alt="Logo" className={'absolute -bottom-0 h-4/5 left-1/2 transform -translate-x-1/2'}/>


        </div>
    )
}


export default HeroSection
