import React from "react";
import { Box, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";

const educationData = [
  {
    institution: "Vivekananda college of arts,science and commerce,Puttur",
    degree: "Bachelors of computer application",
    duration: "2022-2025",
    highlights: [
      "Served as NSS unit leader.",
      "Served as class representative.",
      "Secured 8.5 CGPA"
    ],
  },
  {
    institution: "St Josephs Composite PU college,Madikeri",
    PU: "Computer science and Statistics",
    duration: "2020-2022",
    highlights: [
      "Secured 93%  in state exam",
      "Was a part of University hockey team.",
    ],
  },
];

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        bgcolor: "#0f172a",
        color: "white",
        px: { xs: 3, md: 10 },
        py: 10,
      }}data-aos="zoom-out-right"
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Education
      </Typography>

      {educationData.map((edu, index) => (
        <Box key={edu.institution} sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight="bold" mt={2}>
            {edu.institution}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {edu.degree}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {edu.duration}
          </Typography>

          <List dense disablePadding>
            {edu.highlights.map((point, idx) => (
              <ListItem key={idx} sx={{ pl: 2 }}>
                <ListItemText
                  primary={point}
                  primaryTypographyProps={{ color: "#cbd5e1" }}
                />
              </ListItem>
            ))}
          </List>

          {index < educationData.length - 1 && (
            <Divider sx={{ mt: 4, borderColor: "#334155" }} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Education;
