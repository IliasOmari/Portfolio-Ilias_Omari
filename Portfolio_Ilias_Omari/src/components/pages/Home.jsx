import Navbar from "../Navbar";
import scroll from "../../assets/scroll.png";
import "./home-modules.css";
import Me from "../../assets/me.png";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="bottom">
          <img src={logo} alt="" />
        </div>
      ) : (
        <>
          <Navbar />

          <div className="presentation">
            <motion.div
              className="ilias-image"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              viewport={{ once: true }}
              drag
              dragConstraints={{
                top: -5,
                left: -5,
                right: 5,
                bottom: 5,
              }}
            >
              <div className="ilias">
                <div className="image">
                  <img src={Me} />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="ilias-name"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              viewport={{ once: true }}
              drag
              dragConstraints={{
                top: -5,
                left: -5,
                right: 5,
                bottom: 5,
              }}
            >
              <h1>Ilias Omari</h1>
            </motion.div>

            <motion.button
              onClick={handleClick}
              className="scroll"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <h2>About Me</h2>
              <img className="scroll-img" src={scroll} alt="scroll button" />
            </motion.button>
          </div>

          <div className="presentation-text">
            <motion.div
              className="ilias-about"
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              // viewport={{ once: true }}
            >
              <div ref={ref} className="context">
                <div className="about-text">
                  <div className="br">
                    <br />
                    <br />
                  </div>

                  <p>
                    Welcome to my portfolio! I{"'"}m Ilias, a Multimedia and
                    Creative Technologies student, specializing in UX/UI design
                    and development.
                    <br /> <br />
                    Inside my portfolio, I invite you to explore my passion for
                    crafting seamless, visually stunning digital experiences.
                    Let
                    {"'"}s collaborate and bring your digital dreams to life.
                  </p>
                </div>

                <Link to={`https://ilias-omari-cv.tiiny.site/`} target="_blank">
                  <motion.button
                    className="download"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Download my CV
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <div className="welcome-text">
              <h1 style={{ display: "flex", gap: "20px" }}>
                👋🏻
                <Typewriter
                  options={{
                    strings: [`Hello There !`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
