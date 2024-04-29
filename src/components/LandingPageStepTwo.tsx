import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react'

const LandingPageStepTwo = () => {

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px"}}>
          <FormControl sx={{width: "400px"}}>
            <InputLabel id="demo-simple-select-label">Category Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>essay</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      
    </>
  );
}

export default LandingPageStepTwo