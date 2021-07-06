import React from "react";
import Slider from "react-slick";
import HeroCard from "../../Cards/HeroCard";

const carersoulContent = [
    {
        title: "Welcome to Atlanta's Shared Living Transitional Housing Inc.",
        carouselIMage: '/image/banner/carasoul-img-1.jpg',
    },
    {
        title: "ASLTHINC’S NONTRADITIONAL TRANSITIONAL HOSTEL & EXTENDED STAYS",
        carouselIMage: '/image/banner/IMG_4072.jpg'
    },
    {
        title:"Atlanta's Premier Choice For Upscale Shared Living and Overnight Stays!!!",
        carouselIMage: '/image/banner/carasoul-img-5.jpg'
    },
    {
        title: "MAKE YOUR NEXT MOVE YOUR BEST MOVE!",
        carouselIMage: '/image/banner/carasoul-img-4.jpg'
    },
];

const SubHeroSection = () => {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        adaptiveHeight: true,
    };

    return (
        <Slider {...settings}>
            {carersoulContent.map((data, index) => (
                <div key={index}>
                    <HeroCard {...data} />
                </div>
            ))}
        </Slider>
    );
};

export default SubHeroSection;
