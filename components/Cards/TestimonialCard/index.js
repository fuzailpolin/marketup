const TestimonialCard = ({text, name, designation, company}) => {
    return (
        <div className={'container mx-auto'}>
            <div className={'text-white font-poppins text-center  py-10'}>
                <p className={'text-base font-light'}>
                    {text}
                </p>
                <p className={'text-xl mt-6'}>
                    {name}
                </p>
                <p className={'text-base font-light mt-3'}>
                    {designation} 
                </p>
                <p className={'text-base font-light mt-1'}>
                    {company}
                </p>
            </div>
        </div>
    );
}

export default TestimonialCard;