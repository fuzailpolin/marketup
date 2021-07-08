import Slider from "react-slick";
const image = [
    {link: '/Images/Gallery/img1.jpg'},
    {link: '/Images/Gallery/img2.jpg'},
    {link: '/Images/Gallery/img3.jpg'},
    {link: '/Images/Gallery/img4.jpg'},
    {link: '/Images/Gallery/img1.jpg'},
    {link: '/Images/Gallery/img2.jpg'},
    {link: '/Images/Gallery/img3.jpg'}
]

const ImagePreview = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Slider {...settings}>
            {image.map((item, index)=>{
                return(
                    <div className={''}>
                        <img key={index} className={'h-70vh w-full p-3 object-cover'} src={item.link} alt='not found' />
                    </div>
                ) 
            })}
        </Slider>
      </div>
    );
}

export default ImagePreview;