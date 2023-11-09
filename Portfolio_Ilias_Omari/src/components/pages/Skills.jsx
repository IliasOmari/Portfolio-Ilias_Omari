import "./skills-modules.css";
import Illustrator from "../../assets/adobe-illustrator.svg";
import Photoshop from "../../assets/photoshop.svg";
import Adobe from "../../assets/adobe-xd.svg";
import Indesign from "../../assets/adobe-indesign.svg";
import Javascript from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import Kotlin from "../../assets/kotlin.svg";
import Premiere from "../../assets/premiere-pro.svg";
import AfterEffects from "../../assets/after-effects.svg";
import MediaEncoder from "../../assets/media-encoder.svg";
import VueJS from "../../assets/vuejs.svg";
// import { motion } from "framer-motion";

import Navbar from "../Navbar";

const Skills = () => {
  return (
    <>
      <Navbar />

      <div className="title">
        <h1>Skills</h1>
      </div>

      <div className="skill-boxes">
        <div className="skill-design">
          <div className="skill-design-title">
            <h2>Design</h2>
          </div>
          <div className="skill-design-logos">
            <img id="illustrator" src={Illustrator} alt="Adobe Illustrator" />
            <img id="photoshop" src={Photoshop} alt="Adobe Illustrator" />
            <img id= "xd"  src={Adobe} alt="Adobe XD" />
            <img id= "indesign"  src={Indesign} alt="Indesign" />
          </div>
        </div>

        <div className="skill-code">
          <div className="skill-code-title">
            <h2>Development</h2>
          </div>
          <div className="skill-code-logos">
            <img id= "javascript" src={Javascript} alt="Javascript" />
            <img id= "react" src={ReactJS} alt="ReactJS" />
            <img id= "kotlin" src={Kotlin} alt="Kotlin" />
            <img id= "vue" src={VueJS} alt="VueJS" />
          </div>
        </div>

        <div className="skill-motion">
          <div className="skill-motion-title">
            <h2>Motion</h2>
          </div>
          <div className="skill-motion-logos">
            <img id= "premiere" src={Premiere} alt="Premiere Pro" />
            <img id= "aftereffects"  src={AfterEffects} alt="After Effects" />
            <img id= "encoder"  src={MediaEncoder} alt="Media Encoder" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
