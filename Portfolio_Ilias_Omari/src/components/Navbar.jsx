import { useEffect, useState } from "react";
import "./navbar-modules.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo-2.png";

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
        )}
      </div>
    </div>
  );
};

export default Navbar;
