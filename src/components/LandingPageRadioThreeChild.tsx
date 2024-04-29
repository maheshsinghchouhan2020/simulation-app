import { Box, Button, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import LandingPageStepTwo from './LandingPageStepTwo';
import LandingPageStepOne from './LandingPageStepOne';
import LandingPageStepThree from './LandingPageStepThree';
import LandingPageStepFour from './LandingPageStepFour';
import LandingPageStepFive from './LandingPageStepFive';

const steps = [
  "Add Category Details",
  "Add Category Type",
  "Add Essay Type",
  "Add Query Info",
  "Preview Query",
  "Add Display BreakUp",
];

const LandingPageRadioThreeChild = () => {

    const [value, setValue] = React.useState(0);
    const [age, setAge] = React.useState("");
    const [activeStep, setActiveStep] = useState(0);
    const [stepOne, setStepOne] = useState ("")

        const handleBack = () => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        const handleNext = () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };

  return (
    <>
      <Box sx={{}}> 
        <Typography
          sx={{
            fontWeight: 500,
            marginLeft: "40px",
          }}
        >
          Current Version-1
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "30px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button variant="contained" disabled>
              SAVE LANDING PAGES CONFIG
            </Button>

            <Button variant="contained" disabled>
              SAVE AND TRIGGER SIMULATION
            </Button>
          </Stack>
        </Box>

        <Box sx={{ color: "#004d40", fontWeight: 500, marginLeft: "180px" }}>
          ADD A PAGE
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "60px",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                width: "12ch",
                marginLeft: "45px",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="PAGE ID" variant="standard" />

            <TextField
              id="standard-basic"
              label="PAGE NAME"
              variant="standard"
            />

            <TextField id="standard-basic" label="DFI" variant="standard" />

            <TextField
              id="standard-basic"
              label="PAGE CONTENT"
              variant="standard"
            />
          </Box>

          <Stack spacing={2} direction="row">
            <Button variant="outlined">ADD CATEGORY</Button>
            <Button variant="outlined">SAVE PAGE</Button>
            <Button variant="outlined">REMOVE PAGE</Button>
          </Stack>
        </Box>

        {value === 0 && (
          <>
            <Box sx={{ width: "100%", marginTop: "80px" }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            {activeStep === 0 && <LandingPageStepOne />}
            {activeStep === 1 && <LandingPageStepTwo />}
            {activeStep === 2 && <LandingPageStepThree />}
            {activeStep === 3 && <LandingPageStepFour />}
            {activeStep === 4 && <LandingPageStepFive />}
            {/* {activeStep === 5 && <LandingPageStepsix />} */}

            {/* {activeStep === 0 && <ChildSimulationConfifOne />} */}

            {activeStep === 0 && (
              <Box
                sx={{ color: "gray", marginLeft: "30px", marginTop: "30px" }}
              >
                Category Description
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                paddingTop: "30px",
                paddingLeft: "30px",
              }}
            >
              <Stack spacing={2} direction="row">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>

                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>

                <Button variant="contained">Cancel</Button>
              </Stack>
            </Box>
          </>
        )}

        <Button variant="outlined" sx={{ marginTop: "20px" }}>
          GO BACK
        </Button>
      </Box>
    </>
  );
}

export default LandingPageRadioThreeChild