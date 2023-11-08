import Navbar from "../Navbar";
import "./skills-modules.css";
import "./projects-modules.css";
import Card from "../Card";
import NftUniverse from "../../assets/nft-universe.png";
import MultiPahrma from "../../assets/multipharma.jpg";
import JEF from "../../assets/JEF.jpg";
import PopArt from "../../assets/popart.png";
import Motion from "../../assets/motion.png";
import Kasteel from "../../assets/kasteel.png";

const projects = [
  {
    id: "NFT",
    title: "NFT Universe",
    img: NftUniverse,
    subtitle: "personal project",
    categorie: "Design & Development",
    link: "https://ehb-mct.github.io/web-2-frontend-22-23-IliasOmari/dist/index.html",
  },

  {
    id: "MLT",
    title: "Multipharma",
    img: MultiPahrma,
    subtitle: "Collab with In The Pocket",
    categorie: "Design UX/UI",
    link: "https://xd.adobe.com/view/4e2ffad9-b0bc-4a22-8a0f-9ae144c5baf8-1b7c/",
  },

  {
    id: "JEF",

    title: "JEF Festival",
    img: JEF,
    subtitle: "Collab with JEF Festival",
    categorie: "Design UX/UI",
    link: "/projects/jef-festival",
  },

  {
    id: "POP",
    title: "Pop-Art",
    img: PopArt,
    subtitle: "personal project",
    categorie: "Design & Development",
    link: "https://pop-art.onrender.com/project/pop-art",
  },

  {
    id: "MONEY",
    title: "The history of money",
    img: Motion,
    subtitle: "personal project",
    categorie: "Motion graphics",
    link: "/projects/history-of-money",
  },

  {
    id: "CASTLE",
    title: "Castle of Gaasbeek",
    img: Kasteel,
    subtitle: "personal project",
    categorie: "Drones & Motion graphics",
    link: "/projects/castel-of-gaasbeek",
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
          <div id={el.id} key={index}>
            <Card {...el} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
