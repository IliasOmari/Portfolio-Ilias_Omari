import { useEffect, useState } from "react";
import "./navbar-modules.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo-2.png";
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
        <img src={logo} alt="Logo" />
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
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to={"/skills"}>
                <li>
                  <a>Skills</a>
                </li>
              </Link>
              <Link to={"/projects"}>
                <li>
                  <a>Projects</a>
                </li>
              </Link>

              <Link to={"/contact"}>
                <li id="contact-button">
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li id="contact-button">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
