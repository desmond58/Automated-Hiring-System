import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import logo from '../images/huachanglogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  MDBIcon
} from 'mdb-react-ui-kit';

const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
const supabase = createClient(supabaseUrl, supabaseKey);
const TrackingNumberPage = ({ onBack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  useEffect(() => {
    fetchTrackingNumber();
  }, []);

  const fetchTrackingNumber = async () => {
    try {
      // Retrieve the latest tracking number from Supabase
      const { data, error } = await supabase
        .from('confirmation')
        .select('trackingNumber')
        .order('id', { ascending: false })
        .limit(1);

      if (error) {
        console.error('Error retrieving tracking number:', error);
        return;
      }

      if (data && data.length > 0) {
        const latestTrackingNumber = data[0].trackingNumber;
        setTrackingNumber(latestTrackingNumber);
      }
    } catch (error) {
      console.error('Error retrieving tracking number:', error);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(trackingNumber);
    toast.success('Copied to clipboard!', { autoClose: 500 });
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



      <div className='trackContainer'>
        <div className='formBorder'>
          <div className='trackContainer'>
            <div className='text-center p-4'>
              <h1>Your Tracking Number is: </h1>
              <br />
              <input className = "inputcss"value={trackingNumber} disabled></input>             
              <button className="trackButton track btn-sm" onClick={handleCopyClick}><MDBIcon far icon="copy" /></button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <br />
        <div class="d-flex justify-content-center">
          <button className='button buttonNext' onClick={onBack}>
            Home
          </button>
        </div>


      </div>



      <MDBFooter style={{ backgroundColor: "#F1FFEB" }} className='fixed-bottom'>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          HUACHANG GROWMAX M SDN BHD
        </div>
      </MDBFooter>
    </>
  );
};

export default TrackingNumberPage;
