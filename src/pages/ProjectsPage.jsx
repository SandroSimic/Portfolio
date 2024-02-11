import React from "react";
import employify from "../images/employify.png";
import rently from "../images/rently.png";
import finsy from "../images/finsy.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsPage = ({ setCursorVariant }) => {
  const leave = () => setCursorVariant("default");
  const smallCircle = () => setCursorVariant("small");
  return (
    <section className="projects" id="projects">
      <div className="projects__heading">
        <h1>Projects</h1>
        <p>
          <span>Note: </span>projects may take a bit to load because of the
          hosting website
        </p>
      </div>

      <div className="projects__projectList">
        <div className="projects__project">
          <div className="projects__project__image">
            <img src={employify} />
          </div>
          <div className="projects__project__info">
            <div className="projects__project__title">
              <h1>Employify</h1>
              <div className="projects__project__actions">
                <div>
                  <a
                    href="https://employify.onrender.com/"
                    target="__blank"
                    onMouseEnter={smallCircle}
                    onMouseLeave={leave}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div>
                  <a
                    onMouseEnter={smallCircle}
                    onMouseLeave={leave}
                    href="https://github.com/SandroSimic/Employify"
                    target="__blank"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__project__text">
              <p className="projects__project__desc">
                This is a fullstack application for job posting’s.
                <br /> User can create his own company and create jobs.
                <br /> A regular employee can apply to jobs by sending his own
                CV.
              </p>
              <p className="projects__project__accounts">
                <span>Demo Accounts:</span>
                <br />
                Employee:
                <br /> email: employee@gmail.com Password: Pass123 <br />
                <br />
                Employer:
                <br />
                email: employerGoogle@gmail.com Password: Pass1234
              </p>
            </div>
          </div>
        </div>
        <div className="projects__project">
          <div className="projects__project__image">
            <img src={rently} />
          </div>
          <div className="projects__project__info">
            <div className="projects__project__title">
              <h1>Rently</h1>
              <div className="projects__project__actions">
                <div>
                  <a
                    href="https://rently-h8vt.onrender.com/"
                    target="__blank"
                    onMouseEnter={smallCircle}
                    onMouseLeave={leave}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div>
                  <a
                    onMouseEnter={smallCircle}
                    onMouseLeave={leave}
                    href="https://github.com/SandroSimic/rent-a-car"
                    target="__blank"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__project__text">
              <p className="projects__project__desc">
                Fullstack application for renting cars has Map functionality
                <br /> that shows cars location. Some features are advance
                filtering, <br />
                CRUD operations and Admin functionality.
              </p>
              <p className="projects__project__accounts">
                <span>Demo Accounts:</span>
                <br />
                Admin:
                <br /> email: admin@gmail.com Password: Pass123 <br />
                <br />
                User:
                <br />
                email: user@gmail.com Password: Pass123
              </p>
            </div>
          </div>
        </div>
        <div className="projects__project">
          <div className="projects__project__image">
            <img src={finsy} />
          </div>
          <div className="projects__project__info">
            <div className="projects__project__title">
              <h1>Finsy</h1>
              <div className="projects__project__actions">
                <div>
                  <a
                    href="https://finsy.onrender.com/"
                    target="__blank"
                    onMouseEnter={smallCircle}
                    onMouseLeave={leave}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div>
                  <a
                    onMouseEnter={smallCircle}
                    onMouseLeave={leave}
                    href="https://github.com/SandroSimic/Finsy"
                    target="__blank"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__project__text">
              <p className="projects__project__desc">
                Finsy is a presentation website for a "Money Managment"
                <br /> company.
                <br /> The main goal for this project was to create a visually
                pleasing <br />
                website.
                <br /> So this website does not have any functionality meaning
                <br />
                buttons don't work and It's not connected to any API or server
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
