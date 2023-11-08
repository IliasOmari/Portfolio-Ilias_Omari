import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./projectinfo-modules.css";

const Castle = () => {
  return (
    <>
      <Navbar />
      <div className="project-info">
        <div className="video">
          <iframe
            id="video"
            src="https://www.youtube.com/embed/i62xY6Ypfxs?&autoplay=1"
          ></iframe>
        </div>

        <div className="project-info-text">
          <div className="info-text">
            <p>
              {" "}
              For this project we had to do some shots with our drone on a
              theme. We chose to shoot on the theme of castles.
              <br /> <br />
              To do this we went to Gaasbeek Castle. We filmed the castle and
              its surroundings. Enjoy!
            </p>
          </div>
        </div>
      </div>
      <div className="button-redirect">
        <Link to={"/projects"}>
          <button className="backbutton">Back to projects</button>
        </Link>
      </div>
    </>
  );
};

export default Castle;
