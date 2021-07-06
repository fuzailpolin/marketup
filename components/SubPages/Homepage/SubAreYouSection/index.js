import { SuitCard } from "../../../";
import style from "./SubAreYouSection.module.css";
import SuiteCardData from "../../../../Assets/Data/SuiteCardData"

const SubAreYouSection = () => {
  return (
    <>
      <div className={style["subAreYouSection-Wrapper"]}>
        <div className={`${style["subAreYouSection-overlay"]} h-full w-full`}>
          <div className="text-white px-5 md:w-3/5 mx-auto">
            <p className="text-4xl uppercase pt-5 pb-5 font-bold">
              Are you ...
            </p>
            <p className="pb-5 text-lg">
              in town visiting, on vacation/baecation, avoiding hotel prices, a
              Veteran, Flight Attendant, A truck driver, seeking off campus collegiate housing,
              moving, homeless, transitioning or just need an affordable,
              permanent/temporary place to stay?
            </p>
            <p className="pb-5 text-lg">
              Haven’t you heard? Atlanta is becoming more of an expensive place
              to live and this popular city just keeps on building and growing
              resulting in market rate rent being raised each year, but not to
              worry, here at ASLTHinc. we’ve created the perfect living
              solution, customized just for you. It’s successful in Los Angeles,
              CA. and now we’re here making it happen in Atlanta!! Miami stay
              tuned!!!
            </p>
            <p className="pb-5 text-lg">
              Our extended stay/transitional housing booking options are:
              nightly, weekly, bi-weekly, and month to month.
            </p>
            <p className="text-lg pb-56">
              We accept all supportive payment programs​.
            </p>
          </div>
        </div>
      </div>
      <div
        className=" grid grid-cols-2 md:grid-cols-4 md:px-24 px-5 -mt-40 mb-10"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once={true}
      >

        {
          SuiteCardData.map((item,index)=>{
            return <SuitCard key={index} {...item}/>
          })
        }
       
      </div>
    </>
  );
};

export default SubAreYouSection;
