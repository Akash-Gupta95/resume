import React from 'react'
import { useContext } from "react";
import FirstPage from '../Component/FirstPage'
import SecondPage from "../Component/SecondPage";
import ThirdPage from "../Component/ThirdPage";
import { multiStepContext } from "../StepContent";
import { Stepper, StepLabel, Step } from "@mui/material";

const Fundation = () => {
    const { currentStep, FinalData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
    }
  }


  return (
    <div>
            <header className="App-header">
        <h3 style={{ color: "red", textDecoration: "underline" }}>ReactJS</h3>
        <div className=" center-stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
            
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>

            <Step>
              <StepLabel></StepLabel>
            </Step>

            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        {showStep(currentStep)}
   
        </div>
        <hr />
      </header>
    
    </div>
  )
}

export default Fundation