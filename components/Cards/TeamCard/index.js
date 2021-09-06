import {Image, Transformation } from 'cloudinary-react'
import {cloudinaryCloudName} from '../../../frontend/env'


const TeamCard = ({image, name, designation}) => {
    return (
        <div>
            <div className={'border border-gray-300 rounded-md mt-5 md:mt-10'}>
                <div className={'grid justify-center mb-5 mt-10'}>
                    <Image className={'h-40 w-40 rounded-full object-cover'} cloudName={cloudinaryCloudName} publicId={image}>
                        <Transformation width={300} height={300}  gravity="south" crop="fill" />
                    </Image>
                </div>
                <div className={'text-center mt-5 mb-10'}>
                    <p className={'font-poppins text-lg lg:text-2xl font-medium text-gray-200'}>{name}</p>
                    <p className={'font-poppins text-sm lg:text-lg text-gray-200 mt-3'}>{designation}</p>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
