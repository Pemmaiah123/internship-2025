import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const Navbar = ({ onToggleSidebar, showHamburger }) => (
  <AppBar position="fixed" sx={{ zIndex: 1300 }}>
    <Toolbar>
      {showHamburger && (
        <IconButton
          color="inherit"
          edge="start"
          onClick={onToggleSidebar}
          sx={{ mr: 2 }}
          aria-label="open sidebar"
        >
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="h6" noWrap>
        Notes App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
