import { Link } from "react-router-dom";
import "./projectinfo-modules.css";
import Navbar from "../Navbar";

const JEF = () => {
  return (
    <>
      <Navbar />
      <div className="project-info">
        <div className="video">
          <iframe id="video" src=""></iframe>
        </div>

        <div className="project-info-text">
          <div className="info-text">
            <p>
              {" "}
              JEF festival is a festival that takes place in Antwerp. The
              problem is that not everyone knows Antwerp and many people will be
              lost there. <br></br> <br></br>
              That{"'"} s why JEF festival asked us to create a web app that
              will guide people coming to the festival by suggesting different
              places to go around the festival. This is a video of the web app.
              Enjoy your viewing!
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

export default JEF;
