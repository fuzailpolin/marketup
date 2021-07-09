import PartnershipSlider from "../../../Slider/PartnershipSlider";

const data = [
    {
        name: 'Faisal Rahim Omi',
        designation: 'CEO',
        image: '/Images/temp/temp1.jpg',
        companyLogo: '/Images/homepage/cientsLogo/aws.svg',
        text:`We thrive when we have permission to find the best solutions for the 
        brief, without predefined limitations. Having the brief, Research team 
        does the research and provides data and other necessary statistics 
        needed. Strategy team develops the marketing strategy. Then a 
        brainstorming session of strategy and creative team find out the 
        solution for the problem. After that, creative team starts working on 
        the creative strategy and development of creative tools. While it’s 
        approved from client, we go for the execution. Our in-house and out 
        sourcing vendors are prompt in delivering all the things before the 
        final deadline`
    },
    {
        name: 'Nasif Zuhayer Auritro',
        designation: 'COO',
        image: '/Images/temp/temp2.jpg',
        companyLogo: '/Images/homepage/cientsLogo/aws.svg',
        text:`We thrive when we have permission to find the best solutions for the 
        brief, without predefined limitations. Having the brief, Research team 
        does the research and provides data and other necessary statistics 
        needed. Strategy team develops the marketing strategy. Then a 
        brainstorming session of strategy and creative team find out the 
        solution for the problem. After that, creative team starts working on 
        the creative strategy and development of creative tools. While it’s 
        approved from client, we go for the execution. Our in-house and out 
        sourcing vendors are prompt in delivering all the things before the 
        final deadline`
    },
    {
        name: 'Masuma Aziz',
        designation: 'CSO',
        image: '/Images/temp/temp3.jpg',
        companyLogo: '/Images/homepage/cientsLogo/aws.svg',
        text:`We thrive when we have permission to find the best solutions for the 
        brief, without predefined limitations. Having the brief, Research team 
        does the research and provides data and other necessary statistics 
        needed. Strategy team develops the marketing strategy. Then a 
        brainstorming session of strategy and creative team find out the 
        solution for the problem. After that, creative team starts working on 
        the creative strategy and development of creative tools. While it’s 
        approved from client, we go for the execution. Our in-house and out 
        sourcing vendors are prompt in delivering all the things before the 
        final deadline`
    }
]

const PartnershipSection = () => {
    return (
        <div>
            <div className={'mt-20 mb-10'}>
                <h2 className={'text-secondary pb-5 font-medium text-center text-lg md:text-2xl font-mons'}>
                        Partnership 
                    <span className={'ml-3 text-primary font-bold border-b-2 border-primary'}>
                        Program
                    </span>
                </h2>
            </div>
            <div className={'bg-sectionBG px-10'}>
                <div className={'py-8'}>
                    <PartnershipSlider data={data} />
                </div>
            </div>
            
            
        </div>
    );
}

export default PartnershipSection;