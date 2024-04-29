"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
// import { Typography } from '@mui/material';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { yellow } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import ChildSimulationConfigTwo from "@/components/ChildSimulationConfigTwo";
import ChildSimulationConfifOne from "@/components/ChildSimulationConfifOne";
import ChildSimulationConfigThree from "@/components/ChildSimulationConfigThree";
import ChildSimulationConfigFour from "@/components/ChildSimulationConfigFour";
import ChildSimulationConfigFive from "@/components/ChildSimulationConfigFive";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";


const steps = [
  "Select Creation Mode",
  "Add Rating Weights",
  "Add Exponential Weights",
  "Add Quality Weights",
  "Add Other Parameters",
];

const SimulationConfig = () => {
  // for back and next buton
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // for create and view
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // for view
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 4,
    maxColumns: 6,
  });

   const handleReset = () => {
     setActiveStep(0);
   };
  

  return (
    <>
      <Box
        sx={{
          height: "110vh",
          width: "100%",
          backgroundColor: "#e0e0e0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* for create portion */}
        <Box
          sx={{
            height: "90vh",
            width: "95%",
            bgcolor: "white",
            flexDirection: isMobile ? "column" : "row",
            overflowY: "auto",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          {/* for create and view */}
          <Box sx={{ width: "auto" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              sx={{ }}
            >
              <Tab label="CREATE" sx={{ width: "1200px" }} />
              <Tab label="VIEW" sx={{ width: "1200px" }} />
            </Tabs>
          </Box>
          {/* Conditional rendering based on the selected tab */}
          {value === 0 && (
            <>
              <Box sx={{ width: "100%", marginTop: "50px" }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>

              {activeStep === steps.length && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      marginTop: "2rem",
                      marginLeft: "40px",
                    }}
                  >
                    All Steps Completed !
                  </Box>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      marginLeft: "40px",
                    }}
                    variant="outlined"
                    onClick={handleReset}
                  >
                    {" "}
                    Reset
                  </Button>
                </>
              )}

              <Typography
                // variant="h1"
                sx={{
                  paddingTop: "60px",
                  // paddingLeft: "40px",
                  marginLeft: "40px",
                  fontWeight: 500,
                }}
              >
                Current Version-1.0
              </Typography>

              {activeStep === steps.length && (
                <Typography sx={{ marginLeft: "40px", marginTop: "30px" }}>
                  Unknown Step Index
                </Typography>
              )}

              {activeStep === 0 && <ChildSimulationConfifOne />}
              {activeStep === 1 && <ChildSimulationConfigTwo />}
              {activeStep === 2 && <ChildSimulationConfigThree />}
              {activeStep === 3 && <ChildSimulationConfigFour />}
              {activeStep === 4 && <ChildSimulationConfigFive />}

              {/* -------------------------------------------------------------------------- */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "8px",
                  mt: isMobile ? 2 : 5, // Adjust margin for mobile view
                  marginLeft: isMobile ? "0px" : "40px", // Adjust margin for mobile view
                }}
              >
                <Button
                  sx={{ border: "1px solid" }}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>

                {activeStep === steps.length - 1 ? (
                  <>
                    <Button variant="contained" onClick={handleNext}>
                      SAVE SIMULATION CONFIG
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                      SAVE & TRIGGER SIMULATION CONFIG
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={activeStep === steps.length}
                  >
                    Next
                  </Button>
                )}
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

export default SimulationConfig;
