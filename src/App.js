import React, { useState } from 'react';
import Home from './components/Home';
import Big5Personalities from './components/Big5Personalities';
import PersonalDetails from './components/PersonalDetails';
import PositionForm from './components/PositionForm';
import MarketingConsultant from './components/MarketingConsultant';
import BusinessAdministrative from './components/BusinessAdmin';
import Sales from './components/Sales';
import HumanResources from './components/HumanResources';
import Marketing from './components/Marketing';
import AdminExecutive from './components/AdminExecutive';
import Accounting from './components/Accounting';
import Confirmation from './components/Confirmation';
import TrackingNumberPage from './components/TrackingNumberPage';
import { createClient } from '@supabase/supabase-js';
import SearchResultPage from './components/SearchResultPage';
import BigFiveCalculator from './components/BigFiveCalculator';

const App = () => {
  const [position, setPosition] = useState('');
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const [positionFormData, setPositionFormData] = useState({});
  const [TrackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState('');
  const [generatedId, setGeneratedId] = useState(null);

  const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const handleTrackSubmit = async (trackingNumber) => {
    try {
      // Perform the Supabase API request to fetch the status from the 'confirmation' table
      const { data: confirmationData, error: confirmationError } = await supabase
        .from('confirmation')
        .select('status')
        .eq('trackingNumber', trackingNumber)
        .limit(1);
  
      // Perform the Supabase API request to fetch the status from the 'bigfive' table
      const { data: bigfiveData, error: bigfiveError } = await supabase
        .from('bigfive')
        .select('status')
        .eq('trackingNumber', trackingNumber)
        .limit(1);
  
      if (confirmationError) {
        console.error('Error retrieving status from confirmation table:', confirmationError);
        return;
      }
  
      if (bigfiveError) {
        console.error('Error retrieving status from bigfive table:', bigfiveError);
        return;
      }
  
      if (confirmationData.length === 0 && bigfiveData.length === 0) {
        console.log('No matching tracking number found');
        return;
      }
  
      const retrievedStatus = confirmationData.length > 0 ? confirmationData[0].status : bigfiveData[0].status;
  
      console.log('Retrieved status:', retrievedStatus);
  
      // Update the status in the state or handle the response as needed
      setStatus(retrievedStatus);
      handleStepChange(8, trackingNumber);
    } catch (error) {
      console.error('Error retrieving status:', error);
    }
  };
  
  const handleStepChange = (newStep, trackingNumber) => {
    setStep(newStep);
    setTrackingId(trackingNumber); // Set the trackingNumber in the state
  };

  const handleSaveFormData = (data) => {
    setFormData({ ...formData, ...data });
  };  
  
  const handleGenerateId = (id) => {
    setGeneratedId(id);
    setStep(10); // Move to step 10 (BigFiveCalculator)
  };

  const handleBigFiveCalculator = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
    }));
    setStep(10); // Move to step 10 (BigFiveCalculator)
  };
  
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleBackHome = () => {
    setStep(1);
  };

  const handlePositionForm = () => {
    setStep(step - 2);
  };

  const handlePositionChange = (selectedPosition) => {
    setPosition(selectedPosition);
  };

  return (
    <>
      {step === 1 && (
        <Home
          onSaveFormData={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
          onTrackSubmit={handleTrackSubmit}
          step={step}
          setStep={setStep}
        />
      )}

      {step === 2 && (
        <PersonalDetails
          onSaveFormData={handleSaveFormData}
          step={step}
          setStep={setStep}
          onNext={handleNext}
          onBack={handleBack}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 3 && (
        <Big5Personalities
          supabase={supabase}
          onGenerateId={handleGenerateId}
          onNext={handleBigFiveCalculator}
          onBack={handleBack}
          personalDetails={formData}
    
        />
      )}

{step === 10 &&  (
        <BigFiveCalculator id={generatedId} 
        onBack={handleBackHome} />
      )}

      {step === 4 && (
        <PositionForm
          personalDetails={formData}
          onSubmit={handleSaveFormData}
          onNext={handleNext}
          onBack={handlePositionForm}
          onPositionChange={handlePositionChange}
          setPositionFormData={setPositionFormData}
        />
      )}

      {step === 5 && position === 'Marketing Consultant' && (
        <MarketingConsultant
          position={position}
          formData={formData}
          onPositionChange={handlePositionChange}
          onSaveFormData={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 5 && position === 'Business Administrative' && (
        <BusinessAdministrative
          position={position}
          formData={formData}
          onPositionChange={handlePositionChange}
          onSaveFormData={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 5 && position === 'Sales' && (
        <Sales
          position={position}
          formData={formData}
          onPositionChange={handlePositionChange}
          onSaveFormData={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 5 && position === 'HumanResources' && (
        <HumanResources
          position={position}
          formData={formData}
          onPositionChange={handlePositionChange}
          onSaveFormData={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 5 && position === 'Marketing' && (
        <Marketing
          combinedFormData={formData}
          position={position}
          formData={formData}
          onPositionChange={handlePositionChange}
          onSaveFormData={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 5 && position === 'Admin Executive' && (
        <AdminExecutive
          position={position}
          formData={formData}
          onPositionChange={handlePositionChange}
          onSaveFormData={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 5 && position === 'Accounting' && (
        <Accounting
          onPositionChange={handlePositionChange}
          onSaveFormData={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 6 && (
        <Confirmation
          combinedFormData={formData}
          selectedPosition={position}
          onSubmit={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 7 && (
        <TrackingNumberPage
          combinedFormData={formData}
          selectedPosition={position}
          trackingId={TrackingId}
          onBack={handleBackHome}
        />
      )}

      {step === 8 && <SearchResultPage status={status} trackingNumber = {TrackingId}
          onBack={handleBackHome}/>}

      {step === 9 && (
        <Confirmation
          combinedFormData={formData}
          selectedPosition={position}
          onSubmit={handleSaveFormData}
          onNext={handleNext}
          onBack={handleBack}
          trackingId={TrackingId}
        />
      )}
    </>
  );
};

export default App;
