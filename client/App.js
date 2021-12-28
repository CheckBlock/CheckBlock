import React, { Component } from "react";
import SidebarContainer from "./Containers/SidebarContainer.jsx";
import MapContainer from "./Containers/MapContainer.jsx";
import $, { timers } from "jquery";

const App = () => {

  const url_311 = "https://data.cityofnewyork.us/resource/erm2-nwe9.json";
  const violations = "https://data.cityofnewyork.us/resource/wvxf-dwi5.json";
   
  const get_API_Data = (url, where) => {
    const startTime = performance.now();
    const _date = new Date();
    const year = _date.getFullYear();
    const month = _date.getMonth();
    const day = _date.getDate() - 7;
    $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
      type: "GET",
      data: {
        $limit: 40000,
        $order: "created_date DESC",
        $select: "created_date, complaint_type, incident_zip, latitude, longitude",
        //$select: "complaint_type, count(created_date) & group=complaint_type",
        // $where: 'created_date >= date.now()-604800000 complaint_type = "Rodent"',
        $where: `created_date between "${year}-${month}-${day}T00:00:00" and "${year}-${month}-${day + 7}T23:59:59"`,
        $$app_token: "qvibJjV0W3u13ihBhQ1fXcxA6",
      },
    }).done((data) => {
      console.log(data);
      const types = {};
      const types_by_zip = {};
      /*
        {
          10001 : {
            rodent: 5
            noise: 7
            illegal: 20
          },
          10002 : {
            rodent: 7
            noise: 2
            illegal: 10
          },
        }
      */
      // data.forEach(el =>  {
      //   types[el.complaint_type] = (types[el.complaint_type] | 0) + 1;
      // }); 

      
      data.forEach(el => {
        return types_by_zip[el.incident_zip][el.complaint_type] = (types[el.complaint_type] | 0) + 1;
      }); 
      
      // data.forEach(el =>  {
      //   types[el.complaint_type] = {
      //    'count': (types[el.complaint_type] | 0) + 1,
      //    'zipcode': {
      //      zipcode[incident_zip]: (zipcode[el.incedent_zip] | 0) + 1,
      //     }
      // }
      // }

      console.log('Types: ', types_by_zip);
      // fetch('/printInfo', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     'data_311' : data
      //   }),
      // })
      //   .then(res => {
      //     console.log('sending 311 data to backend');
      //     console.log('already sent');
      //   })
      //   .catch(err => console.log('error: ', err));
      console.log(performance.now() - startTime, "ms");
    });  
  };


  return (
    <div>
      <button onClick={() => get_API_Data()}>Clicky click</button>
      <SidebarContainer get_API_Data = { get_API_Data }/>
      <MapContainer />
    </div>
  );
};

export default App;
