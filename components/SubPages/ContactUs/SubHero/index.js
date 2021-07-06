import React from 'react';
import style from "./style.module.css"

const SubHero = () => {
    return (
        <div>
            <div>
                <div className={style['bg-hero']} style={{zIndex: 10}}>
                </div>
                <div className={'container mx-auto -mt-80 z-10'} style={{position: 'relative'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13265.788760093865!2d-84.30328832214536!3d33.77494837294249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5073df58fe123%3A0x2a81645bd4a01a1e!2sRegus%20-%20Georgia%2C%20Decatur%20-%20One%20West%20Court%20Square!5e0!3m2!1sen!2sbd!4v1623559397066!5m2!1sen!2sbd" width="100%" title="regus" height="600" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                
            </div>
        </div>
    )
}

export default SubHero; 
