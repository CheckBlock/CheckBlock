import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container, Typography } from '@mui/material';
import neighborhoods from '../zip_codes';

const Navbar = () => {

  

  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant='h3'>Check Block</Typography>
          <IconButton href="https://www.linkedin.com/company/artemisql" target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;