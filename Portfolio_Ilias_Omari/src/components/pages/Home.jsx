import Navbar from "../Navbar";
import scroll from "../../assets/scroll.png";
import "./home-modules.css";
import Me from "../../assets/me.png";
import { useRef } from "react";

const Home = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="presentation">
        <div className="ilias-image">
          <div className="ilias">
            <div className="image">
              <img src={Me} />
            </div>
          </div>
        </div>
        <div className="ilias-name">
          <h1>Ilias Omari</h1>
        </div>
        <button onClick={handleClick} className="scroll">
          <h2>About Me</h2>
          <img className="scroll-img" src={scroll} alt="scroll button" />
        </button>
      </div>

      <div className="presentation-text">
        <div className="ilias-about">
          <div ref={ref} className="context">
            <div className="about-text">
              <p>
                Welcome to my portfolio! I{"'"}m Ilias, a Multimedia and
                Creative Technologies student, specializing in UX/UI design and
                development.
                <br /> <br />
                Inside my portfolio, I invite you to explore my passion for
                crafting seamless, visually stunning digital experiences. Let
                {"'"}s collaborate and bring your digital dreams to life.
              </p>
            </div>
            <button className="download">Download my CV</button>
          </div>
        </div>

        <div className="welcome-text">
          <h1>Hi 👋🏻, I am </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
