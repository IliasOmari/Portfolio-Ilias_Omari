import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar";
import Ilias3d from "../../assets/ilias-3d.png";
import "./skills-modules.css";
import "./contact-modules.css";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    user_msg: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      inputs.user_email == "" ||
      inputs.user_name == "" ||
      inputs.user_msg == ""
    ) {
      return toast.error(" Fill in the mising fields!", {
        duration: 4000,
        position: "top-center",
        style: {
          backgroundColor: "#d43b84",
          color: "white",
        },
        icon: "❌",
      });
    }
    setInputs({ user_name: "", user_email: "", user_msg: "" });

    emailjs
      .sendForm(
        "service_x2yed6t",
        "template_d4dl169",
        form.current,
        "01B5uAmt9V_f-8sbX"
      )
      .then(
        () => {
          toast.success("Message has been successfully sent!", {
            duration: 4000,
            position: "top-center",
            style: {
              backgroundColor: "#ffd310",
              color: "black",
            },
            icon: "😁",
          });
        },
        (error) => {
          toast.success(error.text, {
            duration: 4000,
            position: "top-center",
            style: {
              backgroundColor: "#ffd310",
              color: "black",
            },
          });
        }
      );
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <div className="title">
        <h1>Contact</h1>
      </div>

      <div className="contact">
        <motion.div
          className="form"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="form_area">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form_group">
                <label className="sub_title">Name</label>
                <input
                  type="text"
                  className="form_style"
                  id="name"
                  name="user_name"
                  value={inputs.user_name}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="form_group">
                <label className="sub_title">Email</label>
                <input
                  type="email"
                  className="form_style"
                  id="email"
                  name="user_email"
                  value={inputs.user_email}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="form_group">
                <label className="sub_title">Message</label>
                <input
                  type="text"
                  className="form_style-message"
                  id="text"
                  name="user_msg"
                  value={inputs.user_msg}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
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
        </motion.div>

        <motion.div
          className="form-image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={Ilias3d} alt="picture of Ilias in 3D" />
        </motion.div>
      </div>
    </>
  );
}
