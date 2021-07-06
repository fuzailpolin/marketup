import Slider from "react-slick";
import { TabcardContent } from "../../../Assets/Data/TabData";
import TabCard2 from "../../Cards/TabCard/TabCard2";
import SingleSuitSlider from "../../Sliders/SingleSuitSlider";
import settings from "../../Sliders/SingleSuitSlider/sliderSettings";

const SubSingleSuitLeft = ({ singleSuitData }) => {
  return (
    <div className={"col-span-12 md:col-span-8"}>
      <h5 className="text-4xl uppercase font-extrabold mb-10 mt-0">
        {singleSuitData?.title}
      </h5>
      <p className="font-normal text-sm md:text-lg md:leading-tight text-gray-400 text-left mb-10">
        {singleSuitData?.desc}
      </p>
      <Slider {...settings} className={"mb-10"}>
        {singleSuitData?.carouselImages?.map((data, index) => (
          <div key={index}>
            <SingleSuitSlider {...data} />
          </div>
        ))}
      </Slider>
      <div>
        <h5 className="text-3xl uppercase font-semibold mb-10 mt-0">
          {singleSuitData?.title} FEATURES
        </h5>
        <p className="font-normal text-sm md:text-lg md:leading-tight text-gray-400 text-left mb-10">
          {singleSuitData?.features}
        </p>
      </div>
      <div className="grid w-full  md:grid-cols-3 sm:grid-cols-1 gap-3 px-4 py-10">
        {TabcardContent.filter(
          (item) =>
            item.slug.toLowerCase() === singleSuitData?.tabSlug.toLowerCase()
        ).map((content, index) => (
          <div key={index} className={"mb-8 md:mb-16"}>
            <TabCard2 {...content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSingleSuitLeft;
