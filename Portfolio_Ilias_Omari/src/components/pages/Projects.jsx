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
import Quiz from "../../assets/quiz.png";
import Animations from "../../assets/animation.png";
import ThreeD from "../../assets/3d.png";
import Login from "../../assets/login.png";

const projects = [
  {
    id: "NFT",
    title: "NFT Universe",
    img: NftUniverse,
    subtitle: "School project",
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
    link: "https://xd.adobe.com/view/f71a3ccb-5b6f-44b1-98b1-68340019a25c-a249/",
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
    subtitle: "School project",
    categorie: "Motion graphics",
    link: "/projects/history-of-money",
  },

  {
    id: "CASTLE",
    title: "Castle of Gaasbeek",
    img: Kasteel,
    subtitle: "School project",
    categorie: "Drones & Motion ",
    link: "/projects/castel-of-gaasbeek",
  },

  {
    id: "PROTOTYPE1",
    title: "Quiz App",
    img: Quiz,
    subtitle: "Expert Lab",
    categorie: "Front-end",
    link: "https://pop-art.onrender.com/project/pop-art",
  },

  {
    id: "PROTOTYPE2",
    title: "Animations",
    img: Animations,
    subtitle: "Expert Lab",
    categorie: "Front-end",
    link: "/projects/animations",
  },

  {
    id: "PROTOTYPE3",
    title: "3D Models",
    img: ThreeD,
    subtitle: "Expert lab",
    categorie: "Front-end ",
    link: "https://pop-art.onrender.com/project/pop-art",
  },

  {
    id: "PROTOTYPE4",
    title: "Login System",
    img: Login,
    subtitle: "Expert Lab",
    categorie: "Front-end & Back-end ",
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
          <div id={el.id} key={index}>
            <Card {...el} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
