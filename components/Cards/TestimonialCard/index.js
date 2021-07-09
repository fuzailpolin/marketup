const TestimonialCard = ({text, name, designation, company}) => {
    return (
        <div className={'container mx-auto'}>
            <div className={'text-white font-poppins text-center md:px-20 lg:px-32 md:py-8 py-4'}>
                <p className={'text-xs md:text-base font-light'}>
                    {text}
                </p>
                <p className={'font-bold text-xl mt-6'}>
                    {name}
                </p>
                <p className={'text-base mt-2'}>
                    {designation} 
                </p>
                <p className={'text-base font-medium mt-1'}>
                    {company}
                </p>
            </div>
        </div>
    );
}

export default TestimonialCard;
