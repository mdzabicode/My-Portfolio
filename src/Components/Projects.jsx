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
    title: "E-Commerce App", 
    desc: "MERN stack full-featured store.",
    href: "https://your-ecommerce-demo-link.com"
  },
  { 
    id: 3, 
    title: "SaaS Dashboard", 
    desc: "Analytics dashboard with charts.",
    href: "https://your-saas-dashboard-link.com"
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