import Navbar from "../Navbar";
import buttons from "../../assets/buttons.png";
import "./home-modules.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="ilias-image">
        <div className="buttons">
          <img src={buttons} alt="Buttons" />
        </div>
        <div className="ilias">
<img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
