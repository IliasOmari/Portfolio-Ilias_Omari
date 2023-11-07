import Navbar from "../Navbar";
import "./skills-modules.css";
import "./projects-modules.css";
import Card from "../Card";
import NftUniverse from "../../assets/nft-universe.png";
import MultiPahrma from "../../assets/multipharma.jpg";
import JEF from "../../assets/JEF.jpg";
import PopArt from "../../assets/popart.png";

const projects = [
  {
    title: "NFT Universe",
    img: NftUniverse,
    subtitle: "personal project",
    categorie: "Design & Development",
    link: "https://ehb-mct.github.io/web-2-frontend-22-23-IliasOmari/dist/index.html",
  },

  {
    title: "Multipharma",
    img: MultiPahrma,
    subtitle: "Collab with In The Pocket",
    categorie: "Design UX/UI",
    link: "https://xd.adobe.com/view/4e2ffad9-b0bc-4a22-8a0f-9ae144c5baf8-1b7c/",
  },

  {
    title: "JEF Festival",
    img: JEF,
    subtitle: "Collab with JEF Festival",
    categorie: "Design UX/UI",
    link: "https://xd.adobe.com/view/f71a3ccb-5b6f-44b1-98b1-68340019a25c-a249/",
  },

  {
    title: "Pop-Art",
    img: PopArt,
    subtitle: "personal project",
    categorie: "Design & Development",
    link: "https://pop-art.onrender.com/project/pop-art",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Projects</h1>
      </div>

      <div className="project-cards">
        {projects.map((el, index) => (
          <div key={index}>
            <Card {...el} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
