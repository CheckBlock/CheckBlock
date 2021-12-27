import React from "react";
import { Paper, Checkbox, Typography, FormGroup, FormControlLabel } from "@mui/material";

const Metric = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  )
}

export default Metric