import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// position="sticky" works if i dont add this
const Navbar = () => {
  return (
    <AppBar  color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="green">
          MyPortfolio
        </Typography>
        <Box>
          {["Home", "About", "Skills", "Education", "Projects", "Contact"].map((text) => (
            <Button
              key={text}
              href={`#${text.toLowerCase()}`}
              color="primary"
              sx={{ textTransform: "none", mx: 1 }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;