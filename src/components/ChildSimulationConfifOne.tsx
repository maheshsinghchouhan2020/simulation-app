import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'

const ChildSimulationConfifOne = () => {
  return (
    <>
      <FormControl
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="Add New Config"
        >
          <FormControlLabel
            value="Add New Config"
            control={<Radio />}
            label="Add New Config"
          />
          <FormControlLabel
            value="Add From Existing Config"
            control={<Radio />}
            label="Add From Existing Config"
          />
          <FormControlLabel
            value="Add From Existing Simulation"
            control={<Radio />}
            label="Add From Existing Simulation"
          />
          <FormControlLabel
            value="Edit Existing Config"
            control={<Radio />}
            label="Edit Existing Config"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default ChildSimulationConfifOne