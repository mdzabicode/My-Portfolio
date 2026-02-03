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
    title: "Serverless Dictionary API using AWS", 
    desc: "A fully serverless, scalable, and cost-efficient dictionary lookup service built using AWS Lambda, API Gateway, DynamoDB, S3, and optionally CloudFront.",
    href: "https://github.com/mdzabicode/Serverless-Dictionary-API.git"
  },
  { 
    id: 3, 
    title: "AWS Full Stack Resume Project.", 
    desc: "Developed a professional resume website hosted on AWS, utilizing various AWS services for robustness and security.",
    href: "https://github.com/mdzabicode/Resume-Ops---AWS-Static-Resume-View-Tracking.git"
  }];

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