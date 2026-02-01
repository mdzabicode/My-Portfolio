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
    An <strong>An entry-level Junior Developer</strong> with a foundation in frontend development and a strong interest in building scalable and efficient applications.
    I have completed my graduation in Computer Science and i am seeking an opportunity as a fresher to start my career in a junior developer role, where I can learn, 
    contribute, and grow within a professional development team.
    I possess basic frontend skills in HTML, CSS, JavaScript, and React, enabling me to assist in web-based projects. 
    Additionally, I am learning AWS Cloud Practitioner fundamentals, gaining knowledge of cloud services, deployment concepts, and secure cloud practices.
</p>
      {/* Buttons */}
      <div className="hero-buttons">
        <a href="mailto:your-email@example.com" className="btn primary">
          <Mail size={20} /> Hire Me
        </a>
        <a href="https://www.dropbox.com/scl/fi/1qxusgp03i2v91l0rbmnx/Zabi.pdf?rlkey=wdpgurpz9gfmxu27768gb192w&st=mya1yrqa&dl=0https://www.dropbox.com/scl/fi/bwqgl7l4zktylfz4pc4vb/Rezume-3.pdf?rlkey=rk3ogugpqw8wnoobi1xgf5ziv&st=0xasvrc4&dl=0" download className="btn secondary">
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
