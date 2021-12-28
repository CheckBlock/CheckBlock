import React from 'react';
import GoogleMapReact from 'google-map-react';
import Box from '@mui/material/Box';


// const heatmapData = {    
//   positions: [
//     {lat: 40.6958, lng: -73.9171},
//     {lat: 40.6958, lng: -73.9271},
//     {lat: 40.6958, lng: -73.9371},

//     {lat: 40.6858, lng: -73.9271},
//     {lat: 40.685, lng: -73.9271},

//     {lat: 40.6758, lng: -73.9371},

//   ],
//   options: {   
//     radius: 40,   
//     opacity: .6
//   }
// };


const MapContainer = ({ points }) => {

  const heatmapData = {
    positions: points,
    options: {   
      radius: 10,   
      opacity: .9
    }
  };

  console.log("heatMap",heatmapData);

  // console.log("points has been passed down from app.jsx",points);
  const midpoint = {lat: 40.6958, lng: -73.9171}
  return (
    <Box sx={{width: '80%', height: '700px'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: "AIzaSyBfbNoclfkFu3MjEoGcUr9Q12qbpl6Cwuw"}}
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