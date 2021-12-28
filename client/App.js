import React, { Component } from 'react';
import SidebarContainer from './Containers/SidebarContainer.jsx';
import MapContainer from './Containers/MapContainer.jsx'
import Box from '@mui/system/Box';
import Navbar from './Components/Navbar.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Box className="flex shadow ">
        <SidebarContainer />
        <MapContainer />
      </Box>
    </>
  );
};

export default App;