import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
  { name: "Docker", icon: <FaDocker color="#0db7ed" /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((skill) => (
          <div key={skill.name} className="card skill-card">
            <span className="icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
