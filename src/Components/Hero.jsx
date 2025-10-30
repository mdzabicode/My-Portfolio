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
  A motivated <strong>AWS Cloud Practitioner</strong> with a foundational understanding of <em>AWS services, cloud computing, and deployment practices</em>.
I am eager to begin my career in the cloud domain, focusing on building secure, scalable, and efficient solutions.
Along with my cloud knowledge, I also possess basic <strong>frontend development</strong> skills in <em>HTML, CSS, JavaScript, and React</em>,
 enabling me to contribute to both cloud and web-based projects.
</p>
      {/* Buttons */}
      <div className="hero-buttons">
        <a href="mailto:your-email@example.com" className="btn primary">
          <Mail size={20} /> Hire Me
        </a>
        <a href="https://www.dropbox.com/scl/fi/bwqgl7l4zktylfz4pc4vb/Rezume-3.pdf?rlkey=rk3ogugpqw8wnoobi1xgf5ziv&st=0xasvrc4&dl=0" download className="btn secondary">
          <Eye size={20} /> View Resume
        </a>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a
          href="https://github.com/mdzabicode"
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
