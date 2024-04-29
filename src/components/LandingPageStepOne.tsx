import { Box, TextField } from '@mui/material';
import React from 'react'

const LandingPageStepOne = () => {
  return (
    <>
      <Box sx={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Category ID"
            variant="outlined"
          />
          <TextField
            id="filled-basic"
            label="Category Name"
            variant="outlined"
          />
          <TextField id="standard-basic" label="Order" variant="outlined" />
        </Box>

        
      </Box>
    </>
  );
}

export default LandingPageStepOne