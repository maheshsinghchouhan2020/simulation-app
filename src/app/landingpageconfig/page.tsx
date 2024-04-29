"use client";

import LandingPageRadioThree from "@/components/LandingPageRadioThree";
import LandingPageRadioTwo from "@/components/LandingPageRadioTwo";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import React, { useState } from "react";

const LandingPageConfig = () => {
  const [value, setValue] = React.useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [radioControl, setRadioControl] = useState("Add New ");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioControl(event.target.value);
  };

  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <>
      <Box
        sx={{
          height: "195vh",
          width: "100%",
          backgroundColor: "#e0e0e0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          // paddingBottom: "200px"
        }}
      >
        {/* for create portion */}
        <Box
          sx={{
            height: "175vh",
            width: "95%",
            backgroundColor: "white",
            overflow: "hidden",
            marginTop: "150px",
            marginBottom: "150px",
          }}
        >
          {/* for create and view */}
          <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="CREATE" sx={{ width: "50%" }} />
              <Tab label="VIEW" sx={{ width: "50%" }} />
            </Tabs>
          </Box>
          {/* for create screen */}
          {value === 0 && (
            <>
              <FormControl
                sx={{
                  // height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "yellow",
                  // height: "160px",
                  paddingTop: "100px",
                }}
              >
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="AddNew"
                  onChange={handleRadioChange}
                  value={radioControl}
                >
                  <FormControlLabel
                    value="AddNew"
                    control={<Radio />}
                    label="Add New Config"
                    // defaultValue={"AddNew"}
                  />
                  <FormControlLabel
                    value="Addradiosecond"
                    control={<Radio />}
                    label="Add From Existing Config"
                  />

                  <FormControlLabel
                    value="Addradiothird"
                    control={<Radio />}
                    label="Edit Existing Config"
                  />
                </RadioGroup>
              </FormControl>

              {radioControl === "Addradiosecond" && <LandingPageRadioTwo />}
              {radioControl === "Addradiothird" && <LandingPageRadioThree />}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  // paddingTop: "60px",
                  paddingLeft: "30px",
                  paddingTop: "110px",
                }}
              >
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                </Stack>
              </Box>
            </>
          )}{" "}
          {value === 1 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "90%",
                }}
              >
                <DataGrid
                  {...data}
                  loading={loading}
                  slots={{ toolbar: GridToolbar }}
                />
              </div>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default LandingPageConfig;
