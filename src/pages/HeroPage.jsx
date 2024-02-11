import React from "react";
import { motion } from "framer-motion";
import heroImage from "../images/heroImage.png";

const HeroPage = ({ setCursorVariant }) => {
  const enter = () => setCursorVariant("hover");
  const btnEnter = () => setCursorVariant("btnHover");
  const leave = () => setCursorVariant("default");

  const textVariant = {
    initial: {
      opacity: 0,
      x: -256,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: { duration: 1 },
  };

  const buttonVariant = {
    initial: {
      opacity: 0,
      x: -256,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 1.5,
    },
  };

  const imageVariant = {
    initial: {
      opacity: 0,
      x: 256,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: { duration: 1 },
  };

  return (
    <section className="hero">
      <div className="hero__text">
        <motion.h1
          className="hero__text__heading"
          initial={textVariant.initial}
          animate={textVariant.animate}
          transition={textVariant.transition}
        >
          Building modern <br /> websites to impact <br />{" "}
          <span onMouseEnter={enter} onMouseLeave={leave}>
            your online presence.
          </span>
        </motion.h1>
        <motion.p
          className="hero__text__subheading"
          initial={textVariant.initial}
          animate={textVariant.animate}
          transition={{ ...textVariant.transition, duration: 1.5, delay: 0.75 }}
        >
          <span>I'm a Web developer</span> I specialize in frontend and backend
          development <br />
          by creating high quality websites that{" "}
          <span>massively impact you online presence!</span>
        </motion.p>
        <motion.a
          href="#contact"
          className="hero__btn"
          onMouseEnter={btnEnter}
          onMouseLeave={leave}
          initial={buttonVariant.initial}
          animate={buttonVariant.animate}
          transition={buttonVariant.transition}
        >
          Connect with me
        </motion.a>
      </div>
      <motion.div
        className="hero__image"
        initial={imageVariant.initial}
        animate={imageVariant.animate}
        transition={imageVariant.transition}
      >
        <img src={heroImage} alt="hero image" />
      </motion.div>
    </section>
  );
};

export default HeroPage;
