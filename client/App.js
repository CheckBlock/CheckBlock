import React, { useState } from "react";
import SidebarContainer from "./Containers/SidebarContainer.jsx";
import MapContainer from "./Containers/MapContainer.jsx";
import Box from "@mui/system/Box";
import Navbar from "./Components/Navbar.jsx";
import $ from "jquery";

const App = () => {
  const [points, setDataPts] = useState([]);
  const [prices, setPrices ] = useState([0,10000]);
  const [hoods, setHoods] = useState({});

  const priceValues = (price_Arr) => {
    setPrices(price_Arr);
  };

  const get_API_Data = (zips_Arr, filter_Arr) => {
    const whereParam = () => {
      const _date = new Date();
      const year = _date.getFullYear();
      const month = _date.getMonth();
      const day = _date.getDate() - 27;

      let zip_str = "";
      let filter_str = "";
      if(zips_Arr.length > 0) {
        zip_str += " AND (";
        zips_Arr.forEach((el, i) => {
          zip_str += `incident_zip="${el}"${i < zips_Arr.length - 1 ? " OR " : ""}`;
        });
        zip_str += ")"
      }



      if(filter_Arr.length > 0) {
        filter_str += " AND (";
        filter_Arr.forEach((el, i) => {
          filter_str += `complaint_type="${el}"${i < filter_Arr.length - 1 ? " OR " : ""}`;
        });
        filter_str += ")"
      }

      // generating query string for SoQL API calls
      return `created_date between "${year}-${month}-${day}T00:00:00" and "${year}-${month}-${day + 27}T23:59:59"${zip_str}${filter_str}`;
    };

    $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
      type: "GET",
      data: {
        $limit: 40000,
        $order: "created_date DESC",
        $select: "latitude as lat, longitude as lng, complaint_type",
        $where: whereParam(),
        $$app_token: process.env.url_311_API,
      },
    }).done((data) => {
      const complaints = {};

      data.forEach(el => {
        const curComplaint = el['complaint_type'];
        complaints[curComplaint] ? complaints[curComplaint] += 1 : complaints[el['complaint_type']] = 1;
      });
      console.log(complaints)
      const dataFormatted = data.map((el) => {
        el.lat = Number(el.lat);
        el.lng = Number(el.lng);
        return { lat: el.lat, lng: el.lng };
      });
      setDataPts(dataFormatted);
    });
  };

  return (
    <>
      <Navbar />
      <Box className="flex shadow " style={{display:'flex', justifyContent:'space-between'}}>
        <SidebarContainer get_API_Data={get_API_Data} priceValues={ priceValues } setHoods={ setHoods }/>
        <MapContainer points={points} prices={ prices } hoods = { hoods }/>
      </Box>
    </>
  );
};

export default App;
