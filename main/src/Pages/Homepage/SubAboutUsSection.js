import React from "react";
import { Title } from "../../Components";
const crow =
  "https://cdn4.iconfinder.com/data/icons/halloween-avatar-filled/64/halloween_spooky-33-512.png";

const SubAboutUsSection = () => {
  return (
    <div className={"md:w-11/12 mx-auto"}>
      <Title title={"About"} titleHighlight={"Marketupgroup"} />
      <div className={"grid md:grid-cols-2 gap-7 p-10"}>
        <div className={'flex items-center'}>
          <p className={"text-descColor mx-auto md:pl-10"}>
            A digital marketing agency revolving around the understanding of
            local psychology, beliefs and culture. Just like a crow, we
            symbolize transformation and change. We are everywhere and we
            understand your need to up your market through our expertise.
          </p>
        </div>
        <img src={crow} alt="crow" className="w-6/12 mx-auto" />
      </div>
    </div>
  );
};

export default SubAboutUsSection;
