import React from "react";
import "./About.css";
import MeAbout from "../../img/edin-about.jpg";
import { FaAward } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { BsFolderCheck } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={MeAbout} style={{ width: "100%" }} alt="Myself-about" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about-card">
              <MdOutlineSchool className="about-icon" />
              <h5>Education</h5>
              <small>Bachelor of Software Programing</small>
            </article>
            <article className="about-card">
              <BsFolderCheck className="about-icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            I am a 25-year-old software engineer residing in Kakanj, Bosnia and
            Herzegovina. My passion lies in crafting dynamic websites using
            ReactJS. I specialize in developing websites and web applications
            designed to enhance your business and effectively showcase your
            brand.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
