import React from "react";
import Slider from "react-slick";
import { Image } from "cloudinary-react";
import { cloudinaryCloudName } from "../../../frontend/env";

const HeroSlider = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };
    return (
      <div>
        <Slider {...settings}>
            {
                images.map((item, index)=>{
                    return (
                        <div key={index} className="h-30vh md:h-70vh -mb-3 overflow-hidden">
                            <Image className={'w-full object-cover  h-full object-center'} cloudName={cloudinaryCloudName} publicId={item.image}>
                            </Image>
                        </div>
                    )
                })
            }
        </Slider>
      </div>
    );
}

export default HeroSlider;