import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className={'bg-dark'}>
                <div className="container mx-auto px-5 md:px-24 ">
                    <div className="grid md:grid-cols-3">

                        {/* grid col start*/}
                        <div className={'md:flex items-center py-4 md:py-10 hidden '}>
                            <div>
                                <p className={'text-xs font-medium font-poppins text-white'}><span
                                    className={'pr-1 text-base'}>&copy;</span> 2021 marketUP. Group Communications</p>
                                <p className={'text-xs font-poppins py-1 text-white'}><span
                                    className={'pr-1 text-base opacity-0'}>&copy;</span> All Rights Reserved</p>
                            </div>
                        </div>
                        {/*grid col end*/}


                        {/*    grid col start*/}
                        <div className={'md:py-10 pl-2 md:pl-10 py-2'}>
                            <h2 className={'text-sm font-poppins text-white font-medium py-1 md:py-3'}>About</h2>
                            <p className="py-1 md:py-2 font-normal text-xs font poppins text-white">
                                <Link href={'/career'}>
                                    Career
                                </Link>
                            </p>
                            <p className="py-1 md:py-2 font-normal text-xs font poppins text-white">
                                <Link href={'/#client'}>
                                    Client
                                </Link>

                            </p>
                            <p className="py-1 md:py-2 font-normal text-xs font poppins text-white">
                                <Link href={'/#about'}>
                                    About Us
                                </Link>
                            </p>
                        </div>
                        {/*    grid col end*/}

                        {/* grid col start*/}
                        <div className={'md:py-10 pl-2 md:pl-10 py-2'}>
                            <h2 className={'text-sm font-poppins text-white font-medium py-1 md:py-3'}>Social Media</h2>
                            <div className={'text-primary pt-3 md:pt-7'}>
                                <div
                                    className={'mr-2 inline-flex h-8 w-8 rounded-full bg-white justify-center items-center cursor-pointer'}>
                                    <a target="_blank" href={'https://www.facebook.com/marketupdigital/'} rel="noopener noreferrer">
                                        <FaFacebookF/>
                                    </a>
                                </div>

                                <div
                                    className={'mr-2 inline-flex h-8 w-8 rounded-full bg-white justify-center items-center'}>
                                    <a target="_blank" href={'https://instagram.com/marketupgroup?utm_medium=copy_link'} rel="noopener noreferrer">
                                        <FaInstagram/>
                                    </a>
                                </div>

                                <div
                                    className={'inline-flex h-8 w-8 rounded-full bg-white justify-center items-center'}>
                                    <a target="_blank" href={'https://www.linkedin.com/company/marketupgroup'} rel="noopener noreferrer">
                                        <FaLinkedinIn/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* grid col end*/}


                        {/* grid col start*/}
                        <div className={'flex items-center py-4 md:py-10 md:hidden '}>
                            <div>
                                <p className={'text-xs font-medium font-poppins text-white'}><span
                                    className={'pr-1 text-base'}>&copy;</span> 2021 marketUP. Group Communications</p>
                                <p className={'text-xs font-poppins py-1 text-white'}><span
                                    className={'pr-1 text-base opacity-0'}>&copy;</span> All Rights Reserved</p>
                            </div>
                        </div>
                        {/*grid col end*/}


                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
