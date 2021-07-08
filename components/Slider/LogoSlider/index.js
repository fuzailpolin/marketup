import React from "react";
import Slider from "react-slick";

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
                            <img className={'w-52 h-16 object-fill'} src={item} alt='not found' />
                        </div>
                    )
                })
            }
        </Slider>
      </div>
    );
}

export default LogoSlider;