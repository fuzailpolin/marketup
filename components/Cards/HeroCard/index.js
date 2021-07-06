import React from "react";

const HeroCard = ({ title, carouselIMage }) => {
  return (
    <div
      className="flex items-center justify-center bg-cover h-screen w-full bg-center p-10 md:py-32 md:px-16"
      style={{
        backgroundImage: ` url(${carouselIMage})`,
      }}
    >
      <div className={"w-full md:w-3/4"}>
        <h1 className="font-serif uppercase font-bold text-2xl md:text-5xl md:leading-relaxed text-center drop-shadow text-white ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroCard;
