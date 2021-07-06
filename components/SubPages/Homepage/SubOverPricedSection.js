import React from "react";
import { LegendCard } from "../../";
const title = "AVOID OVERPRICED HOTELS AND OPTIMIZE YOUR STAY AT ASLTHINC.";
const desc = `ASLTLHinc, relies on available, affordable homes, participating landlords or property owners and shelter referrals to keep our beds full.`;

const SubOverPricedSection = () => {
  return (
    <div>
      <LegendCard
        legendImg={'./Images/logo-favicon-2.webp'}
        title={title}
        desc={desc}
        classProps={"text-xl md:text-3xl font-semibold"}
      />
    </div>
  );
};

export default SubOverPricedSection;
