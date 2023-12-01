import React from "react";
import CV from "../../img/EdinHasagic-CV.pdf"
const HButtons = () => {
  return (
    <div className="HButtons">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        Let's Talk
      </a>
    </div>
  );
};

export default HButtons;
