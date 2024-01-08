import React from "react";
import "../styles/Portfolio.scss";
import PortfolioList from "./PortfolioList";

function Portfolio(props) {

  return (
  <PortfolioList projectObject={props.projectObject}/>
  );
}

export default Portfolio;