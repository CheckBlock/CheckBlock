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
        <Typography variant='h3'>Neighborpedia</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;