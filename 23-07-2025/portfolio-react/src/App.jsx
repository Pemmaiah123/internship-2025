import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  
  return (
    <>
    
    <Box sx={{ overflowX: "hidden", width: "100%" }}>
      <Navbar /> 
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills/>
        <Contact />
      <Footer />
    </Box>
    </>
  );
};

export default App;
