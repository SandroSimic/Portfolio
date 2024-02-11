import React from "react";
import aboutMeImage from "../images/MeImage.jpg";
import css from "../images/CSS3.png";
import express from "../images/Express Js.png";
import html from "../images/Html 5.png";
import javascript from "../images/JavaScript.png";
import mongodb from "../images/MongoDB.png";
import react from "../images/React.png";
import Nodejs from "../images/Nodejs.png";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const AboutMePage = ({ setCursorVariant }) => {
  const btnEnter = () => setCursorVariant("btnHover");
  const leave = () => setCursorVariant("default");

  return (
    <section className="aboutMe" id="aboutMe">
      <Tooltip id="my-tooltip" style={{ fontSize: "1.6rem" }} />
      <div className="aboutMe__image">
        <img src={aboutMeImage} alt="A picture of me" />
      </div>
      <div className="aboutMe__text">
        <div className="aboutMe__title">
          <h1>About me</h1>
          <span>Develop solutions you need</span>
        </div>
        <p className="aboutMe__description">
          Hey, I'm Sandro, a web developer dedicated to delivering top-notch
          results.
          <br />
          I thrive on tackling challenges, learn fast, and get the job done
          efficiently.
          <br />
          Organized and motivated, I exceed deadlines.
          <br />
          Whether in a team or solo, let's create something awesome together!
        </p>

        <div className="aboutMe__skills">
          <h3>My Skills:</h3>
          <div className="aboutMe__skills__skill">
            <img
              src={html}
              alt="html"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="HTML"
            />
            <img
              src={css}
              alt="css"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="CSS"
            />
            <img
              src={javascript}
              alt="javascript"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="JavaScript"
            />
            <img
              src={react}
              alt="react"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="React"
            />
            <img
              src={Nodejs}
              alt="nodejs"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="NodeJS"
            />
            <img
              src={express}
              alt="express"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Express"
            />
            <img
              src={mongodb}
              alt="mongodb"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="MongoDB"
            />
          </div>
        </div>

        <a
          className="aboutMe__btn"
          onMouseEnter={btnEnter}
          onMouseLeave={leave}
          href="#contact"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default AboutMePage;
