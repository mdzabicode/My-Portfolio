import { motion } from "framer-motion";
import { Mail, Download, Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Profile Image */}
      <motion.img
        src="/image.jpg" // 👈 place your photo in "public/profile.jpg"
        alt="Zabi"
        className="profile-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Zabi 👋
      </motion.h2>

      {/* Brief Summary */}
      <p className="summary">
        A passionate <strong>Full-Stack Developer</strong> with a love for
        crafting modern, scalable, and user-friendly web applications.  
        I specialize in <em>React, Node.js, and cloud solutions</em> — always
        eager to learn and take on new challenges.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <a href="mailto:your-email@example.com" className="btn primary">
          <Mail size={20} /> Hire Me
        </a>
        <a href="/resume.pdf" download className="btn secondary">
          <Download size={20} /> Download Resume
        </a>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={28} />
        </a>
      </div>
    </section>
  );
}
