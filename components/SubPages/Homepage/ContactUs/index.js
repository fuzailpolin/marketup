import ContactUsForm from "../../../Container/ContactUsForm";
import ContactUsInfo from "../../../Cards/ContactUsInfo";

const ContactUs = () => {
    return (
        <div className={'container mx-auto pt-20'} id={'contact'}>
            <div>
                <h2 className={'text-secondary pb-5 font-medium text-center text-lg md:text-2xl font-mons'}>
                    <span className={'text-primary font-bold border-b-2 border-primary mr-1'}>
                        Contact
                    </span>
                    Us
                </h2>
            </div>
            <div className={'md:my-10 my-5'}>
                <div className={'grid grid-cols-12'}>
                    <div className={'col-span-12 md:col-span-7'}>
                        <div className={'grid justify-end mx-3 md:mx-6 lg:mx-14'}>
                            <img className={'w-20 h-20 transition delay-500'} src={'/Images/logo2.gif'} alt='not found' />
                        </div>
                    </div>
                    <div className={'col-span-12 md:col-span-5'}>
                    </div>
                </div>
                <div className={'grid grid-cols-12'}>
                    <div className={'col-span-12 md:col-span-7'}>
                        <ContactUsForm />
                    </div>
                    <div className={'col-span-12 md:col-span-5'}>
                        <ContactUsInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
