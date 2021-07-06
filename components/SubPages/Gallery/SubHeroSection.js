import React from 'react'
import style from "./style.module.css"

const SubHeroSection = ({title}) => {
    return (
      <div
        className={`h-96 relative text-center grid place-items-center ${style["gallery-subHeroSection"]}`}
      >
        <p className="absolute text-white text-5xl mt-8 font-primary uppercase">{title}</p>
      </div>
    );
}

export default SubHeroSection
