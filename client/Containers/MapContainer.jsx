import React from 'react'
import GoogleMapReact from 'google-map-react';


const MapContainer = () => {
  return (
    <GoogleMapReact 
      bootstrapURLKeys={{key: "API GOES HERE"}}
      defaultCenter={{lat: 40.7142700, lng: -74.0059700}}
      defaultZoom={20}>
    </GoogleMapReact>
  )
}

export default MapContainer;