import React, { useEffect, useState } from 'react';
import logo from '../images/huachanglogo.png';
import { createClient } from '@supabase/supabase-js';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
} from 'mdb-react-ui-kit';

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
      alert('Your application has been submitted successfully!')
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
    <>

      <MDBNavbar sticky bgColor='white'>
        <MDBContainer className='justify-content-center'>
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='85'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      <div className='confirmationContainer'>

        <MDBCard alignment='center'>
          <MDBCardHeader><h2><b>Application Intructions</b></h2></MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle></MDBCardTitle>
            <MDBCardText><h4>Please make sure all your responses
              are answered correctly. Click the button below to
              submit this application. After you click the
              "Submit" button you will be given a tracking
              number. We will let you know if you qualify so
              please try to follow the instructions to the
              letter and status. Click the button below to
              submit this application:</h4></MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='text-muted'>
            <div class="d-flex justify-content-center">
              <MDBRow>
                <MDBCol>
                  <button className='button buttonBack' onClick={handleBack}>Back</button>
                </MDBCol>
                <MDBCol>
                  <button className='button buttonNext' onClick={handleSubmit}>Submit</button>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCardFooter>
        </MDBCard>


      </div>

      <MDBFooter style={{ backgroundColor: "#F1FFEB" }} className='fixed-bottom'>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          HUACHANG GROWMAX M SDN BHD
        </div>
      </MDBFooter>
    </>
  );
};

export default Confirmation;
