import Navbar from "../Navbar";
import "./skills-modules.css";
import NftUniverse from "../../assets/nft-universe.png";
import "./projects-modules.css";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Projects</h1>
      </div>

      <div className="project-cards">
        <div className="project-1">
          <div className="project-1-img">
            <img src={NftUniverse} alt="project of Nft Universe" />
          </div>
          <div className="project-1-title">
            <h2>NFT Universe</h2>
          </div>
          <div className="project-categories">
            <div className="categorie-design">
              <p>Design</p>
            </div>
            <div className="categorie-dev">
              <p>Dev</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
