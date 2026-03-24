import React from "react";
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  JavaIcon,
  NodeIcon,
} from "../Icons/Icons";
import "../css/Skills.css";

const skills = [
  { name: "HTML5", icon: <HtmlIcon /> },
  { name: "CSS3", icon: <CssIcon /> },
  { name: "JavaScript", icon: <JsIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Java", icon: <JavaIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
