import Navbar from "../Navbar";
import "./skills-modules.css";
import "./contact-modules.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Contact</h1>
      </div>

      <div className="form">
        <div className="form_area">
          <form action="">
            <div className="form_group">
              <label className="sub_title">Name</label>
              <input type="text" className="form_style" id="name" />
            </div>

            <div className="form_group">
              <label className="sub_title">Email</label>
              <input type="email" className="form_style" id="email" />
            </div>
            <div className="form_group">
              <label className="sub_title">Message</label>
              <input type="text" className="form_style-message" id="text" />
            </div>
            <div className="form-button">
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
