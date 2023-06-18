import React, { useState } from 'react';
import '../index.css';
import '../button.css';

import logo from '../images/huachanglogo.png';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBInput,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import { createClient } from '@supabase/supabase-js';

const Home = (props) => {
  const [trackingNumber, settrackingNumber] = useState('');
  const [status, setStatus] = useState('');


  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      trackingNumber: trackingNumber,
      status: status,
    };

    props.onSaveFormData(formData);
    props.onNext();
  };
  const handleTrackSubmit = (e) => {
    e.preventDefault();

    props.onTrackSubmit(trackingNumber);


  };
  return (

    <>
      <MDBNavbar light bgColor='white' sticky>
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <img
              src={logo}
              height='85'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <MDBInput
              type="text"
              name="track"
              id="track"
              placeholder='Track ID'
              value={trackingNumber}
              onChange={(e) => settrackingNumber(e.target.value)}
            />
            <button className="trackButton track btn-sm" onClick={handleTrackSubmit}>
              <MDBIcon icon='search' size='xs'></MDBIcon>
            </button>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>


      <div className='homeContainer text-center'>
        <h1 className='mb-3'>Hi Welcome!</h1>
        <h4 className='mb-3'>Please click the button below to submit for an interview!</h4>
        <button className="button button1" type="submit" onClick={handleFormSubmit}>
          <span>APPLY NOW!</span>
        </button>
      </div>


      <MDBFooter className='text-center text-lg-start text-muted' style={{ backgroundColor: "#F1FFEB" }}>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='https://www.facebook.com/HCGrowmax/' className='me-4 text-reset' style={{ margin: '10px' }} target='_blank'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='https://api.whatsapp.com/send/?phone=60133626778&text=Hi%2C+i+am+interested+to+know+more.+%28https%3A%2F%2Fwww.hcgm.com.my%29&type=phone_number&app_absent=0' className='me-4 text-reset' style={{ margin: '10px' }} target='_blank'>
              <MDBIcon fab icon="whatsapp" />
            </a>
            <a href='https://www.google.com/maps?q=2.820781,101.790268' className='me-4 text-reset' style={{ margin: '10px' }} target='_blank'>
              <MDBIcon fas icon="map-marker-alt" />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  <b> HUACHANG GROWMAX M SDN BHD</b>
                </h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  : PT12938, 3rd & 4th Floor, Jalan BBN 1/7D, Putra Indah, Putra Nilai, 71800 Negeri Sembilan
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'><b>Industry:</b></h6>
                <p>Algricultural</p>
                <h6 className='text-uppercase fw-bold mb-4'><b>Company Size:</b></h6>
                <p>less than 50 employee</p>
                <h6 className='text-uppercase fw-bold mb-4'><b>Working Day:</b></h6>
                <p>Monday to Friday</p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'><b>Benefits:</b></h6>
                <p>Parking Fee</p>
                <p>Medical Leaves</p>
                <p>Uniform</p>
                <p>Exhibition</p>
                <p>Training</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'><b>Contact</b></h6>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  : <a href="mailto:general@grow-max.com.my.">general@grow-max.com.my.</a>
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" />: 06-7991796
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" />: 1700-81-5778
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          HUACHANG GROWMAX M SDN BHD
        </div>
      </MDBFooter>
    </>

  );
};

export default Home;
