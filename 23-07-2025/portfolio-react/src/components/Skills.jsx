import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const skills = [
  { name: "JavaScript", level: 60 },
  { name: "React.js", level: 50 },
  { name: "HTML", level: 75 },
  { name: "Prompting", level: 75 },
  { name: "Git", level: 65 },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        bgcolor: "#0f172a",
        color: "white",
        px: { xs: 2, md: 15 },
        py: 10,
      }}data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ mb: 6 }}
      >
        My Skills
      </Typography>

      {skills.map((skill) => (
        <Box key={skill.name} sx={{ mb: 5 }}>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="subtitle1" fontWeight="600">
              {skill.name}
            </Typography>
            <Typography variant="subtitle1" fontWeight="500">
              {skill.level}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{
              height: 14,
              borderRadius: 8,
              backgroundColor: "#1e293b",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#38bdf8",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
