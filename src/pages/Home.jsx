import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Publications from "../components/Publications";
import Research from "../components/Research";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Achievements />
      <Publications />
      <Research />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
