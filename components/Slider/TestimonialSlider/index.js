import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../../Cards/TestimonialCard";


const TestimonialSlider = ({data}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
            {
                data.map((item, index)=>{
                    return (
                        <div key={index} className={'px-3'}>
                            <TestimonialCard {...item} />
                        </div>
                    )
                })
            }
        </Slider>
      </div>
    );
}

export default TestimonialSlider;