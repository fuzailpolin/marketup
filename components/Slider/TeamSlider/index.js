
import React from "react";
import Slider from "react-slick";
import TeamCard from "../../Cards/TeamCard";

const CustomArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#cccccc", borderRadius:'10px' }}
        onClick={onClick}
      />
    );
}

const TeamSlider = ({team}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
        responsive: [
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
      <div>
        <Slider {...settings}>
            {
                team.map((item)=>{
                  if(item.designation.toUpperCase() === 'CEO' || item.designation.toUpperCase() === 'CHIEF EXECUTIVE OFFICER'){
                    return;
                  }
                  else{
                    return (
                        <div key={item._id} className={'px-3'}>
                            <TeamCard name={item.name} designation={item.designation} image={item.image} />
                        </div>
                    )
                  }
                })
            }
        </Slider>
      </div>
    );
}

export default TeamSlider;
