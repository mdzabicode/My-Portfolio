import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Freelance from "./Components/Freelance.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Freelance />
      <Footer />
    </div>
  );
}
