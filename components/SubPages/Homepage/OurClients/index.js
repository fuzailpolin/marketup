import LogoSlider from '../../../Slider/LogoSlider';

const logos = [
    '/Images/homepage/cientsLogo/aws.svg',
    '/Images/homepage/cientsLogo/coca.svg',
    '/Images/homepage/cientsLogo/ebay.svg',
    '/Images/homepage/cientsLogo/fb.svg',
    '/Images/homepage/cientsLogo/firebase.svg',
    '/Images/homepage/cientsLogo/google.svg',
    '/Images/homepage/cientsLogo/microsoft.svg',
    '/Images/homepage/cientsLogo/ebay.svg',
    '/Images/homepage/cientsLogo/fb.svg',
    '/Images/homepage/cientsLogo/firebase.svg',
    '/Images/homepage/cientsLogo/google.svg',
    '/Images/homepage/cientsLogo/microsoft.svg',
]

const OurClients = () => {
    return (
        <div className={'bg-black pb-10'}>
        <div className={'container mx-auto pt-20'} id={'client'}>
            <div>
                <h2 className={'text-gray-200 pb-5 font-medium text-center text-lg md:text-2xl font-typoSlab'}>
                    Our
                    <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                        Clients
                    </span>
                </h2>
            </div>
            <div className={'mt-10'}>
                <LogoSlider logos={logos} />
            </div>
            
        </div>
        </div>
    );
}

export default OurClients;
