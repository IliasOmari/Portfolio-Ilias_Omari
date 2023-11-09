import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar";
import Ilias3d from "../../assets/ilias-3d.png";
import "./skills-modules.css";
import "./contact-modules.css";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x2yed6t",
        "template_d4dl169",
        form.current,
        "01B5uAmt9V_f-8sbX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Contact</h1>
      </div>

      <div className="contact">
        <div className="form">
          <div className="form_area">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form_group">
                <label className="sub_title">Name</label>
                <input
                  type="text"
                  className="form_style"
                  id="name"
                  name="user_name"
                />
              </div>

              <div className="form_group">
                <label className="sub_title">Email</label>
                <input
                  type="email"
                  className="form_style"
                  id="email"
                  name="user_email"
                />
              </div>
              <div className="form_group">
                <label className="sub_title">Message</label>
                <input
                  type="text"
                  className="form_style-message"
                  id="text"
                  name="message"
                />
              </div>
              <div className="form-button">
                <motion.button
                  className="btn"
                  type="submit"
                  value="Send"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <div className="form-image">
          <img src={Ilias3d} alt="picture of Ilias in 3D" />
        </div>
      </div>
    </>
  );
}
