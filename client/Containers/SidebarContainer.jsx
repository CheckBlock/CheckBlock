import React, { useState, useEffect } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Slider,
  Box,
  Typography,
} from "@mui/material";
import RangeSlider from "../Components/RangeSlider.jsx";
import neighborhoods from "../zip_codes.js";
import FilterTypes from "./FilterTypes.jsx";

const bronx = [
  "Kingsbridge - Riverdale",
  "Northeast Bronx",
  "Fordham - Bronx Park",
  "Pelham - Throgs Neck",
  "Crotona - Tremont",
  "High Bridge - Morrisania",
  "Hunts Point - Mott Haven",
];

const manhattan = [
  "Washington Heights - Inwood",
  "Central Harlem - Morningside Heights",
  "East Harlem",
  "Upper West Side",
  "Upper East Side",
  "Chelsea - Clinton",
  "Gramercy Park - Murray Hill",
  "Greenwich Village - SoHo",
  "Union Square - Lower East Side",
  "Lower Manhattan",
];

const queens = [
  "Long Island City - Astoria",
  "West Queens",
  "Flushing - Clearview",
  "Bayside - Little Neck",
  "Ridgewood - Forest Hills",
  "Fresh Meadows",
  "Southwest Queens",
  "Jamaica",
  "Southeast Queens",
  "Rockaway",
];

const brooklyn = [
  "Greenpoint",
  "Downtown - Heights - Park Slope",
  "Bedford Stuyvesant - Crown Heights",
  "East New York",
  "Sunset Park",
  "Borough Park",
  "East Flatbush - Flatbush",
  "Canarsie - Flatlands",
  "Bensonhurst - Bay Ridge",
  "Coney Island - Sheepshead Bay",
  "Williamsburg - Bushwick",
];

const statenIsland = [
  "Port Richmond",
  "Stapleton - St. George",
  "Willowbrook",
  "South Beach - Tottenville",
];

const SidebarContainer = ({ get_API_Data, priceValues }) => {
  const [showBronx, setBx] = useState(false);
  const [showManhattan, setM] = useState(false);
  const [showQueens, setQ] = useState(false);
  const [showBk, setBk] = useState(false);
  const [showSI, setSI] = useState(false);

  const [checkedHoods, setCheckedHoods] = useState({});
  const [_complaints, setComplaints] = useState([]);
  const [zips, setZips] = useState([]);

  const selectedComplaints = (complaints) =>  {
    setComplaints(complaints);
  };
  
  const handleChange = (event) => {
    setCheckedHoods({...checkedHoods, [event.target.name]: event.target.checked});
  };    
  
  useEffect(() => {
    let selectedZips = [];
    Object.keys(checkedHoods).forEach(el => {
      if(checkedHoods[el]) selectedZips = selectedZips.concat(neighborhoods[el]); 
    });
    setZips(selectedZips);
    get_API_Data(selectedZips, _complaints);
  }, [checkedHoods]);  


  const genBorough = (borough) => {
    return borough.map((el, i) => (
      // when we click a checkbox, it triggers an on click event
      // passes in the array of zip codes as arg for the API to use.
      // the api will return data which will get appended to the state.
      // when the React state changes it causes a render.

      <div key={`${i}_${borough}`}>
        <input type="checkbox" id={`${i}_${borough}`} checked={checkedHoods[el]} name={el} onChange={handleChange} />
        <label htmlFor={`${i}_${borough}`}>{el}</label>
      </div>
    ));
  };

  return (
    <Box sx={{ height:'calc(100vh - 64px)', width:'25%', minWidth:'270px', overflow:'scroll', marginLeft:'2%' }}>
      <form>
        <h2>Boroughs:</h2>
        <div className="boroughClick" onClick={() => setBx(!showBronx)}>{`Bronx ${showBronx ? '🔼' : '🔽'}`}</div>
        <div
          style={
            showBronx
              ? { visibility: "visible" }
              : { visibility: "hidden", height: "0" }
          }
        >
          {genBorough(bronx)}
        </div>
        <div className="boroughClick" onClick={() => setM(!showManhattan)}>{`Manhattan ${showManhattan ? '🔼' : '🔽'}`}</div>
        <div
          style={
            showManhattan
              ? { visibility: "visible" }
              : { visibility: "hidden", height: "0" }
          }
        >
          {genBorough(manhattan)}
        </div>
        <div className="boroughClick" onClick={() => setQ(!showQueens)}>{`Queens ${showQueens ? '🔼' : '🔽'}`}</div>
        <div
          style={
            showQueens
              ? { visibility: "visible" }
              : { visibility: "hidden", height: "0" }
          }
        >
          {genBorough(queens)}
        </div>
        <div className="boroughClick" onClick={() => setBk(!showBk)}>{`Brooklyn ${showBk ? '🔼' : '🔽'}`}</div>
        <div
          style={
            showBk
              ? { visibility: "visible" }
              : { visibility: "hidden", height: "0" }
          }
        >
          {genBorough(brooklyn)}
        </div>
        <div className="boroughClick" onClick={() => setSI(!showSI)}>{`Might as well be NJ ${showSI ? '🔼' : '🔽'}`}</div>
        <div
          style={
            showSI
              ? { visibility: "visible" }
              : { visibility: "hidden", height: "0" }
          }
        >
          {genBorough(statenIsland)}
        </div>
        <RangeSlider priceValues={ priceValues }/>
        <FilterTypes selectedComplaints={ selectedComplaints} get_API_Data={ get_API_Data } selectedZips={ zips }/>
      </form>
    </Box>
  );
};

export default SidebarContainer;
