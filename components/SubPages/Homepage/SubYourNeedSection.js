import React from "react";
import { LegendCard } from "../../";
const title = "EVERYTHING YOU NEED IS HERE";
const desc = `ASLTHinc. offers a rare, yet high demand new housing system. No credit & criminal checks or extensive application process. Our no hassle, convenient online booking clearly states our no tolerance policy & we're committed to eliminate homelessness.`;

const SubYourNeedSection = () => {
  return (
    <div>
      <LegendCard
        legendImg={'/Images/logo-favicon-2.webp'}
        title={title}
        desc={desc}
        classProps={"text-xl md:text-3xl font-semibold"}
      />
    </div>
  );
};

export default SubYourNeedSection;
