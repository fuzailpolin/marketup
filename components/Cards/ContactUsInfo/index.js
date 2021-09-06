import { BiMap } from "react-icons/bi";
import { FiPhone, FiMail } from "react-icons/fi";

const ContactUsInfo = () => {
    return (
        <div className={'mx-2 py-5 md:mx-3 lg:mx-6'}>
            <div className={'grid grid-cols-12 my-4'}>
                <div className={'col-span-3 lg:col-span-2 flex items-center'}>
                    <BiMap className={'rounded-full bg-gray-200 py-3 w-10 h-10 md:w-14 md:h-14 text-primary'} />
                </div>
                <div className={' col-span-9 lg:col-span-10 flex items-center'}>
                    <div className={'text-gray-300 font-poppins text-xs md:text-base'} >
                        <p>21/A Purana Paltan</p>
                        <p>1st Floor</p>
                        <p>Dhaka - 1000</p>
                    </div>
                </div>
            </div>
            <div className={'grid grid-cols-12 my-4'}>
                <div className={'col-span-3 lg:col-span-2 flex items-center'}>
                    <FiPhone className={'rounded-full bg-gray-200 py-3 w-10 h-10 md:w-14 md:h-14 text-primary'} />
                </div>
                <div className={'col-span-9 lg:col-span-10 flex items-center'}>
                    <div className={'text-gray-300 font-poppins text-xs md:text-base'}>
                        <p>+88 01535353535</p>
                        <p>+88 01616161655</p>
                    </div>
                </div>
            </div>
            <div className={'grid grid-cols-12 my-4'}>
                <div className={'col-span-3 lg:col-span-2 flex items-center'}>
                    <FiMail className={'rounded-full bg-gray-200 py-3 w-10 h-10 md:w-14 md:h-14 text-primary'} />
                </div>
                <div className={'col-span-9 lg:col-span-10 flex items-center'}>
                    <p className={'text-gray-300 font-poppins  text-xs md:text-base'}>contact@marketupgroup.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUsInfo;
