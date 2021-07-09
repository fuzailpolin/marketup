const PartnershipCard = ({name, designation, image, companyLogo, text}) => {
    return (
        <div className={'container mx-auto'}>
            <div className={'grid grid-cols-12'}>
                <div className={'hidden md:block col-span-2'}>
                    <div className={'grid place-items-center h-full'}>
                        <img className={'w-52 h-16'} src={companyLogo} alt='not found' />
                    </div>    
                </div>
                <div className={'col-span-12 md:col-span-4 grid place-items-center'}>
                    <div className={'rounded-md'}>
                        <div className={'grid justify-center'}>
                            <img src={image} className={'h-40 w-40 rounded-full object-cover'} alt='not found' />
                        </div>
                        <div className={'text-center mt-5 mb-3 md:mb-10'}>
                            <p className={'font-poppins text-base lg:text-2xl font-medium text-secondary'}>{name}</p>
                            <p className={'font-poppins text-sm lg:text-xl text-secondary mt-3'}>{designation}</p>
                        </div>
                    </div>
                </div>
                <div className={'md:hidden col-span-12'}>
                    <div className={'grid place-items-center mb-3'}>
                        <img className={'md:h-16 h-10'} src={companyLogo} alt='not found' />
                    </div>
                </div>
                <div className={' col-span-12 md:col-span-6'}>
                    <div className={'font-poppins md:text-sm text-xs text-center text-secondary md:mt-5'}>
                        <p>
                           {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartnershipCard;
