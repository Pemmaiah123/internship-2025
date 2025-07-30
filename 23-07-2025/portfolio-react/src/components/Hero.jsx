import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Lottie from "lottie-react";
import robotAnimation from "../assets/Man Working.json"; // adjust path if needed

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0e0e2c",
        color: "#fff",
      }}data-aos="fade-up"
    >
      {/* Left side animation */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: { xs: 4, md: 0 },
        }}
      >
        <Lottie
          animationData={robotAnimation}
          loop
          style={{ width: "100%", maxWidth: "400px", height: "auto" }}
        />
      </Box>

      {/* Right side text */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            mb: 2,
          }}
        >
          Hi, I'm Pradhan
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            mb: 4,
            color: "#ccc",
          }}
        >
          A Passionate Web Developer motivated and eager to start my professional journey in the world of technology.
        </Typography>
        <Button
          variant="contained"
          href="#contact"
          sx={{
            backgroundColor: "#ff4081",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#e91e63",
            },
          }}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
