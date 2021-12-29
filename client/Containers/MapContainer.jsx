import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Box from '@mui/material/Box';
import median_prices from '../prices';

const PriceDots = ({text}) => (
  <div style ={{
    color: 'white',
    background: 'grey',
    padding: '2px 2px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15%',
    transform: 'translate(-50%, -50%)',
    opacity: '75%'
  }}>
    {text}
  </div>
);

const placePrices = (min, max, hoods) => {
  const medianPriceDots = [];
  median_prices.forEach((el, i) => {
    if (el.rent > min && el.rent < max) {
      medianPriceDots.push(
        <PriceDots
          lat={el.lat}
          lng={el.lng}
          text={`$${el.rent}`}
        />
      );
    }
  });
  return medianPriceDots;
};

const MapContainer = ({ points, prices, hoods }) => {
  const [zoomLvl, setZoom] = useState(11);

  const heatmapData = {
    positions: points,
    options: {   
      gradient: [
        'rgba(255, 125, 0, 0)',
        'rgba(245, 115, 0, 1)',
        'rgba(235, 105, 0, 1)',
        'rgba(225, 95, 0, 1)',
        'rgba(215, 85, 0, 1)',
        'rgba(205, 75, 0, 1)',
        'rgba(195, 65, 0, 1)',
        'rgba(185, 55, 0, 1)',
        'rgba(200, 45, 0, 1)',
        'rgba(215, 35, 0, 1)',
        'rgba(230, 25, 0, 1)',
        'rgba(245, 15, 0, 1)',
        'rgba(255, 5, 0, 1)',
        'rgba(255, 0, 0, 1)'
      ],
      radius: 20,   
      opacity: .75,
      maxIntensity: 1 / (zoomLvl ** .85) * 600
    }
  };

  const midpoint = {lat: 40.7158, lng: -73.9171};

  return (
    <Box sx={{width: '75%', height: 'calc(100vh - 64px)'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.GOOGLE_API , libraries:['visualization'] }}
        defaultCenter={midpoint}
        defaultZoom={11.25}
        heatmapLibrary={true} 
        heatmap={heatmapData}
        onChange={(e) => {
          setZoom(e.zoom);
          console.log("intensity:", 1 / e.zoom * 750 )
        }}
      >
        {placePrices(prices[0], prices[1])}
        <PriceDots
          lat={40.583343687828304}
          lng={-74.14920308054795}
          text={'Really?!?! You want to live here?'}
        />
      </GoogleMapReact>
    </Box>
  );
}

export default MapContainer;
