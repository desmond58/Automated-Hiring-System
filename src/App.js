import React, { useState } from "react";

import Home from "./components/Home"
import Big5 from "./components/Big5Personalities"
import PersonalDetails from './components/PersonalDetails'
import PositionForm from './components/PositionForm'

import MarketingConsultant from "./components/MarketingConsultant"
import BusinessAdministrative from "./components/BusinessAdmin";
import Sales from "./components/Sales"
import HumanResources from "./components/HumanResources"
import Marketing from "./components/Marketing"
import AdminExecutive from "./components/AdminExecutive"
import Accounting from "./components/Accounting"


import Confirmation from "./components/Confirmation"

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

  const handlePositionForm = () => {
    setStep(step - 2);
  }

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

    {step === 4 && (
      <PositionForm 
      onSaveFormData = {handleSaveFormData}
      onNext = {handleNext}
      onBack = {handlePositionForm}
      onPositionChange = {handlePositionChange} />
    )}

    {step === 5 && position === "Marketing Coordinator" &&(
      <MarketingConsultant onPositionChange={handlePositionChange} 
      onSaveFormData={handleSaveFormData}
      onNext={handleNext}
      onBack={handleBack}   /> 
    )}

    {step === 5 && position === "Business Administrative" &&(
      <BusinessAdministrative onPositionChange={handlePositionChange} 
      onSaveFormData={handleSaveFormData}
      onNext={handleNext}
      onBack={handleBack}   /> 
    )}

   {step === 5 && position === "Sales" &&(
      <Sales onPositionChange={handlePositionChange} 
      onSaveFormData={handleSaveFormData}
      onNext={handleNext}
      onBack={handleBack}   /> 
    )}

   {step === 5 && position === "HumanResources" &&(
      <HumanResources onPositionChange={handlePositionChange} 
      onSaveFormData={handleSaveFormData}
      onNext={handleNext}
      onBack={handleBack}   /> 
    )}

  {step === 5 && position === "Marketing" &&(
      <Marketing onPositionChange={handlePositionChange} 
      onSaveFormData={handleSaveFormData}
      onNext={handleNext}
      onBack={handleBack}   /> 
    )}

  {step === 5 && position === "Admin Executive" &&(
      <AdminExecutive onPositionChange={handlePositionChange} 
      onSaveFormData={handleSaveFormData}
      onNext={handleNext}
      onBack={handleBack}   /> 
    )}

  {step === 5 && position === "Accounting" &&(
      <Accounting onPositionChange={handlePositionChange} 
      onSaveFormData={handleSaveFormData}
      onNext={handleNext}
      onBack={handleBack}   /> 
    )}



    { step === 7 && (
      <Confirmation  onPositionChange={handlePositionChange} 
      onSaveFormData={handleSaveFormData}
      onNext={handleNext}
      onBack={handleBack}
      />

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