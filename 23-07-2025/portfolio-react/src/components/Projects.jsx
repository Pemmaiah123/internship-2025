import React from "react";
import { Box, Typography, Container, Card, CardContent, Grid } from "@mui/material";

const projects = [
  { title: "Hospital Management System", desc: "The Hospital Management System (HMS) is a comprehensive web-based application designed to streamline the operations, administration, and services of a healthcare facility." },
  { title: "Employee ID Generator", desc: "The Employee ID Generator System is a simple yet effective web-based tool designed to generate and assign unique employee IDs to registered users in an organization." }
];

const Projects = () => {
  return (
    <Box id="projects" sx={{
    background: "#0f172a",
    color: "#fff",
    padding: "60px 20px",
  }} data-aos="fade-up">
      <Container>
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <Grid container spacing={3}>
          {projects.map((proj, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{proj.title}</Typography>
                  <Typography>{proj.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;