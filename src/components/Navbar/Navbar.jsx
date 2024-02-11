import { useState } from "react";
import logo from "../../images/logo.png";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ setCursorVariant }) => {
  const enter = () => setCursorVariant("hover");
  const leave = () => setCursorVariant("default");
  const smallCircle = () => setCursorVariant("small");
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  const handleResponsiveClick = () => {
    setIsResponsiveOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsResponsiveOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="my logo" />
      </div>
      <nav
        className={`header__navigation ${isResponsiveOpen ? "responsive" : ""}`}
      >
        <ul
          className={`header__navigation__list ${
            isResponsiveOpen ? "show" : ""
          }`}
        >
          <li onMouseEnter={enter} onMouseLeave={leave}>
            <a href="#aboutMe" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li onMouseEnter={enter} onMouseLeave={leave}>
            <a href="#services" onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li onMouseEnter={enter} onMouseLeave={leave}>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li onMouseEnter={enter} onMouseLeave={leave}>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`header__socials ${
          isResponsiveOpen ? "responsive-socials" : ""
        }`}
      >
        <a href="https://www.instagram.com/code_with_sandro/" target="_blank">
          <FaInstagram
            className="link"
            onMouseEnter={smallCircle}
            onMouseLeave={leave}
          />
        </a>
        <a href="https://github.com/SandroSimic" target="_blank">
          <FaGithub
            className="link"
            onMouseEnter={smallCircle}
            onMouseLeave={leave}
            onClick={() => console.log("gihub")}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sandro-simic-b25222250/"
          target="_blank"
        >
          <FaLinkedin
            className="link"
            onMouseEnter={smallCircle}
            onMouseLeave={leave}
            onClick={() => console.log("linkedin")}
          />
        </a>
        <a href="https://twitter.com/sandro_sim386" target="_blank">
          <FaTwitter
            className="link"
            onMouseEnter={smallCircle}
            onMouseLeave={leave}
            onClick={() => console.log("twitter")}
          />
        </a>
      </div>

      <div
        className={`header__hamburger ${isResponsiveOpen ? "active" : ""}`}
        onClick={handleResponsiveClick}
      >
        <span className={`line ${isResponsiveOpen ? "line1" : ""}`}></span>
        <span className={`line ${isResponsiveOpen ? "line2" : ""}`}></span>
        <span className={`line ${isResponsiveOpen ? "line3" : ""}`}></span>
      </div>
    </header>
  );
};

export default Navbar;
