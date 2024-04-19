import React, { useState , createContext } from 'react'

import App from './App';
export const multiStepContext = createContext();

export const StepContent = () => {
    const [currentStep , setStep] = useState(1);
    const [userData  , setUsrData] = useState([]);
    const [FinalData  , setFinalData] = useState([]);

    function submitData(){
        setFinalData(FinalData => [...FinalData, userData]);
        setUsrData([]);
        setStep(1);
    }

  return (
    <div>
      <multiStepContext.Provider value={{currentStep, setStep, userData, setUsrData, FinalData, setFinalData , submitData}}>
        <App />
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContent