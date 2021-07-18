import {Image, Transformation} from "cloudinary-react";
import {cloudinaryCloudName} from "../../../frontend/env";

const PartnershipCard = ({name, designation, image, companyLogo, text}) => {
    return (
        <div className={'container mx-auto'}>
            <div className={'grid grid-cols-12'}>
                <div className={'hidden md:block col-span-2'}>
                    <div className={'grid place-items-center h-full'}>
                        <Image className={'w-52 h-16'} cloudName={cloudinaryCloudName} publicId={companyLogo}>
                            <Transformation width="400"  gravity="south" crop="fill" />
                        </Image>

                    </div>    
                </div>
                <div className={'col-span-12 md:col-span-4 grid place-items-center'}>
                    <div className={'rounded-md'}>
                        <div className={'grid justify-center'}>
                            <Image  className={'h-40 w-40 rounded-full object-cover'} cloudName={cloudinaryCloudName} publicId={image}>
                                <Transformation width="400"  gravity="south" crop="fill" />
                            </Image>
                        </div>
                        <div className={'text-center mt-5 mb-3 md:mb-10 text-gray-200'}>
                            <p className={'font-poppins text-base lg:text-2xl font-medium'}>{name}</p>
                            <p className={'font-poppins text-sm lg:text-xl mt-3'}>{designation}</p>
                        </div>
                    </div>
                </div>
                <div className={'md:hidden col-span-12'}>
                    <div className={'grid place-items-center mb-3'}>
                        <Image  className={'md:h-16 h-10'} cloudName={cloudinaryCloudName} publicId={companyLogo}>
                            <Transformation width="400"  gravity="south" crop="fill" />
                        </Image>

                    </div>
                </div>
                <div className={' col-span-12 md:col-span-6'}>
                    <div className={'font-poppins md:text-sm text-xs text-center text-gray-300 md:mt-5'}>
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
