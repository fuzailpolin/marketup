import React from "react";
import "./title.css";

const Title = ({ title, titleHighlight }) => {
  return (
    <p className={"section-title"}>
      {title}
      <span className="section-title-highlight">{titleHighlight}</span>
    </p>
  );
};

export default Title;
