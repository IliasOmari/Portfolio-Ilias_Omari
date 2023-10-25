import Navbar from "../Navbar";
import buttons from "../../assets/buttons.png";
// import scroll from "../../assets/scroll.png";
import "./home-modules.css";
import Me from "../../assets/ilias-remove.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="presentation">
        <div className="ilias-image">
          <div className="buttons">
            <img src={buttons} alt="Buttons" />
          </div>
          <div className="ilias">
            <div className="image">
              <img src={Me} />
            </div>
          </div>
        </div>
        <div className="ilias-name">
          <h1>Ilias Omari</h1>
        </div>
        {/* <button className="scroll">
          <img className="scroll-img" src={scroll} alt="scroll button" />
        </button> */}
      </div>

      <div className="ilias-about">
        <div className="buttons-cv">
          <img src={buttons} alt="Buttons" />
        </div>
        <div className="context">
          <div className="about-text">
            <br /> <br />
            <p>
              Welcome to my portfolio! I'm Ilias, a Multimedia and Creative
              Technologies student, specializing in UX/UI design and
              development.
              <br /> <br />
              Inside my portfolio, I invite you to explore my passion for
              crafting seamless, visually stunning digital experiences. Let's
              collaborate and bring your digital dreams to life.
            </p>
          </div>
          <button className="download">Download my CV</button>
        </div>
      </div>

      <div className="welcome-text">
        <h1>Hi 👋🏻, I am </h1>
      </div>
    </>
  );
};

export default Home;
