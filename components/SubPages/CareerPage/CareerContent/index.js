
const data = {
    title: 'Career',
    description: `We thrive when we have permission to find the best solutions for the brief, without predefined limitations. Having the brief, 
    Research team does the research and provides data and other necessary statistics needed.
    <br/> <br/>
    We thrive when we have permission to find the best solutions for the brief, without predefined limitations. 
    Having the brief, Research team does the research and provides data and other necessary `
}

const CareerContent = () => {
    return (
        <div className={'container mx-auto grid place-items-center p-2'}>
            <p className={'text-center text-xl font-mons font-semibold my-8'}>
                {data.title}
            </p>
            <p className={'text-left md:w-3/5 text-sm font-poppins font-light text-descColor mb-10'} dangerouslySetInnerHTML={{ __html: data.description }} >
            </p>
        </div>
    );
}

export default CareerContent;