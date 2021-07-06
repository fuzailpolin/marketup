import React from "react";
import style from "./style.module.css";
import Image from "./Image";

const GalleryImages = ({ className,title }) => {
  return (
    
      <div className={className}>
        <p className="text-primary font-primary text-center text-3xl mb-4 uppercase">{title}</p>
        <div className={`flex h-full w-full`}>
          <Image image="/Images/suit/governor's_suit.jpg" />
          <Image image="/Images/suit/executive_suit.jpg" />
          <Image image="/Images/suit/mayor's_suit.jpg" />
        </div>
      </div>
    
  );
};

export default GalleryImages;
