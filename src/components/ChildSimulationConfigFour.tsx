import { Box, TextField } from '@mui/material';
import React from 'react'

const ChildSimulationConfigFour = () => {
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
            label="NUM TOP DCS RESULTS"
            variant="standard"
            defaultValue={80}
          />

          <TextField
            id="standard-basic"
            label="DCS SCORE"
            variant="standard"
            defaultValue={1.2}
          />

          <TextField
            id="standard-basic"
            label="CONVERSION SCORE"
            variant="standard"
            defaultValue={2}
          />

          <TextField
            id="standard-basic"
            label="PREDICTED PRIMARY REGION SCORE"
            variant="standard"
            defaultValue={1.5}
          />
        </Box>
      </Box>
    </>
  );
}

export default ChildSimulationConfigFour