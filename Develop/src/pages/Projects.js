import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="project">
        <h3>Food Delivery App</h3>
        <p>A full-stack app with user, restaurant, and driver roles.</p>
        <a
          href="https://github.com/yourusername/food-delivery"
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
          href="https://github.com/yourusername/fraud-detection"
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