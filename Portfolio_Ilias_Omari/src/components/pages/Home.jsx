import Navbar from "../Navbar";
import buttons from "../../assets/buttons.png";
import scroll from "../../assets/scroll.png";
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
      </div>

      <button className="scroll">
        <img className="scroll-img" src={scroll} alt="scroll button" />
      </button>
    </>
  );
};

export default Home;
