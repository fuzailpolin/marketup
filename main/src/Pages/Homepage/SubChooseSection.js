import React from "react";
import { Title } from "../../Components";

const SubChooseSection = () => {
  return (
    <div className={"w-screen md:w-11/12 mx-auto"}>
      <Title title={"Why Should"} titleHighlight={"You Choose Us?"} />
      <div className={"grid md:grid-cols-1 gap-7 p-10 align-middle"}>
        <p className={"text-descColor mx-auto"}>
          We thrive when we have permission to find the best solutions for the
          brief, without predefined limitations. Having the brief, Research team
          does the research and provides data and other necessary statistics
          needed. Strategy team develops the marketing strategy. Then a
          brainstorming session of strategy and creative team find out the
          solution for the problem. After that, creative team starts working on
          the creative strategy and development of creative tools. While it’s
          approved from client, we go for the execution. Our in-house and out
          sourcing vendors are prompt in delivering all the things before the
          final deadline
        </p>
      </div>
    </div>
  );
};

export default SubChooseSection;
