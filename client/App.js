import React, { Component } from 'react';
import SidebarContainer from './Containers/SidebarContainer.jsx';
import MapContainer from './Containers/MapContainer.jsx'

const App = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <SidebarContainer />
      <MapContainer />
    </div>
  );
};

export default App;