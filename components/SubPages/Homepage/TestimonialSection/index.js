import TestimonialCard from "../../../Cards/TestimonialCard";
import TestimonialSlider from "../../../Slider/TestimonialSlider";

const data = [
    {
        text: 'Ideadose Communication is one of the fastest growing Advertisement Agency in Bangladesh. We are proud and renown for our unconventional company culture. That’s why we are looking for modern marketing and brand experts with open minded and gargantuan talent, always.',
        name: 'Reazaul Karim Titu',
        designation: 'Barnd Manager',
        company: 'Rahim Group'
    },
    {
        text: 'Ideadose Communication is one of the fastest growing Advertisement Agency in Bangladesh. We are proud and renown for our unconventional company culture. That’s why we are looking for modern marketing and brand experts with open minded and gargantuan talent, always.',
        name: 'Reazaul Karim Titu',
        designation: 'Barnd Manager',
        company: 'Rahim Group'
    },
    {
        text: 'Ideadose Communication is one of the fastest growing Advertisement Agency in Bangladesh. We are proud and renown for our unconventional company culture. That’s why we are looking for modern marketing and brand experts with open minded and gargantuan talent, always.',
        name: 'Reazaul Karim Titu',
        designation: 'Barnd Manager',
        company: 'Rahim Group'
    },
    {
        text: 'Ideadose Communication is one of the fastest growing Advertisement Agency in Bangladesh. We are proud and renown for our unconventional company culture. That’s why we are looking for modern marketing and brand experts with open minded and gargantuan talent, always.',
        name: 'Reazaul Karim Titu',
        designation: 'Barnd Manager',
        company: 'Rahim Group'
    },
]

const TestimonialSection = () => {
    return (
        <div style={{backgroundImage: 'url(/Images/Gallery/GalleryHero.webp)'}} >
            <div className={'mx-12 py-5'}>
                <TestimonialSlider data={data} />
            </div>
        </div>
    );
}

export default TestimonialSection;