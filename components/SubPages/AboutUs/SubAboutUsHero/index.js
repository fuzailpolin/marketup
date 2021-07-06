import React from 'react';

const SubAboutUsHero = ({heroImage, logoImage, description}) => {
    return (
        <div>
            <div>
                <img style={{width: '100%', height: '80vh', objectFit: 'cover'}} src={heroImage} alt='not found' />
            </div>
            <div className={'grid place-items-center'}>
                <img src={logoImage} />
                <p className={'w-4/5 md:w-2/3 text-lg text-center text-gray-600'}>{description}</p>
            </div>
        </div>
    )
}

export default SubAboutUsHero;
