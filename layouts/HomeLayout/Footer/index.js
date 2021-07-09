import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className={'pt-8'}>
                <iframe className={'w-full h-60 md:h-96'}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14593.529954832293!2d90.40427345887082!3d23.876051964805423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1625727000429!5m2!1sen!2sbd"
                    allowFullScreen="" style={{filter: 'invert(100%)'}} loading="lazy"></iframe>
            </div>
            <div className={'bg-dark'}>
                <div className="container mx-auto px-5 md:px-24 ">
                    <div className="grid md:grid-cols-3">

                        {/* grid col start*/}
                        <div className={'md:flex items-center py-4 md:py-10 hidden '}>
                            <div>
                                <p className={'text-xs font-medium font-poppins text-white'}><span
                                    className={'pr-1 text-base'}>&copy;</span> 2021 MarketUp Group Communications</p>
                                <p className={'text-xs font-poppins py-1 text-white'}><span
                                    className={'pr-1 text-base opacity-0'}>&copy;</span> All Rights Reserved</p>
                            </div>
                        </div>
                        {/*grid col end*/}


                        {/*    grid col start*/}
                        <div className={'md:py-10 pl-2 md:pl-10 py-2 md:py-4'}>
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
                        <div className={'md:py-10 pl-2 md:pl-10 py-2 md:py-4'}>
                            <h2 className={'text-sm font-poppins text-white font-medium py-1 md:py-3'}>Social Media</h2>
                            <div className={'text-primary pt-3 md:pt-7'}>
                                <div
                                    className={'mr-2 inline-flex h-8 w-8 rounded-full bg-white justify-center items-center'}>
                                    <FaFacebookF/>
                                </div>

                                <div
                                    className={'mr-2 inline-flex h-8 w-8 rounded-full bg-white justify-center items-center'}>
                                    <FaInstagram/>
                                </div>

                                <div
                                    className={'inline-flex h-8 w-8 rounded-full bg-white justify-center items-center'}>
                                    <FaLinkedinIn/>
                                </div>
                            </div>
                        </div>
                        {/* grid col end*/}


                        {/* grid col start*/}
                        <div className={'flex items-center py-4 md:py-10 md:hidden '}>
                            <div>
                                <p className={'text-xs font-medium font-poppins text-white'}><span
                                    className={'pr-1 text-base'}>&copy;</span> 2021 MarketUp Group Communications</p>
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
