import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 3, textAlign: "center", backgroundColor: "#ff6a00" }}>
      <Container>
        <Typography variant="body2">&copy; {new Date().getFullYear()} Pradhan. All rights reserved.</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
