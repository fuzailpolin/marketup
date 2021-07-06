import Link from 'next/link'
import { FacilityText, PriceText } from "../../";

const SubSuitDescription = ({ facilities, orientation }) => {
  return (
      <div
          className={`flex justify-between ${
              orientation === "LR" ? "md:justify-end" : "md:justify-start"
          } md:items-center md:w-1/3`}
      >
        <div className={"text-left md:text-right"}>
          <div className={"pb-5 text-left"}>
            <Link
                href={`/our-suites/${facilities[0].slug}`}
            >
              <a  className={"text-lg md:text-3xl font-medium "}>{facilities[0]?.title}</a>

            </Link>
          </div>
          <div className={"pb-5"}>
            {facilities?.map((data, index) => (
                <FacilityText key={index} {...data} orientation={orientation} />
            ))}
          </div>
          <div
              className={`hidden md:block  ${
                  orientation === "LR" ? "text-right" : "text-left"
              }`}
          >
            <PriceText amount={facilities[0]?.amount} orientation={orientation} />
          </div>
        </div>
        <div className={"block md:hidden text-right mt-2"}>
          <PriceText amount={facilities[0]?.amount} orientation={orientation} />
        </div>
      </div>
  );
};

export default SubSuitDescription;
