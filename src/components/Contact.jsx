import React from "react";
import "../css/Contact.css";

import {
  GithubIcon,
  LinkedinIcon,
  MessageIcon,
  PhoneIcon,
} from "../Icons/Icons";
import "../css/Responsive.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>

        <p className="contact-subtitle">
          Ready to discuss your next project or any job opportunity! I'd love to
          hear from you.
        </p>

        <div className="contact-grid">
          {/* LEFT */}
          <div>
            <h3 className="contact-heading">Get In Touch</h3>

            <div className="contact-info">
              <a href="mailto:eksai0726@gmail.com" className="contact-item">
                <MessageIcon className="contact-icon" />
                stan.ionut.raul@gmail.com
              </a>

              <a
                href="https://github.com/stanionutraul"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <GithubIcon className="contact-icon" />
                stanionutraul
              </a>

              <a
                href="https://www.linkedin.com/in/stan-ionut-5671b8331/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <LinkedinIcon className="contact-icon" />
                Connect with me
              </a>

              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                0755-539-716
              </div>
            </div>
          </div>

          {/* RIGHT */}
          {/* <div>
            <h3 className="contact-heading">Send Message</h3>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows={4} />

              <button type="submit">Send Message</button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
