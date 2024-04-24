import "./skills-modules.css";
import Illustrator from "../../assets/adobe-illustrator.svg";
import Photoshop from "../../assets/photoshop.svg";
import Adobe from "../../assets/adobe-xd.svg";
// import Indesign from "../../assets/adobe-indesign.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import Html5 from "../../assets/html.svg";
import Css3 from "../../assets/css.svg";
import Premiere from "../../assets/premiere-pro.svg";
import AfterEffects from "../../assets/after-effects.svg";
import MediaEncoder from "../../assets/media-encoder.svg";

import { motion } from "framer-motion";

import Navbar from "../Navbar";

const Skills = () => {
  return (
    <>
      <Navbar />

      <div className="title">
        <h1>Skills</h1>
      </div>

      <div className="skill-boxes">
        <motion.div
          className="skill-design"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          // viewport={{ once: true }}
        >
          <div className="skill-design-title">
            <h2>Design</h2>
          </div>
          <motion.div
            className="skill-design-logos"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img id="illustrator" src={Illustrator} alt="Adobe Illustrator" />
            <img id="photoshop" src={Photoshop} alt="Adobe Illustrator" />
            <img id="xd" src={Adobe} alt="Adobe XD" />
            <img id="figma" src={Figma} alt="Figma" />
            {/* <img id="indesign" src={Indesign} alt="Indesign" /> */}
          </motion.div>
        </motion.div>

        <motion.div
          className="skill-code"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          // viewport={{ once: true }}
        >
          <div className="skill-code-title">
            <h2>Development</h2>
          </div>
          <motion.div
            className="skill-code-logos"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img id="html" src={Html5} alt="HTML5" />
            <img id="css" src={Css3} alt="CSS3" />
            <img id="javascript" src={Javascript} alt="Javascript" />
            <img id="react" src={ReactJS} alt="ReactJS" />
          </motion.div>
        </motion.div>

        <motion.div
          className="skill-motion"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          // viewport={{ once: true }}
        >
          <div className="skill-motion-title">
            <h2>Motion</h2>
          </div>
          <motion.div
            className="skill-motion-logos"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img id="premiere" src={Premiere} alt="Premiere Pro" />
            <img id="aftereffects" src={AfterEffects} alt="After Effects" />
            <img id="encoder" src={MediaEncoder} alt="Media Encoder" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
