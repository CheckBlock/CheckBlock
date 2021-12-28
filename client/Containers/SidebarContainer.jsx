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

const bronx = [
  'Kingsbridge - Riverdale', 
  'Northeast Bronx', 
  'Fordham - Bronx Park ', 
  'Pelham - Throgs Neck ', 
  'Crotona - Tremont ',
  'High Bridge - Morrisania ',
  'Hunts Point - Mott Haven '
];

const manhattan = [
  'Washington Heights - Inwood', 
  'Central Harlem - Morningside Heights', 
  'East Harlem', 
  'Upper West Side', 
  'Upper East Side', 
  'Chelsea - Clinton', 
  'Gramercy Park - Murray Hill', 
  'Greenwich Village - SoHo', 
  'Union Square - Lower East Side', 
  'Lower Manhattan' 
];

const queens = [
  'Long Island City - Astoria', 
  'West Queens', 
  'Flushing - Clearview', 
  'Bayside - Little Neck', 
  'Ridgewood - Forest Hills', 
  'Fresh Meadows', 
  'Southwest Queens', 
  'Jamaica', 
  'Southeast Queens', 
  'Rockaway', 
];

const brooklyn = [
  'Greenpoint', 
  'Downtown - Heights - Park Slope', 
  'Bedford Stuyvesant - Crown Heights', 
  'East New York', 
  'Sunset Park', 
  'Borough Park', 
  'East Flatbush - Flatbush', 
  'Canarsie - Flatlands', 
  'Bensonhurst - Bay Ridge', 
  'Coney Island - Sheepshead Bay', 
  'Williamsburg - Bushwick'
];

const statenIsland = [
  'Port Richmond', 
  'Stapleton - St. George', 
  'Willowbrook', 
  'South Beach - Tottenville'
];

const SidebarContainer = () => {
  const [showBronx, setBx] = useState(false);
  const [showManhattan, setM] = useState(false);
  const [showQueens, setQ] = useState(false);
  const [showBk, setBk] = useState(false);
  const [showSI, setSI] = useState(false);
  
  const [selectedHoods, setHood] = useState([]);

  // function changeHandler(){
  //   if (showBronx !== ''){
  //     setBx('data');
  //   }else {
  //     setBx('');
  //   }
  // }
  
  const genBorough = (borough) => {
    return borough.map((el, i) => 
      // <FormControlLabel
      //   key = {`${i}_${borough}`}
      //   control={<Checkbox/>}
      //   label={el}
      //   />
      <div key = {`${i}_${borough}`}>
        <input type="checkbox" id="test" name={el} onClick={()=> console.log("")}/>
        <label htmlFor="test">{el}</label>
      </div>
      );
  };

  //onChange -> setHood() => selectedHoods.push(neighborhood)
  
  return (
    <Box sx={{ width: "15%" }}>
      <FormGroup>
        <Typography variant="h3">Metrics:</Typography>
        <h2 onClick={()=> setBx(!showBronx)}>Bronx ▾</h2>
        <div style={showBronx ? {visibility:'visible'} : {visibility:'hidden', height:'0'}}>{genBorough(bronx)}</div>
        <h2 onClick={()=> setM(!showManhattan)}>Manhattan ▾</h2>
        <div style={showManhattan ? {visibility:'visible'} : {visibility:'hidden', height:'0'}}>{genBorough(manhattan)}</div>
        <h2 onClick={()=> setQ(!showQueens)}>Queens ▾</h2>
        <div style={showQueens ? {visibility:'visible'} : {visibility:'hidden', height:'0'}}>{genBorough(queens)}</div>
        <h2 onClick={()=> setBk(!showBk)}>Brooklyn ▾</h2>
        <div style={showBk ? {visibility:'visible'} : {visibility:'hidden', height:'0'}}>{genBorough(brooklyn)}</div>
        <h2 onClick={() => setSI(!showSI)}>Staten Island ▾</h2>
        <div style={showSI ? {visibility:'visible'} : {visibility:'hidden', height:'0'}}>{genBorough(statenIsland)}</div>
        <RangeSlider />
      </FormGroup>
    </Box>
  );
};

export default SidebarContainer;
