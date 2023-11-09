/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./pages/projects-modules.css";
import { motion } from "framer-motion";

const Card = (props) => {
  console.log(props);
  return (
    <div className="project">
      <div className="projectImg">
        <img src={props.img} />
      </div>
      <div className="projectInformation">
        <div className="text">
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
          <br />
          <p className="bold">{props.categorie}</p>
        </div>

        <div className="button">
          <Link to={props.link}>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Discover
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
