import React from "react";
import Slider from "react-slick";
import {cloudinaryCloudName} from "../../../frontend/env";
import {Image, Transformation} from "cloudinary-react";

// const CustomArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "#cccccc", borderRadius:'10px' }}
//         onClick={onClick}
//       />
//     );
// }

const LogoSlider = ({logos}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: false,
        responsive: [
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 4
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
      <div>
        <Slider {...settings}>
            {
                logos.map((item, index)=>{
                    return (
                        <div key={index} className={'px-3'}>

                            <Image className={'w-52 h-16 object-fill'} cloudName={cloudinaryCloudName} publicId={item}>
                                <Transformation width={200}  gravity="south" crop="fill" />
                            </Image>
                        </div>
                    )
                })
            }
        </Slider>
      </div>
    );
}

export default LogoSlider;
