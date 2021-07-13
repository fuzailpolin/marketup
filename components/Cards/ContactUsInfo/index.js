import { BiMap } from "react-icons/bi";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsInfo = () => {
    return (
        <div className={'mx-2 py-5 md:mx-3 lg:mx-6'}>
            <div className={'grid grid-cols-12 my-4'}>
                <div className={'col-span-3 lg:col-span-2 flex items-center'}>
                    <BiMap className={'rounded-full bg-gray-200 py-3 w-10 h-10 md:w-14 md:h-14 text-primary'} />
                </div>
                <div className={' col-span-9 lg:col-span-10 flex items-center'}>
                    <div className={'text-gray-300 font-poppins text-xs md:text-base'} >
                        <p>House -446 (East), Road - 31</p>
                        <p>Mohakhali DOHS, Dhaka - 1206</p>
                    </div>
                </div>
            </div>
            <div className={'grid grid-cols-12 my-4'}>
                <div className={'col-span-3 lg:col-span-2 flex items-center'}>
                    <FiPhone className={'rounded-full bg-gray-200 py-3 w-10 h-10 md:w-14 md:h-14 text-primary'} />
                </div>
                <div className={'col-span-9 lg:col-span-10 flex items-center'}>
                    <div className={'text-gray-300 font-poppins text-xs md:text-base'}>
                        <p>+88 01766883366</p>
                        <p>+88 01766883366</p>
                    </div>
                </div>
            </div>
            <div className={'grid grid-cols-12 my-4'}>
                <div className={'col-span-3 lg:col-span-2 flex items-center'}>
                    <FiMail className={'rounded-full bg-gray-200 py-3 w-10 h-10 md:w-14 md:h-14 text-primary'} />
                </div>
                <div className={'col-span-9 lg:col-span-10 flex items-center'}>
                    <p className={'text-gray-300 font-poppins  text-xs md:text-base'}>info@marketup.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUsInfo;
