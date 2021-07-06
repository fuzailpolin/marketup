import React from "react";
import { LegendCard } from "../../";
const title = "THIS IS A LEGEND TO HAVE GREAT TIME!";
const desc = `At ASLTHinc. we've created the perfect living solution, customized for those in transition. We provide an upscale, safer, flexible, non-traditional way of living.`;

const SubLegendSection = () => {
  return (
    <div>
      <LegendCard
        legendImg={'./Images/logo-favicon-2.webp'}
        title={title}
        desc={desc}
        classProps={"text-2xl md:text-6xl font-extralight"}
      />
    </div>
  );
};

export default SubLegendSection;
