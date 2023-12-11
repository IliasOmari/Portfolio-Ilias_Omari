import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Animations = () => {
  return (
    <>
      <Navbar />
      <div className="project-info">
        <div className="video">
          <iframe
            id="video"
            src="https://www.youtube.com/embed/vXs162gJTps?&autoplay=1"
            allowFullScreen
          >
            {" "}
          </iframe>
        </div>

        <div className="project-info-text">
          <div className="info-text">
            <p>
              <br></br>I would like to share my recently completed portfolio
              with you, utilizing Framer Motion for animation. This addition
              brings my work to life, with smooth transitions and dynamic
              elements that engage the viewer.
              <br /> <br /> <br /> I invite you to take a look at the result and
              discover the creative value that the animations bring to my
              project presentation. graphics.
            </p>
          </div>
        </div>
      </div>
      <div className="button-redirect">
        <Link to={"/projects"}>
          <motion.button
            className="backbutton"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Back to projects
          </motion.button>
        </Link>
      </div>
    </>
  );
};

export default Animations;
