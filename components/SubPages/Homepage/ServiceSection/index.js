import ServiceCard from "../../../Cards/ServiceCard";
import SocialMediaIcon from "../../../Svgs/SocialMediaIcon";
import RebrandingIcon from "../../../Svgs/RebrandingIcon";
import DesignSolutionIcon from "../../../Svgs/DesignSolution";
import PhotographyIcon from "../../../Svgs/PhotographyIcon";
import CustomerServiceIcon from "../../../Svgs/CustomerServiceIcon";
import ConsaltencyIcon from "../../../Svgs/ConsaltencyIcon";
import ContentCreatingIcon from "../../../Svgs/ContentCreatingIcon";
import WebDevelopmentIcon from "../../../Svgs/WebDevelopmentIcon";
import CustomizedPackageIcon from "../../../Svgs/CustomizedPackageIcon";
import VideographyIcon from "../../../Svgs/VideographyIcon";


const services = [
    {
        key: 1,
        title: 'Social Media Marketing',
        text: '3.96 billion worldwide uses social media every day. We know how much exposure is needed to accomplish',
        children: <SocialMediaIcon />
    },
    {
        key: 2,
        title: 'Rebranding',
        text: 'Still not sure how to set up shop? Wear a new look from the hands of the crows.',
        children: <RebrandingIcon />
    },
    {
        key: 3,
        title: 'Design Solution',
        children: <DesignSolutionIcon />,
        text : 'Dedicated designers to analyze your industry and ensure the perfect designs to make your clients go WOW.'
    },
    {
        key: 4,
        title: 'Customer Service',
        children: <CustomerServiceIcon />,
        text: 'We know that retention is harder than acquisition. Choose the crows to stay connected to your audience.'
    },
    {
        key: 5,
        text: 'Look good, sell good.With our in house photography team, we will be sure to cover all angles',
        title: 'Photography',
        children: <PhotographyIcon />
    },
    {
        key: 6,
        title: 'Consultancy',
        text: 'Check every small detail in one-on-one sessions with our consultants to further refine your business.',
        children: <ConsaltencyIcon />

    },
    {
        key: 7,
        title: 'Content Creating',
        text: 'The crows know what’s best for the market. Tell us your needs and that is what we will feed.',
        children: <ContentCreatingIcon />
    },
    {
        key: 8,
        title: 'Website Development',
        text: 'With your requirements and our expertise, we will make the perfect website for you to flaunt your business.',
        children: <WebDevelopmentIcon />
    },
    {
        key: 9,
        title: 'Customized Packages',
        text: 'Worried about clichéd posts and boring packages? The crows will make customized packages tailor-made to your needs.',
        children: <CustomizedPackageIcon />
    },
    {

    },
    {
        key: 10,
        title: 'Videography',
        children: <VideographyIcon />,
        text: 'We make premium videos for your premium audience so you stand out from the crowd.',   
    }
]

const ServiceSection = () => {

    return (
        <div className={'bg-black'}>
        <div className="container md:mx-auto" id={'service'}>
            <h2 className={'text-secondary  pb-5 md:pb-10 pt-20 font-medium text-center text-lg md:text-2xl font-typoSlab'}>
                <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                    Services
                </span>
            </h2>
            {/*cards holder start*/}
            <div className="grid md:grid-cols-3 gap-3">
                {
                    services.map((services) => (
                        services?.key ? <ServiceCard {...services} /> : <div key={Math.random}> </div>
                    ))
                }
            </div>
            {/*  cards holder end*/}
        </div>
        </div>
)
}


export default ServiceSection
