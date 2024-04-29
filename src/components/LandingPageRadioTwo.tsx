import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react'

const LandingPageRadioTwo = () => {

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "40px"}}>
        <FormControl sx={{width: "150px", display: "flex", justifyContent: "center",}}>
          <InputLabel id="demo-simple-select-label">Version</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Version"
            onChange={handleChange}
          >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default LandingPageRadioTwo