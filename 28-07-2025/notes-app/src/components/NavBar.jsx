
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" >
          My Note
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
