import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MessageIcon,
  FileIcon,
} from "../Icons/Icons";
import "../css/Hero.css";
import "../css/Responsive.css";
// import myResume from "../assets/StanIonut-CV.pdf";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Decorative blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="hero-content">
        <h1 className="hero-title">Stan Ionut Raul</h1>
        <p className="hero-subtitle">
          Front-End developer building modern, responsive web applications with
          React and JavaScript. Focused on clean code, user experience, and
          growing into full-stack development.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-outline">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline flex-center">
            <MessageIcon className="icon-small-hero" />
            Let's Talk
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/stanionutraul"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <GithubIcon className="icon-small" />
          </a>
          <a
            href="https://www.linkedin.com/in/stan-ionut-5671b8331/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <LinkedinIcon className="icon-small" />
          </a>
          <a href="/resume.pdf" target="_blank" className="resume-link">
            <FileIcon className="icon-small" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
