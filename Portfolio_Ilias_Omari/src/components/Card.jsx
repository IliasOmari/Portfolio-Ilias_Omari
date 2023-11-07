/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./pages/projects-modules.css";

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
          <Link to={props.link} target="_blank">
            <button>Discover</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
