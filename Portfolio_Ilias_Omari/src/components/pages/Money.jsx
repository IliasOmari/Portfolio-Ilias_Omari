import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./projectinfo-modules.css";
import { motion } from "framer-motion";

const Money = () => {
  return (
    <>
      <Navbar />
      <div className="project-info">
        <div className="video">
          <iframe
            id="video"
            src="https://www.youtube.com/embed/G9ww5N_DiVA?&autoplay=1"
          ></iframe>
        </div>

        <div className="project-info-text">
          <div className="info-text">
            <p>Money</p>
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

export default Money;
