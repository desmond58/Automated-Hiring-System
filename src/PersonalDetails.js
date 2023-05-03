import React, {useRef, useState} from 'react';
import logo from './images/huachanglogo.png';

import Popup from "./Popup";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBRadio,
  MDBTable, 
  MDBTableHead, 
  MDBTableBody,
  MDBTextArea,
  MDBFooter,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTooltip
} from 'mdb-react-ui-kit';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const PersonalDetails = ({step, setStep, formData, setFormData}) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleNext = () => {
      setShowPopup(true)
    }

    const backhandler = () => {
      setStep(1);
    }

    const handleNOClick = () => {
      setStep(3);
    }
    
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(true);
    
    const handleClose = (e) => {
      e.preventDefault();
      setBasicModal(false);
    }
    

  return (

  <>
  
  <body>
  <div class="navbar">
        <ul class="nav-list">
            <div class="logo">
                <a href='./'>
                 <img src= {logo} />
                 </a>
            </div>
                   
        </ul>
  
            <div class="rightNav">
              <h1>Personal Details</h1>
            </div>
    </div>

    <div style={{margin:'100px'}}>
     <form>
      <h2><b>Personal Details</b></h2>
      <p>Please TICK and provide necessary information</p>
    <hr />
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Middle name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
        <MDBCol>
          <p>Gender</p>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Male" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Female" inline defaultChecked/>
        </MDBCol>
        <MDBCol>
        <p>Date Of Birth</p>
        <MDBInput id='form6Example1' type = "date"  />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Age' />
        </MDBCol>
        </MDBRow>

      <MDBRow className='mb-4'>
      
      </MDBRow>
     
      <MDBInput wrapperClass='mb-4' id='form6Example3' label='NRIC' />
      <MDBRow>
        <MDBCol>
        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Place Of Birth' />
        </MDBCol>
        <MDBCol>
        <p>Nationality</p>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Malaysian" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Other" inline defaultChecked/>
        </MDBCol>

      </MDBRow>
      
      <MDBRow className='mb-4'>
        <MDBCol>
          <p>Religion</p>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Islam" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Buddha" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Hindu" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Kristian" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Sikh" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Other" inline defaultChecked/>
        </MDBCol>
        <MDBCol>
        <p>Gender</p>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Malay" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Chinese" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Indian" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Orang Asli" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Other" inline defaultChecked/>
        </MDBCol>
        </MDBRow>
        
        <hr />
        <h2><b>Education / Academic Qualification</b></h2>
        <p>Please attach copies of certificate</p>

        <hr />

        <MDBTable bordered>
      <MDBTableHead>
        <tr>
          <th scope='col'></th>
          <th scope='col'>Establishment Name</th>
          <th scope='col'>From (Year)</th>
          <th scope='col'>To (Year)</th>
          <th scope='col'>Field of Studies (e.g Business)</th>
          <th scope='col'>Qualifications (e.g SPM)</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>University/ College/ Technical</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>University/ College/ Technical</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>Secondary</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

    <hr />
        <h2>Language</h2>
        <hr />

        <MDBRow>
        <MDBCol>
        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Language(s) Spoken ' />
        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Language(s) Written ' />
        </MDBCol>
        </MDBRow>

        <hr />
        <h2>Working Skill and Experiences</h2>
        <hr />
        <MDBRow>
        <MDBCol>
        <MDBTextArea label='Please provide information on your experiences above.' placeholder='Type here...' id='textAreaExample' rows={5} />        
        </MDBCol>
        </MDBRow>

        <hr />
        <h2>Current Company</h2>
        <hr />
        <MDBRow>
        <MDBCol>
            <p>Current Employer</p>
            <MDBInput wrapperClass='mb-4' id='form6Example4' label='Name of current employer or NONE if not employed ' />
        </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol>
          <MDBInput id='form6Example1' type = "date" label='Date of joining' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Position' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Salary' />
        </MDBCol>
        </MDBRow>
        
        <hr />
        <h2>Employment History</h2>
        <hr />

        <MDBTable bordered>
      <MDBTableHead>
        <tr>
          <th scope='col'></th>
          <th scope='col'>Name of Employer</th>
          <th scope='col'>Position Held</th>
          <th scope='col'>From</th>
          <th scope='col'>To</th>
          <th scope='col'>Reason of Leaving</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

    <hr />
    <h2>Health Condition and Status</h2>
    <p>please TICK and provide necessary information</p>
    <hr />

    <MDBRow className='mb-4'>
        <MDBCol>
          <p>Health</p>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Good" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="Bad" inline defaultChecked/>
          </MDBCol>
          <MDBCol>
          <MDBInput id='form6Example2' label='If chosen Bad, what are the diseases?' />
          </MDBCol>
          </MDBRow>

        <hr />
        <h2>Relatives working in Huachang Growmax</h2>
        <hr />

        <MDBTable bordered>
      <MDBTableHead>
        <tr>
          <th scope='col'></th>
          <th scope='col'>Name</th>
          <th scope='col'>Branch/Department</th>
          <th scope='col'>Gender (M/F)</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
          <td><MDBInput id='form6Example2'/>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

<br></br><br></br>
    <MDBRow>
    <MDBCol>
        <MDBInput id='form6Example2' label='Expected Salary' />
    </MDBCol>
    <MDBCol>
        <MDBInput id='form6Example2' label='If offered this job, when can you start work?' />
    </MDBCol>
    </MDBRow>
    <br></br><br></br>

    <div class="d-flex justify-content-center">
    <MDBRow>
    <MDBCol>
      <MDBBtn className='mb-4' onClick={backhandler} color='primary' >
        Back
      </MDBBtn>
      </MDBCol>
      <MDBCol>
      <MDBBtn className='mb-4' type='button' onClick={toggleShow} color='primary'>
        Next
      </MDBBtn>

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader backgroundColor="green">
              <MDBModalTitle>Before we continue...</MDBModalTitle>
              <MDBBtn className="btn-close" color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><h4 style={{textAlign:'center'}}>Do you have a job position in mind that you wanted to apply for?</h4></MDBModalBody>

            <MDBModalFooter style={{justifyContent:"center"}}>

            <MDBTooltip tag='a' title = "Take the Big Five Personalities test to find out which position is suitable for you!">  
            <MDBBtn color='danger' onClick={handleNOClick}>No</MDBBtn>
            </MDBTooltip>

            <MDBTooltip tag='a' title = "Proceed to next step.">  
            <MDBBtn color='green'>Yes</MDBBtn>
            </MDBTooltip>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      </MDBCol>
      </MDBRow>

      

      
      </div>
    </form>
    </div>
    </body>

    <MDBFooter style={{ backgroundColor: "#F1FFEB" }}>
    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          HUACHANG GROWMAX M SDN BHD
        </div>
        </MDBFooter>


    </>
  );
  
}

export default PersonalDetails;

