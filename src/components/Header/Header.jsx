import React from "react";
import "./Header.css";
import HButtons from "./HButtons";
import ME from "../../img/edincover-removebg-preview.png"
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Edin Hasagic</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <HButtons />
        <HeaderSocials />
        <div className="edin">
          <img  src={ME} alt="Myself" />
        </div>
       <a href="#contact" className="scroll-down">Scroll down</a>
      </div>
    </header>
  );
};

export default Header;
