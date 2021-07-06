import React from 'react';
import style from  "./BookNowSuitImage.module.css";

const BookNowSuitImage = ({image, title, price}) => {
    return (
        <div>
            <div className={`${style['main']} flex items-center overflow-hidden `}>
                <div className={`${style['title-container']}bg-red-600`}>
                    <div className={`${style['title-price']} mt-20 ml-12 text-2xl font-extrabold font-primary`}>
                        <p>{title}</p>
                        <p className={' text-red-700 mt-3'}>${price} per Night</p>
                    </div>
                </div>
                <img className={`${style["image"]} object-cover transform duration-700`}  src={image} alt='not found' />
            </div>
        </div>
    )
}

export default BookNowSuitImage;
