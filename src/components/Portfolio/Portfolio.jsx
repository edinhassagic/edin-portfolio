import React from "react";
import "./Portfolio.css";
import Boikenlogo from "../../img/logoboiken.png";
import Solxologo from "../../img/solxo-logo.png";
import csklogo from "../../img/csk-cover.png";
import ticlogo from "../../img/ticlogo.png";
import nglogo from "../../img/nglogo.png";
import vblogo from "../../img/vblogo.png";
import bnaiclogo from "../../img/bnaic-portfolio.png";
import bloglogo from "../../img/coverblog.png";
import pulsecode from "../../img/pulsecodeportfolio.png";
import grafikporto from "../../img/grafikporto.png"
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
      <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={grafikporto} alt="video browser" />
          </div>
          <h3>Grafik</h3>
          <h5>Website for Grafik.</h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://grafik.ba/"
              target="_blank"
              rel="noreferrer"
            >
              Live site
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={bnaiclogo} alt="video browser" />
          </div>
          <h3>BNAIC/BeNeLearn</h3>
          <h5>Website for scientific conferences in Netherland.</h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://bnaic2023.tudelft.nl/"
              target="_blank"
              rel="noreferrer"
            >
              Live site
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={pulsecode} alt="PulseCode" />
          </div>
          <h3>PulseCode</h3>
          <h5>Website for IT company.</h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://pulse-code.com"
              target="_blank"
              rel="noreferrer"
            >
              Live site
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={csklogo} alt="csklogo" />
          </div>
          <h3>CSK company</h3>
          <h5>Website for IT company.</h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://csk-plan.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Boikenlogo} alt="Boiken company" />
          </div>
          <h3>Boiken company</h3>
          <h5>Website for IT company.</h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://ehaboiken.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={bloglogo} alt="bloglogo" />
          </div>
          <h3>Blog with Hygraph CMS</h3>
          <h5>
            You can add content over content management system.Blog with
            categories,recent posts,related posts,featured posts,author,date and
            comments.
          </h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://eha-graphql.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Solxologo} alt="SolXo company" />
          </div>
          <h3>SolXo company</h3>
          <h5>Website for IT company.</h5>
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
            <img src={vblogo} alt="video browser" />
          </div>
          <h3>Video browser</h3>
          <h5>Search for any kind of Youtube videos.</h5>
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
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={ticlogo} alt="Tic tac toe" />
          </div>
          <h3>Tic tac toe</h3>
          <h5>
            The player who succeeds in placing three of their marks in a
            diagonal,horiznotal,or vertical row is the winner. Data about names
            and results is stored.
          </h5>
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
          <h5>
            This is number guessing game,you need to guess number between 1 and
            20 to win,with 10 attempts.
          </h5>
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
