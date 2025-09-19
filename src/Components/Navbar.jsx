import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "skills", "projects", "freelance"];

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                onClick={() => setActive(sec)}
                className={active === sec ? "active" : ""}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                onClick={() => {
                  setActive(sec);
                  setMenuOpen(false); // close menu on click
                }}
                className={active === sec ? "active" : ""}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
