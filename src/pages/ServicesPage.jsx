import React from "react";
import frontendImg from "../images/frontend.png";
import backendImg from "../images/backend.png";
import fullstackImg from "../images/fullstack.png";

import ServiceBox from "../components/Sevices/ServiceBox";

const ServicesPage = ({ setCursorVariant }) => {
  const btnEnter = () => setCursorVariant("btnHover");
  const leave = () => setCursorVariant("default");

  return (
    <section className="services" id="services">
      <div className="services__heading">
        <h2>My Services</h2>
        <h1>What I offer you</h1>
      </div>
      <div className="services__boxes">
        <ServiceBox
          img={frontendImg}
          heading="Front-End Development"
          subheading={
            "Crafting engaging user interfaces for seamless and interactive website experiences, from responsive designs to dynamic elements."
          }
        />
        <ServiceBox
          img={backendImg}
          heading="Backend Development"
          subheading={
            "Building robust server-side solutions for efficient and scalable web applications."
          }
        />
        <ServiceBox
          img={fullstackImg}
          heading="Fullstack Development"
          subheading={
            "Crafting end-to-end web solutions, seamlessly integrating frontend and backend for a comprehensive user experience."
          }
        />
      </div>
      <a
        className="services__btn"
        onMouseEnter={btnEnter}
        onMouseLeave={leave}
        href="#contact"
      >
        Let's Talk
      </a>
    </section>
  );
};

export default ServicesPage;
