import React from "react";
import "./Portfolio.css";
import Boikenlogo from "../../img/logoboiken.png";
import Solxologo from "../../img/solxo-logo.png";
import Serverslogo from "../../img/serverslogo.png";
import ticlogo from "../../img/ticlogo.png";
import nglogo from "../../img/nglogo.png";
import vblogo from "../../img/vblogo.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Boikenlogo} alt="Boiken company" />
          </div>
          <h3>Boiken company</h3>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://boiken.ba/"
              target="_blank"
              rel="noreferrer"
            >
              Live site
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Solxologo} alt="SolXo company" />
          </div>
          <h3>SolXo company</h3>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://ehasolxo.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Serverslogo} alt="Serverslogo" />
          </div>
          <h3>Servers on World map</h3>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://ehaworldmaps.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={ticlogo} alt="Tic tac toe" />
          </div>
          <h3>Tic tac toe</h3>
          <p style={{ fontSize: "12px", paddingBottom: "5px" }}>
            Note: project is not responsive{" "}
          </p>
          <div className="portfolio-item-cta">
            {" "}
            <a
              className="btn btn-primary"
              href="https://ehatictactoe.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={nglogo} alt="number guessing game" />
          </div>
          <h3>Number guessing game</h3>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://ehanumber-guessing-game.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={vblogo} alt="video browser" />
          </div>
          <h3>Video browser</h3>
          <p style={{ fontSize: "12px", paddingBottom: "5px" }}>
            Note: project is not responsive{" "}
          </p>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://ehavideo-browser.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
      <div className="notice">
        <h2>Important notice</h2>
        <h5>
          Given the fact that I am contract tied with the company and Paragon
          program organizers about the secrecy of projects completed, they must
          remain <strong style={{ color: "#4db6ff" }}>private</strong> on my{" "}
          <strong style={{ color: "#4db6ff" }}>GitHub account.</strong> On
          request, I can add you as a collaborator on a few of them.
        </h5>
      </div>
    </section>
  );
};

export default Portfolio;
