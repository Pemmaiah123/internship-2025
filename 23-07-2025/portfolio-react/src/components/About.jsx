import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import Lottie from "lottie-react";
import AboutAnimation from "../assets/Web Development Animation.json";

const About = () => {
  return (
    <Box id="about" sx={{ minHeight: "80vh", bgcolor: "#0f172a", color: "#fff", px: 3, py: 8 }} data-aos="zoom-in">
      <Grid container spacing={5} alignItems="center">
        {/* Animated image using Lottie */}
        <Grid item xs={12} md={6}>
          <Lottie 
            animationData={AboutAnimation} 
            loop={true} 
            style={{ width: "100%", maxHeight: 300 }} 
          />
        </Grid>

        {/* Right content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            What I Do
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3 }}>
            I'm a passionate full-stack developer exploring and building web apps with:
          </Typography>

          {/* Icons */}
          <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
            <SiHtml5 size={40} color="#e34c26" />
            <SiCss3 size={40} color="#264de4" />
            <SiJavascript size={40} color="#f0db4f" />
            <SiReact size={40} color="#61dafb" />
          </Box>

          /* Skills List */
          <ul style={{ lineHeight: "2", fontSize: "1rem" }}>
            <li> Building responsive web apps with React & Material UI</li>
            <li> Creating clean and scalable frontend components</li>
            <li> Passion for UI/UX design and performance</li>
            <li> Integration with APIs and real-time data</li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
