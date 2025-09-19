import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Zabi | All rights reserved.</p>

      {/* Social Links */}
      <div className="footer-socials">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={22} />
        </a>
        <a href="mailto:your-email@example.com">
          <Mail size={22} />
        </a>
      </div>
    </footer>
  );
}
