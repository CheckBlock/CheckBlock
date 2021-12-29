import React from 'react'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box';

const valueText = (value) => {
  return `${value}`;
}

const RangeSlider = ({ priceValues }) => {
  const [value, setValue] = React.useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    priceValues(newValue);
  };

  return (
    <Box pt={5} sx={{width: '80%', margin: '0 auto'}}>
      <Slider
        // getAriaLabel={() => 'Median Rental Price Range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        // getAriaValueText={valueText}
        marks={[{value: 0, label: '$0'}, {value: 10000, label: '$10,000'}]}
        step={100}
        min={0}
        max={10000}
      />
    </Box>
  )
}

export default RangeSlider;