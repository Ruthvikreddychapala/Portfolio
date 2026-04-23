import React from "react";
import { Link } from "react-router-dom";
import profile from "../profile.jpg";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <img src={profile} alt="Profile" className="profile" />
        <h1>Chapala Ruthvik Reddy</h1>
        <p className="tagline">
          Full Stack Developer | AI Enthusiast
        </p>

        <Link to="/projects" className="btn">
          View My Projects →
        </Link>
      </div>

      {/* ABOUT */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I am currently pursuing my bachelor's degree in Artificial Intelligence at mahindra university. I developed a strong foundation in problem solving and computational thinking. Right now my main focus is exploring modern technologies like AI and Data Analysis.
        </p>
      </div>

      {/* RESEARCH */}
      <div className="card">
        <h2>Research Interests</h2>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Data Science</li>
          <li>Data Analysis</li>
        </ul>
      </div>

      {/* DETAILS */}
      <div className="card">
        <h2>Personal Details</h2>
        <ul>
          <li><b>Phone:</b> +91 8309460258</li>
          <li><b>Email:</b> chapalaruthvikreddy@gmail.com</li>
          <li><b>College Email:</b> se23uari023@mahindrauniversity.edu.in</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>C</span>
          <span>Python</span>
          <span>MySQL</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
        </div>
      </div>

    </div>
  );
}

export default Home;