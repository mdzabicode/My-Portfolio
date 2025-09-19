import React, { useState } from "react";

const projects = [
  { id: 1, title: "Portfolio Website", desc: "Personal branding website." },
  { id: 2, title: "E-Commerce App", desc: "MERN stack full-featured store." },
  { id: 3, title: "SaaS Dashboard", desc: "Analytics dashboard with charts." },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href="#">View Details →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
