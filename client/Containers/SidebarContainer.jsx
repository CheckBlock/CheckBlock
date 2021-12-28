import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, TextField, Slider, Box, Typography  } from '@mui/material'
import RangeSlider from '../Components/RangeSlider.jsx'

const SidebarContainer = () => {
  return (
    <Box sx={{width: '15%'}}>
        <FormGroup>
          <Typography variant='h3'>Metrics:</Typography>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Crime Rates" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="311 Complaints" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Violations" />
          <RangeSlider/>
        </FormGroup>
    </Box>
  )
}

export default SidebarContainer;