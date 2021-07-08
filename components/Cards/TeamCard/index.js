const TeamCard = ({image, name, designation}) => {
    return (
        <div>
            <div className={'border border-gray-300 rounded-md mt-5 md:mt-10'}>
                <div className={'grid justify-center mb-5 mt-10'}>
                    <img src={image} className={'h-40 w-40 rounded-full object-cover'} alt='not found' />
                </div>
                <div className={'text-center mt-5 mb-10'}>
                    <p className={'font-poppins text-xl md:text-2xl font-medium text-secondary'}>{name}</p>
                    <p className={'font-poppins text-xl md:text-2xl text-secondary mt-3'}>{designation}</p>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;