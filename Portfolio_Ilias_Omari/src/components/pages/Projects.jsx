import Navbar from "../Navbar";
import "./skills-modules.css";

import "./projects-modules.css";
import Card from "../Card";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Projects</h1>
      </div>

      <div className="project-cards">
        <Card />
      </div>
    </>
  );
};

export default Projects;
