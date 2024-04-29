import { Box, Button, Stack, TextField } from '@mui/material';
import React from 'react'

const ChildSimulationConfigFive = () => {
  return (
    <>
      <Box sx={{ marginTop: "20px" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              width: "25ch",
              marginLeft: "40px",
              height: "60px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="RELATED CONTENT COUNT"
            variant="standard"
            defaultValue={10}
          />

          <TextField
            id="standard-basic"
            label="EXTRA RELATED COUNT"
            variant="standard"
            defaultValue={15}
          />

          <TextField
            id="standard-basic"
            label="MAX RELATED COUNT"
            variant="standard"
            defaultValue={15}
          />

          <TextField
            id="standard-basic"
            label="SPAN REPLACEMENT"
            variant="standard"
            defaultValue={30}
          />

          <TextField
            id="standard-basic"
            label="R SCORE CUTOFF"
            variant="standard"
            defaultValue={0.5}
          />

          <TextField
            id="standard-basic"
            label="MAX REPLACEMENT RATE"
            variant="standard"
            defaultValue={0.4}
          />

          <TextField
            id="standard-basic"
            label="ALLOW TOPIC DEPTH"
            variant="standard"
            defaultValue={3}
          />
        </Box>
      </Box>
    </>
  );
}

export default ChildSimulationConfigFive