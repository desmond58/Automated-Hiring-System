import React, { useEffect, useState } from 'react';
import Marketing from './Marketing';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
const supabase = createClient(supabaseUrl, supabaseKey);

const Confirmation = ({ combinedFormData, selectedPosition, onSubmit, onNext, onBack }) => {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchTotalCount();
  }, []);

  const fetchTotalCount = async () => {
    try {
      const { data, error } = await supabase
        .from('confirmation_count')
        .select('count')
        .eq('id', 1);

      if (error) {
        console.error('Error retrieving total count:', error.message);
        return;
      }

      if (data.length > 0) {
        setTotalCount(data[0].count);
      }
    } catch (error) {
      console.error('Error retrieving total count:', error.message);
    }
  };

  const updateTotalCount = async (newCount) => {
    try {
      await supabase
        .from('confirmation_count')
        .update({ count: newCount })
        .eq('id', 1);
    } catch (error) {
      console.error('Error updating total count:', error.message);
    }
  };

  const handleSubmit = async () => {
    try {
      const newStatusId = totalCount + 1;

      // Generate the tracking number
      const timestamp = Date.now();
      const trackingNumber = `TR-${timestamp}-${newStatusId}`;

      // Insert the form data along with the generated status ID, tracking number, and submission date into the Supabase table
      const { data, error } = await supabase.from('confirmation').insert([
        {
          ...combinedFormData,
          statusId: newStatusId,
          trackingNumber,
          submissionDate: new Date().toISOString(),
          status: 'PROGRESS',
        },
      ]);

      if (error) {
        console.error('Error inserting data:', error.message);
        return;
      }

      console.log('Data inserted successfully:', data);
      // Perform any further actions after successful submission
      // ...

      onSubmit(); // Call the onSubmit function to notify the parent component

      await updateTotalCount(newStatusId); // Update the count in bigfive_count table

      onNext(); // Call the onNext function to navigate to the next page
    } catch (error) {
      console.error('Error inserting data:', error.message);
    }
  };

  const handleBack = () => {
    onBack(); // Call the onBack function to navigate back to the previous page
  };
  return (
    <div>
      <h2>Confirmation Page</h2>
      <p>First Name: { combinedFormData.firstName}</p>
      <p>Middle Name: { combinedFormData.middleName}</p>
      <p>Last Name: { combinedFormData.lastName}</p>
      <p>Gender: { combinedFormData.gender}</p>
      <p>Date of Birth: { combinedFormData.dob}</p>
      <p>Age: { combinedFormData.age}</p>
      <p>NRIC: { combinedFormData.nric}</p>
      <p>Place of Birth: { combinedFormData.pob}</p>
      <p>Nationality: { combinedFormData.nationality}</p>
      <p>Religion: { combinedFormData.religion}</p>
      <p>Race: { combinedFormData.race}</p>
      <p>Language Spoken: { combinedFormData.languageSpoken}</p>
      <p>Language Written: { combinedFormData.languageWritten}</p>
      <p>Working Skill Experiences: { combinedFormData.workingSkillExperiences}</p>
      <p>Current Employer: { combinedFormData.currentEmployer}</p>
      <p>Date of Joining: { combinedFormData.dateofjoining}</p>
      <p>Position: { combinedFormData.position}</p>
      <p>Salary: { combinedFormData.salary}</p>
      <p>Health: { combinedFormData.health}</p>
      <p>Diseases: { combinedFormData.diseases}</p>
      <p>Expected Salary: { combinedFormData.expectedSalary}</p>
      <p>Start Work Date: { combinedFormData.startWorkDate}</p>

        {/* Display position form data */}
        <p>Path : {combinedFormData.pathList}</p>
        <p>Input 1: {combinedFormData.inputp1}</p>
      <p>Input 2: {combinedFormData.inputp2}</p>
      <p>Input 3: {combinedFormData.inputp3}</p>
      <p>Input 4: {combinedFormData.inputp4}</p>
      <p>Input 5: {combinedFormData.inputp5}</p>

      
      <p>Selected Position: {selectedPosition}</p>
 {/* Display marketing form data */}
      <p>SelectedPosition languageList: {combinedFormData.languageList}</p>
      <p>SelectedPosition Input 1: {combinedFormData.input1}</p>
      <p>SelectedPosition Input 2: {combinedFormData.input2}</p>
      <p>SelectedPosition Input 3: {combinedFormData.input3}</p>
      <p>SelectedPosition Input 4: {combinedFormData.input4}</p>
      <p>SelectedPosition Input 5: {combinedFormData.input5}</p>
      <p>SelectedPosition Input 6: {combinedFormData.input6}</p>
      <p>SelectedPosition Input 7: {combinedFormData.input7}</p>
      <p>SelectedPosition Input 8: {combinedFormData.input8}</p>

      <button className='button buttonBack'  onClick={handleBack}>Back</button>
      <button className='button buttonNext'  onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Confirmation;
