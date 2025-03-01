import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography, Box } from "@mui/material";

const steps = ["Personal Info", "Address Details", "Review & Submit"];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <Box sx={{ width: "50%", margin: "auto", padding: "20px" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed!</Typography>
            <Button onClick={handleReset} variant="contained" color="primary" sx={{ mt: 2 }}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography variant="h6">Step {activeStep + 1}: {steps[activeStep]}</Typography>
            <Box sx={{ mt: 3 }}>
              <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 2 }}>
                Back
              </Button>
              <Button onClick={handleNext} variant="contained" color="primary">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default StepperComponent;
