import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Freelance from "./components/Freelance";
import Footer from "./components/Footer";

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
