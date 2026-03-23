import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MessageIcon,
  FileIcon,
} from "../Icons/Icons";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Decorative blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="hero-content">
        <h1 className="hero-title">Stan Ionut Raul</h1>
        <p className="hero-subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          temporibus impedit necessitatibus voluptatibus delectus ullam, amet
          nisi rem blanditiis recusandae suscipit facere aliquam doloremque odit
          repellendus saepe. Placeat, sit atque.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-outline">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline flex-center">
            <MessageIcon className="icon-small" />
            Let's Talk
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/ek-sai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <GithubIcon className="icon-small" />
          </a>
          <a
            href="https://linkedin.com"
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
