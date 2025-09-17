import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Hi, I'm Saurav Singh</h1>
        <p className="lead">Frontend developer — building beautiful, responsive websites.</p>
        <a className="btn" href="#/blog">Read my blog</a>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>HTML / CSS / JavaScript</li>
          <li>React</li>
          <li>Responsive Design</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Project Alpha</h3>
            <p>A responsive portfolio website built with React.</p>
            <a className="small-btn" href="#">View</a>
          </div>
          <div className="card">
            <h3>Project Beta</h3>
            <p>Interactive data visualizations using Chart.js.</p>
            <a className="small-btn" href="#">View</a>
          </div>
          <div className="card">
            <h3>Project Gamma</h3>
            <p>Mini social feed UI built with Vanilla JS.</p>
            <a className="small-btn" href="#">View</a>
          </div>
        </div>
      </section>
    </div>
  );
}
