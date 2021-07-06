import React from "react";
import { LegendCard } from "../../";
const title =
  "YOU WILL HAVE A CORNER FROM HEAVEN IN OUR ULTRA LUXURY ROOMS EQUIPPED WITH HIGH STANDARDS";
const desc = `No place in the Metro Atlanta area can you find a more competitive advantage. Like no other, ASLTHinc. provides: sustainable creative, upscale, flexible & affordable shared transitional living.`;

const SubLuxury = () => {
  return (
    <div>
      <LegendCard
        legendImg={'./Images/Logo.png'}
        title={title}
        desc={desc}
        classProps={"text-xl md:text-3xl font-semibold"}
      />
    </div>
  );
};

export default SubLuxury;
