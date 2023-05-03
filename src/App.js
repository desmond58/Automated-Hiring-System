import React, { useState } from "react";

import Home from "./Home";
import Big5 from "./Big5Personalities";
import PersonalDetails from './PersonalDetails'

const App = () => {

  const [position, setPosition] = useState("");
  const [formData, setFormData] = useState({});

  const [step,setStep] = useState(1);

  const handleSaveFormData = (data) => {
    setFormData({ ...formData, ...data});
  };

  const handleNext = () => {
    setStep(step + 1);
  }

  const handleBack = () => {
    setStep(step - 1);
  };

  const handlePositionChange = (selectedPosition) => {
    setPosition(selectedPosition);
  };

  return (

    <>

    {step === 1 && (
      <Home onSaveFormData = {handleSaveFormData} 
      onNext = {handleNext} 
      onBack = {handleBack} 
      step = {step} />
    )}

    {step === 2 && (
      <PersonalDetails step = {step}
      onSaveFormData = {handleSaveFormData}
      onNext = {handleNext}
      setStep = {setStep} />
    )}

    {step === 3 && (
      <Big5 onSaveFormData = {handleSaveFormData}
      onNext = {handleNext}
      onBack = {handleBack}
      onPositionChange = {handlePositionChange} />

    )}


    {/* <Router>
      <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/Big5' element = {<Big5 />} />
      <Route path = '/PersonalDetails' element = {<PersonalDetails />} />

      </Routes>
     
    </Router> */}
    </>
  )
}



export default App;