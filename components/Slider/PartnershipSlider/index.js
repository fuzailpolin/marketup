import React from "react";
import Slider from "react-slick";
import PartnershipCard from "../../Cards/PartnershipCard";

const PartnershipSlider = ({data}) => {
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
                            <PartnershipCard {...item} />
                        </div>
                    )
                })
            }
        </Slider>
      </div>
    );
}

export default PartnershipSlider;