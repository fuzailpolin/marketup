import CustomSliderNext from "./CustomSliderNext";
import CustomSliderPrev from "./CustomSliderPrev";

const settings = {
  infinite: true,
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <CustomSliderNext />,
  prevArrow: <CustomSliderPrev />,
};

export default settings;
