import ImageContainer from "../../../Container/ImageContainer";
 
const image = [
        {link: '/Images/Gallery/img1.jpg'},
        {link: '/Images/Gallery/img2.jpg'},
        {link: '/Images/Gallery/img3.jpg'},
        {link: '/Images/Gallery/img4.jpg'},
        {link: '/Images/Gallery/img1.jpg'},
        {link: '/Images/Gallery/img2.jpg'},
        {link: '/Images/Gallery/img3.jpg'}
    ]

const OurWorkSection = () => {
    return (
        <div className={'container mx-auto my-10'}>
            <div>
                <p className={'text-2xl font-mons font-semibold text-center'}>
                    Our <span className={'text-primary underline'}>Work</span>
                </p>
            </div>
            <div className={'grid grid-cols-12 mx-5'}>
                {
                    image.map((item, index)=>{
                        return (
                            <div key={index} className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                                <ImageContainer image={item.link} />
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}

export default OurWorkSection;