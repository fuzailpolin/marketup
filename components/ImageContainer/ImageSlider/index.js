import React from 'react';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const SampleNextArrow = ({ className, style, onClick} ) => {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", paddingRight: 60, zIndex:100}}
        onClick={onClick}
      />
    );
}
const SamplePrevArrow = ({ className,  style, onClick} ) => {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", paddingLeft: 40, zIndex:100}}
        onClick={onClick}
      />
    );
}
  

const ImageSlider = ({data}) => {
    
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <div className={'m-5, overflow-hidden'}>
                <Slider {...settings}>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} >
                                <img  className={'w-full object-cover'} style={{maxHeight: '80vh'}} src={item.link} alt='not found' />
                            </div>
                        )
                    })
                }
                </Slider>
            </div>
        </div>
    )
}

export default ImageSlider;
