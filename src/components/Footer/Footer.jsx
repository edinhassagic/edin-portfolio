import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/edin-hasagic-512729200/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsLinkedin />{" "}
        </a>
        <a
          href="https://github.com/edinhassagic?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaGithub />{" "}
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Edin Hasagic - All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
