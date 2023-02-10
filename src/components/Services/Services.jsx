import React from "react";
import "./Services.css";
import { FaCheckSquare } from "react-icons/fa";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container service-container">
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <p> Websites.</p>
              <FaCheckSquare className="service-icons" />
            </li>
            <li>
              <p> UI & UX Design.</p>
              <FaCheckSquare className="service-icons" />
            </li>
            <li>
              <p> Web Applications.</p>
              <FaCheckSquare className="service-icons" />
            </li>

            <li>
              <p>Responsive for all devices.</p>
              <FaCheckSquare className="service-icons" />
            </li>

            <li>
              <p> Optimizing the user experience.</p>{" "}
              <FaCheckSquare className="service-icons" />
            </li>
            <li>
              <p>Fixing bugs and testing for usability.</p>{" "}
              <FaCheckSquare className="service-icons" />
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
