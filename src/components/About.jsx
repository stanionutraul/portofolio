import React from "react";
import { GraduationCapIcon } from "../Icons/Icons.jsx";
import "../css/About.css";
import "../css/Responsive.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <p className="about-text">
            Computer Science graduate focused on front-end development and
            building modern, user-friendly web applications. I enjoy
            transforming ideas into clean and interactive interfaces using React
            and JavaScript. I have experience working with modular architectures
            like MVC, integrating REST APIs, and developing responsive
            applications that adapt across devices. My projects reflect a strong
            focus on code structure, reusability, and user experience.
            Currently, I’m expanding my skills towards full-stack development
            while continuing to refine my frontend expertise.
          </p>

          <div className="about-card">
            <div className="about-card-header">
              <GraduationCapIcon className="icon-small primary" />
              <h3>Education</h3>
            </div>

            <p className="about-degree">Matematică-Informatică</p>
            <p className="about-university">Universitatea Babeș-Bolyai (UBB)</p>
            {/* <p className="about-description">
              
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
