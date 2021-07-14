import {Image, Transformation } from 'cloudinary-react'

const TeamCard = ({image, name, designation}) => {
    return (
        <div>
            <div className={'border border-gray-300 rounded-md mt-5 md:mt-10'}>
                <div className={'grid justify-center mb-5 mt-10'}>
                    <Image className={'h-40 w-40 rounded-full object-cover'} cloudName="dmkch2bnk" publicId={"team/fcu2fc8ly7nopmcunznd"}>
                        <Transformation width={300} height={300}  gravity="south" crop="fill" />
                    </Image>
                </div>
                <div className={'text-center mt-5 mb-10'}>
                    <p className={'font-poppins text-base lg:text-2xl font-medium text-gray-200'}>{name}</p>
                    <p className={'font-poppins text-base lg:text-2xl text-gray-200 mt-3'}>{designation}</p>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
