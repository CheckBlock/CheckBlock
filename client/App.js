import React, { Component, useState } from 'react';
import SidebarContainer from './Containers/SidebarContainer.jsx';
import MapContainer from './Containers/MapContainer.jsx'
import Box from '@mui/system/Box';
import Navbar from './Components/Navbar.jsx'
import $ from 'jquery'

const App = () => {

  const [points, setDataPts] = useState([]);

  const get_API_Data = (url, where, location) => {
    const zips = [10001, 11366, 11355, 11432, 11234, 11223,10453];
    const whereParam = () => {
      const _date = new Date();
      const year = _date.getFullYear();
      const month = _date.getMonth();
      const day = _date.getDate() - 27;
      
      let zip_str = "";
      zips.forEach((el, i) => {
        zip_str += `incident_zip="${el}"${i < zips.length - 1 ? ' OR ' : ''}`;
      });
      return `created_date between "${year}-${month}-${day}T00:00:00" and "${year}-${month}-${day + 27}T23:59:59" AND (${(zip_str)})`;
    };
    const whereParamStr = whereParam();
    // let location = [1,2,3,4,5] // zip
    // const whereParam = location(`created & incident_zip = 1 or 2, 3, 4, 5`)

    $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
      type: "GET",
      data: {
        $limit: 40000,
        $order: "created_date DESC",
        $select: "latitude as lat, longitude as lng",
        $where: whereParam(),
        $$app_token: process.env.url_311_API,
      },
    }).done((data) => {
      const dataFormatted = data.map(el => {
        // el.lat = Number(el.lat).toFixed(2);
        // el.lng = Number(el.lng).toFixed(2);
        el.lat = Number(el.lat);
        el.lng = Number(el.lng);
        return {lat: el.lat, lng: el.lng};
      });
      setDataPts(dataFormatted);
      // console.log("data from the API", dataFormatted);

    });  
  };


  return (
    <>
      <Navbar />
      <button onClick={()=>get_API_Data()}>testing</button>
      <Box className="flex shadow ">
        <SidebarContainer />
        <MapContainer points = { points }/>
      </Box>
    </>
  );
};

export default App;
