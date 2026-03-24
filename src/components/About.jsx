import React from "react";
import { GraduationCapIcon } from "../Icons/Icons.jsx";
import "../css/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <p className="about-text">
            AI/ML Engineer with more than three years of experience building
            production-ready machine learning and agentic AI systems. Skilled in
            designing scalable pipelines on AWS with SageMaker, MLflow, and
            Spark. Strong background in API design, automation, and MLOps
            practices that keep workflows reproducible and reliable. Experienced
            in model explainability with SHAP and LIME and in tuning models for
            fast, real-time predictions in production.
          </p>

          <div className="about-card">
            <div className="about-card-header">
              <GraduationCapIcon className="icon-small primary" />
              <h3>Education</h3>
            </div>

            <p className="about-degree">Matematică-Informatică</p>
            <p className="about-university">Universitatea Babeș-Bolyai (UBB)</p>
            <p className="about-description">
              Focus pe algoritmică, structuri de date, machine learning și
              sisteme software scalabile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
