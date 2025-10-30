import React from "react";

const projects = [
  { 
    id: 1, 
    title: "Bestvalueuae.com", 
    desc: "Consultancy Project",
    href: "https://www.bestvalueuae.com/"
  },
  { 
    id: 2, 
    title: "Intelligent Cloud Cost Optimization System (AWS, DevOps, AI/ML", 
    desc: "Full Fledge Cloud Project",
    href: "https://github.com/mdzabicode/Intelligent-Cloud-Cost-Optimization-System-AWS-DevOps-AI-ML"
  },
  { 
    id: 3, 
    title: "Migrating Cafe Web Application to Amazon RDS", 
    desc: "Cloud Porject",
    href: "https://github.com/mdzabicode/Migrating-Cafe-Web-Application-to-Amazon-RDS"
  },
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
            <a 
              href={p.href} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}