import React from "react";
import "../css/Projects.css";
import { GithubIcon } from "../Icons/Icons";
import QuizImg from "../images/Quiz.png";
import PortfolioImg from "../images/Portofolio.png";
import WeatherImg from "../images/TravelJourney.png";
import "../css/Responsive.css";

const projects = [
  {
    title: "Quiz App",
    description:
      "Interactive quiz platform with scoring, performance tracking, and session persistence.",
    tags: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/stanionutraul/quiz-app-js",
    live: "https://quiz-app-demo2.netlify.app/",
    image: QuizImg,
  },
  {
    title: "Portfolio Site",
    description:
      "Personal portfolio showcasing projects, skills, and experience.",
    tags: ["React", "CSS"],
    github: "https://github.com/stanionutraul/portofolio",
    live: "https://stanportofolio.netlify.app/",
    image: PortfolioImg,
  },
  {
    title: "Travel App",
    description:
      "Travel planner app with trip tracking, live weather, favorites, and notes.",
    tags: ["JavaScript", "MVC", "CSS"],
    github: "https://github.com/stanionutraul/travel-journey-js/",
    live: "https://travel-journey-js.netlify.app/",
    image: WeatherImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn"
                  >
                    🔗 Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn"
                >
                  <GithubIcon className="github-icon" />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
