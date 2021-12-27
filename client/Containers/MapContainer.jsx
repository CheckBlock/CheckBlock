import React from 'react'
import GoogleMapReact from 'google-map-react';
import Box from '@mui/material/Box';



const heatmapData = {    
  positions: [
    {lat: 40.6958, lng: -73.9171},
    {lat: 40.6958, lng: -73.9271},
    {lat: 40.6958, lng: -73.9371},

    {lat: 40.6858, lng: -73.9271},
    {lat: 40.685, lng: -73.9271},

    {lat: 40.6758, lng: -73.9371},

  ],
  options: {   
    radius: 40,   
    opacity: .6
  }
};


const MapContainer = () => {
  const midpoint = {lat: 40.6958, lng: -73.9171}
  return (
    <Box sx={{width: '70%', height: '700px'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: process.env.GOOGLE_API}}
        defaultCenter={midpoint}
        defaultZoom={12}
        heatmapLibrary={true} 
        heatmap={heatmapData}
        >
      </GoogleMapReact>
    </Box>
  )
}

export default MapContainer;