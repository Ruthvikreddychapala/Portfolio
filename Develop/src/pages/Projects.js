import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="project">
        <h3>Named Entity Recognition on Job Descriptions</h3>
        <p>Utilizes machine learning models and natural language processing techniques to extract relevant information from resumes.</p>
        <a
          href="https://github.com/YajatKumar2/NER-on-job-decriptions.git"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>

      <div className="project">
        <h3>Fraud Detection System</h3>
        <p>ML-based system to detect fraudulent transactions.</p>
        <a
          href="https://github.com/sreekruthy/fraud_detection.git"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>

      <div className="project">
        <h3>Food Delivery App</h3>
        <p>A full-stack app with user, restaurant, and driver roles.</p>
        <a
          href="https://github.com/Ruthvikreddychapala/FoodDeliveryAppProject.git"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>

    </div>
  );
}

export default Projects;