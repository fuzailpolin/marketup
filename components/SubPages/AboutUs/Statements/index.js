import React from 'react'

const Statements = ({data}) => {
    return (
        <div className={'grid place-items-center mt-24'}>

            {data?.map((item, index) =>{
                return(
                    <div key={index} className={'text-center w-3/4 md:w-2/3 mb-20'}>
                        <p className={'text-2xl font-primary font-bold my-5'}>
                            {item?.title}
                        </p>
                        <p className={'text-gray-500 tect-lg my-8'} dangerouslySetInnerHTML={{__html:item.description}}>
                            
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Statements;
