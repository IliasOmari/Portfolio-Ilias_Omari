import Navbar from "../Navbar";
import buttons from "../../assets/buttons.png";
import scroll from "../../assets/scroll.png";
import "./home-modules.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="ilias-image">
        <div className="buttons">
          <img src={buttons} alt="Buttons" />
        </div>
        <div className="ilias"></div>
      </div>
      <div className="ilias-name">
        <h1>Ilias Omari</h1>
      </div>

      <button className="scroll">
        <img className="scroll-img" src={scroll} alt="scroll button" />
      </button>
    </>
  );
};

export default Home;
