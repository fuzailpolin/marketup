
const data = {
    title: 'A career that enhances your passion',
    description: `marketUP. is a marketing agency ensuring explosive growth for your business by recognizing the patterns and values of the target market.  In this day and age, the necessity of marketing has no boundaries.  As a result, we are here to provide our clients with innovative marketing and rebranding ideas. Marketing is dynamic and evolving. As a result, we are always looking to grow our team.  Working with us will allow you to not only learn but also position yourself as a competitive marketer.
    Revolutionize your role as a marketer! 
    JOIN US!`
}

const CareerContent = () => {
    return (
        <div className={'bg-black'}>
        <div className={'container mx-auto grid place-items-center p-2'}>
            <p className={'text-center text-gray-100 text-xl font-typoSlab font-semibold my-8'}>
                {data.title}
            </p>
            <p className={'text-center text-gray-200 md:w-3/5 text-sm font-poppins font-light text-descColor mb-10'} dangerouslySetInnerHTML={{ __html: data.description }} >
            </p>
        </div>
        </div>
    );
}

export default CareerContent;