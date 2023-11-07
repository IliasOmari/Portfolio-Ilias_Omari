import Navbar from "../Navbar";
import "./skills-modules.css";
import "./projects-modules.css";
import Card from "../Card";
import NftUniverse from "../../assets/nft-universe.png";

const projects = [
  {
    title: "NFT Universe",
    img: NftUniverse,
    categorie: "Design & Development",
    link: "https://ehb-mct.github.io/web-2-frontend-22-23-IliasOmari/dist/index.html",
  },

  {
    title: "Multipharma",
    img: NftUniverse,
    categorie: "Design UX/UI",
    link: "https://xd.adobe.com/view/4e2ffad9-b0bc-4a22-8a0f-9ae144c5baf8-1b7c/",
  },

  {
    title: "JEF Festival",
    img: NftUniverse,
    categorie: "Design UX/UI",
    link: "https://xd.adobe.com/view/4e2ffad9-b0bc-4a22-8a0f-9ae144c5baf8-1b7c/",
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
