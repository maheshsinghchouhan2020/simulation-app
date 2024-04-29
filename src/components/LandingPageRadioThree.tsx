import React, { useState } from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography, } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LandingPageRadioThreeChild from "./LandingPageRadioThreeChild";

const steps = [
  "Add Category Details",
  "Add Category Type",
  "Add Essay Type",
  "Add Query Info",
  "Preview Query",
  "Add Display BreakUp",
];

const LandingPageRadioThree = () => {
   const [radioThree, setRadioThree] = useState("");




 

    const handleThirdRadio = (event: SelectChangeEvent) => {
    setRadioThree(event.target.value as string);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "40px",
        }}
      >
        <FormControl sx={{ width: "150px" }}>
          <InputLabel id="demo-simple-select-label">Version</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={radioThree}
            label="Version"
            onChange={handleThirdRadio}
          >
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>{radioThree === "1" && <LandingPageRadioThreeChild />}</Box>
    </>
  );
};

export default LandingPageRadioThree;
