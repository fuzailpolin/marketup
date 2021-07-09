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
        text: 'New Ideas andtreads are being set every day and so we know the need to rebrand your company to make it a show shopper in the industry.',
        children: <RebrandingIcon />
    },
    {
        key: 3,
        title: 'Design Solution',
        children: <DesignSolutionIcon />,
        text : 'Our designated team will be dedicated to analyze your industry and ensure the perfect designs that will make your clients go WOW.'
    },
    {
        key: 4,
        title: 'Customer Service',
        children: <CustomerServiceIcon />,
        text: 'For whom the business is if there aren’t any customers. Our highly experienced team will be dedicated to take over your hassle to deal with your customers.'
    },
    {
        key: 5,
        text: 'Our highly expertized in-house photography team will make your product look like “Must bought Item” in your customer’s personal list.',
        title: 'Photography',
        children: <PhotographyIcon />
    },
    {
        key: 6,
        title: 'Consultancy',
        text: 'Our experts will sit down and hear you out to make your dream business come to reality.',
        children: <ConsaltencyIcon />

    },
    {
        key: 7,
        title: 'Content Creating',
        text: 'Let people know more about your business with the Crows. Our content creating team will correspond to your ideas to reality.',
        children: <ContentCreatingIcon />
    },
    {
        key: 8,
        title: 'Website Development',
        text: 'With your requirements and our expertise, we will make the perfect website for you that will flaunt your business.',
        children: <WebDevelopmentIcon />
    },
    {
        key: 9,
        title: 'Customized Packages',
        text: 'Do not worry if you need multiple services because your crows will make customized plan for you based on your need to flourish your business.',
        children: <CustomizedPackageIcon />
    },
    {

    },
    {
        key: 10,
        title: 'Videography',
        children: <VideographyIcon />,
        text: 'The better the video the better the Audience. We will make exclusive videos for your business outshine.'
    }
]

const ServiceSection = () => {

    return (
        <div className="container md:mx-auto" id={'service'}>
            <h2 className={'text-secondary  pb-5 md:pb-10 pt-20 font-medium text-center text-lg md:text-2xl font-mons'}>
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
    {/*  cards holder end*/
    }
</div>
)
}


export default ServiceSection
