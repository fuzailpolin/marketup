import React from 'react';

const AgentImageContainer = ({data}) => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1000" className={ 'grid grid-cols-10' }>
                {data.map((image, index) =>{
                    return(
                        <img key={index} className={'object-cover col-span-10 md:col-span-2 md:w-full p-3 transform md:even:mt-20'} style={{maxHeight: '65vh', minHeight: '30vh'}}  src={image.link} alt='not found' />
                    );
                })}
            </div>
        </div>
    )
}

export default AgentImageContainer;
