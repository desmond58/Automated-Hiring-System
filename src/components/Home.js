import React, {useState} from 'react';
import '../index.css';
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
  MDBInput
} from 'mdb-react-ui-kit';


const Home = (props) => {
    const [statusId, setStatusId] = useState('');
    const [info, setInfo] = useState([]);

    const handleTrackSubmit = (e) => {
      e.preventDefault();

      const formData = {
        statusId: statusId,
        info: info,
      };

      props.onSaveFormData(formData);
      props.onNext();

    };

  return (
    <form onSubmit={handleTrackSubmit}>
    <>
    <MDBNavbar light bgColor='#F1FFEB'>
      
      <MDBContainer fluid>
        <MDBNavbarBrand>
        <img
              src={logo}
              height='100'
              alt=''
              loading='lazy'
            />
            </MDBNavbarBrand>
            <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
             <MDBInput type="text" name="track" id="track" placeholder='Track ID'
                value = {statusId} onChange={(e) => setStatusId(e.target.value)}/>
             <button class="btn btn-sm" style={{ color:'black'}}>
              <MDBIcon icon = 'search'></MDBIcon>
             </button>
            </MDBInputGroup>

      </MDBContainer>

    </MDBNavbar>


     <body>
     <div className='p-5 text-center'>
        <h1 className='mb-3'>Hi Welcome!</h1>
        <h4 className='mb-3'>Please click the button below to submit for an interview!</h4>
        
        
        <MDBBtn outline size = 'lg' type = "submit">
          Apply Now!
        </MDBBtn>
        </div>
     </body>

        

     <MDBFooter className='text-center text-lg-start text-muted' style={{ backgroundColor: "#F1FFEB" }}>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='https://www.facebook.com/HCGrowmax/' className='me-4 text-reset' style={{margin:'10px'}}>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset' style={{margin:'10px'}}>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset' style={{margin:'10px'}}>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset' style={{margin:'10px'}}>
              <MDBIcon fab icon="linkedin" />
            </a>

          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5' >
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" /><b> HUACHANG GROWMAX M SDN BHD</b>

                </h6>

                <p>
                  <MDBIcon icon="home" className="me-2" />
                  : PT12938, 3rd & 4th Floor, Jalan BBN 1/7D, Putra Indah, Putra Nilai, 71800 Negeri Sembilan
                </p>


              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'><b>Industry:</b></h6>
                <p>
                  Algricultural
                </p>
                <h6 className='text-uppercase fw-bold mb-4'><b>Company Size:</b></h6>
                <p>
                  less than 50 employee
                </p>

                <h6 className='text-uppercase fw-bold mb-4'><b>Working Day:</b></h6>
                <p>
                  Monday to Friday
                </p>

              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'><b>Benefits:</b></h6>
                <p>
                  Parking Fee
                </p>
                <p>
                  Medical Leaves
                </p>
                <p>
                  Uniform
                </p>
                <p>
                  Exhibition
                </p>
                <p>
                  Training
                </p>

              </MDBCol>


              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'><b>Contact</b></h6>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  : general@grow-max.com.my.
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

    </form>
  );
}

export default Home;
