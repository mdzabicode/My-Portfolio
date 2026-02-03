import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Eye } from "lucide-react";
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
        Hello, I'm Zabi 
      </motion.h2>

      {/* Brief Summary */}
      <p className="summary">
    An entry-level cloud-focused student with a foundational understanding of AWS Cloud Practitioner concepts and a background in web development. 
    I have completed my graduation in Computer Science and i am seeking a fresher opportunity to begin my career in a cloud-based role where I can 
    learn, contribute, and grow within a professional environment.

    I am gaining hands-on knowledge of AWS core services such as EC2, S3, IAM, and basic VPC concepts, along with cloud deployment fundamentals, 
    security best practices, and cost optimization principles. In addition, I possess working knowledge of HTML, CSS, JavaScript, and React, allowing me
    to support cloud-hosted web applications.
</p>
      {/* Buttons */}
      <div className="hero-buttons">
        <a href="mailto:your-email@example.com" className="btn primary">
          <Mail size={20} /> Hire Me
        </a>
        <a href="https://drive.google.com/file/d/1AA4TobziNUT_99tGcteq7dILuok4BMZs/view?usp=drivesdk" download className="btn secondary">
          <Eye size={20} /> View Resume
        </a>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a
          href="hhttps://github.com/mdzabicode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={28} />
        </a>
        <a
          href="http://www.linkedin.com/in/mohammed-zabi-ullah-khan-b21ab7228"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </section>
  );
}
