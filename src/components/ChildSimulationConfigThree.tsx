import { Box, TextField } from '@mui/material';
import React from 'react'

const ChildSimulationConfigThree = () => {
  return (
    <>
      <Box sx={{ marginTop: "20px" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "25ch", marginLeft: "45px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="FOR CONVERSION"
            variant="standard"
            defaultValue={1}
          />

          <TextField
            id="standard-basic"
            label="FOR TRAFFIC BASIC"
            variant="standard"
            defaultValue={1}
          />

          <TextField
            id="standard-basic"
            label="FOR TRAFFIC RATIO"
            variant="standard"
            defaultValue={1}
          />

          <TextField
            id="standard-basic"
            label="FOR PRIMARY"
            variant="standard"
            defaultValue={5}
          />
        </Box>
      </Box>
    </>
  );
}

export default ChildSimulationConfigThree