import React, {useState} from 'react';
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

function handleZoomChanged(){
  console.log(this.getZoom())
  console.log("test")  //this refers to Google Map instance
}

const MapContainer = ({ points }) => {

  const [zoomLvl, setZoomLvl] = useState(10.75);

  const heatmapData = {
    positions: points,
    options: {   
      gradient: [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
      ],
      radius: 20,   
      opacity: .6,
      maxIntensity: 1 / zoomLvl * 5000

    }
  };

  console.log("heatMap",heatmapData);
  


  // console.log("points has been passed down from app.jsx",points);
  const midpoint = {lat: 40.7158, lng: -73.9171};
  return (
    <Box sx={{width: '80%', height: '700px'}}>
      {console.log("heatmapData maxintensity", heatmapData.options.maxIntensity)}
      <GoogleMapReact 
        bootstrapURLKeys={{ key: "AIzaSyBfbNoclfkFu3MjEoGcUr9Q12qbpl6Cwuw", libraries:['visualization'] }}
        defaultCenter={midpoint}
        defaultZoom={10.75}
        heatmapLibrary={true} 
        heatmap={heatmapData}
        onChange={() => setZoomLvl(zoomLvl + 1)}
        >
      </GoogleMapReact>
    </Box>
  );
}

export default MapContainer;

// onZoomChanged = {() => {
//   const newCenter = this.googleMap.current.getCenter();
//   this.setState({
//     zoom: this.googleMap.current.getZoom(),
//     center: {
//       latitude: newCenter.lat(),
//       longitude: newCenter.lng()
//     }
//   });
// }}