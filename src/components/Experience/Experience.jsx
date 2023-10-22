import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My experience</h2>
      <div className="container exp-container">
        {/* --------------------------------------------------FRONTEND START--------------------------------------------------- */}
        <div className="exp-frontend">
          <h3>Front-end Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                {" "}
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                {" "}
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                <h4>Webflow</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                <h4>WordPress</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* --------------------------------------------------BACKEND START--------------------------------------------------- */}
        <div className="exp-backend">
          <h3>Back-end Development & Other</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Fundamental</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Fundamental</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                {" "}
                <h4>IVR</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icons" />
              <div>
                {" "}
                <h4>Linux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
