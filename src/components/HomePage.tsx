"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Button, useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const HomePage = () => {
  // for home page
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const forMobileView = useMediaQuery("(max-width:1200px)");

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#e0e0e0",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for other screen sizes
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          gap: { xs: "20px", md: "100px" }, // Reduce gap for mobile
        }}
      >
        {/* for drop down */}
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">IPL</MenuItem>
              <MenuItem value={10}>HELL</MenuItem>
              <MenuItem value={20}>ANT</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* for switch bar */}
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Development mode" />
        </FormGroup>

        {/* for initialize button */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            backgroundColor: "#124116",
            color: "white",
            borderRadius: "5px",
            marginTop: { xs: "20px", md: "0" }, 
          }}
        >
          <Button variant="contained" sx={{ width: "120px", height: "40px" }}>
            INITIALIZE
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default HomePage;
