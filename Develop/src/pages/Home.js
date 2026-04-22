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
          I am a passionate developer focused on building scalable web applications
          and exploring modern technologies like AI and full-stack development.
        </p>
      </div>

      {/* RESEARCH */}
      <div className="card">
        <h2>Research Interests</h2>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Web Development</li>
          <li>Data Science</li>
        </ul>
      </div>

      {/* DETAILS */}
      <div className="card">
        <h2>Personal Details</h2>
        <ul>
          <li><b>Phone:</b> +91 8309460258</li>
          <li><b>Email:</b> chapalaruthvikreddy@gmail.com</li>
          <li><b>College Email:</b> se23uari023@mail.com</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div className="card">
        <h2>Skills</h2>
        <div className="skills">
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