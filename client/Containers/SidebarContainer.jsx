import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, TextField, Slider, Box  } from '@mui/material'
import RangeSlider from '../Components/RangeSlider.jsx'

const SidebarContainer = () => {
  return (
    <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Crime Rates" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="311 Complaints" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Violations" />
          <RangeSlider/>
        </FormGroup>
    </div>
  )
}

export default SidebarContainer;