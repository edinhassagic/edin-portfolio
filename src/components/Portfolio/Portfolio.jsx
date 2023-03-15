import React from "react";
import "./Portfolio.css";
import Boikenlogo from "../../img/logoboiken.png";
import Solxologo from "../../img/solxo-logo.png";
import Serverslogo from "../../img/serverslogo.png";
import ticlogo from "../../img/ticlogo.png";
import nglogo from "../../img/nglogo.png";
import vblogo from "../../img/vblogo.png";
import bnaiclogo from "../../img/bnaic-portfolio.png";
import todologo from "../../img/tic-portfolio.png";
import pinpadlogo from "../../img/pinpad.png";
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
          <h5>Short description: Website for IT company.</h5>
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
          <h5>Short description: Website for IT company.</h5>
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
          <h5>Short description: Links for diffrent servers in the world.</h5>
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
          <h5>
            Short description: The player who succeeds in placing three of their
            marks in a diagonal,horiznotal,or vertical row is the winner. Data
            about names and results is stored.
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
            <img src={bnaiclogo} alt="video browser" />
          </div>
          <h3>BNAIC/BeNeLearn</h3>
          <h5>
            Short description: Website for scientific conferences in Nederland.
          </h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://eha-bnaic.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={todologo} alt="video browser" />
          </div>
          <h3>To-Do List</h3>
          <h5>Short description: You can write and delete your Todos.</h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://eha-todo-list.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={pinpadlogo} alt="video browser" />
          </div>
          <h3>Pin Pad</h3>
          <h5>
            Short description: This is PIN PAD login screen,where you have 3
            attempts to input correct PIN, else screen will lock for 30 seconds.
            After that, PIN PAD will reset your attempts. Correct PIN is set as
            1234.
          </h5>
          <div className="portfolio-item-cta">
            <a
              className="btn btn-primary"
              href="https://eha-pin-pad.netlify.app/"
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
