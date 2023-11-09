import { useEffect, useState } from "react";
import "./navbar-modules.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../assets/logo-2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={Nav} alt="Logo" />
      </div>

      <div className="hamburger-menu">
        <div
          className={`hamburger-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {isOpen && (
          <div className="menu" data-aos="fade-right">
            <ul>
              <Link to={"/"}>
                <p id="home-button">Home</p>
              </Link>
              <Link to={"/skills"}>
                <p id="skills-button">Skills</p>
              </Link>
              <Link to={"/projects"}>
                <p id="projects-button">Projects</p>
              </Link>

              <Link to={"/contact"}>
                <p id="contact-button">Contact</p>
              </Link>
            </ul>
          </div>
        )}
      </div>

      <div className="navigation">
        <ul>
          <Link to={"/"}>
            <p id="home-button-desktop">Home</p>
          </Link>
          <Link to={"/skills"}>
            <p id="skills-button-desktop">Skills</p>
          </Link>
          <Link to={"/projects"}>
            <p id="projects-button-desktop">Projects</p>
          </Link>

          <Link to={"/contact"}>
            <p id="contact-button-desktop">Contact</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
