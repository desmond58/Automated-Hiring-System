import React, {useRef, useState} from 'react';
import logo from '../images/huachanglogo.png';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
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

    const backhandler = () => {
      setStep(1);
    }

    const handleNOClick = () => {
      setStep(3);
    }

    const handleYESClick = () => {
      setStep(4);
    }
    
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(true);
    
    const handleClose = (e) => {
      e.preventDefault();
      setBasicModal(false);
    }
    

  return (
  <>
   <MDBNavbar sticky bgColor='#F1FFEB'>
        <MDBContainer className='justify-content-center'>
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='100'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    <div style={{margin:'100px', marginTop:'50px'}}>
     <form>
      <h2><b>Personal Details</b></h2>
      <p>Please TICK and provide necessary information</p>
    <hr />
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='firstName' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='middleName' label='Middle name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='lastName' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
        <MDBCol>
          <p>Gender</p>
          <form>
          <MDBRadio name="genderRadio" id="genderMale" label="Male" inline defaultChecked/>
          <MDBRadio name="genderRadio" id="genderFemale" label="Female" inline defaultChecked/>
          </form>        
          </MDBCol>
        <MDBCol>
        <p>Date Of Birth</p>
        <MDBInput id='dob' type = "date"  />
        </MDBCol>
        <MDBCol>
          <MDBInput id='age' label='Age' />
        </MDBCol>
        </MDBRow>

      <MDBRow className='mb-4'>
      
      </MDBRow>
     
      <MDBInput wrapperClass='mb-4' id='nric' label='NRIC' />
      <MDBRow>
        <MDBCol>
        <MDBInput wrapperClass='mb-4' id='pob' label='Place Of Birth' />
        </MDBCol>
        <MDBCol>
        <p>Nationality</p>
          <MDBRadio name="NationailityRadio" id="nationMalaysian" label="Malaysian" inline defaultChecked/>
          <MDBRadio name="NationailityRadio" id="nationOther" label="Other" inline defaultChecked/>
        </MDBCol>

      </MDBRow>
      
      <MDBRow className='mb-4'>
        <MDBCol>
          <p>Religion</p>
          <MDBRadio name="ReligionRadio" id="relIslam" label="Islam" inline defaultChecked/>
          <MDBRadio name="ReligionRadio" id="relBuddha" label="Buddha" inline defaultChecked/>
          <MDBRadio name="ReligionRadio" id="relHindu" label="Hindu" inline defaultChecked/>
          <MDBRadio name="ReligionRadio" id="relKristian" label="Kristian" inline defaultChecked/>
          <MDBRadio name="ReligionRadio" id="relSikh" label="Sikh" inline defaultChecked/>
          <MDBRadio name="ReligionRadio" id="relOther" label="Other" inline defaultChecked/>
        </MDBCol>
        <MDBCol>
        <p>Race</p>
          <MDBRadio name="RaceRadio" id="raceMalay" label="Malay" inline defaultChecked/>
          <MDBRadio name="RaceRadio" id="raceChinese" label="Chinese" inline defaultChecked/>
          <MDBRadio name="RaceRadio" id="raceIndian" label="Indian" inline defaultChecked/>
          <MDBRadio name="RaceRadio" id="raceOA" label="Orang Asli" inline defaultChecked/>
          <MDBRadio name="RaceRadio" id="raceOther" label="Other" inline defaultChecked/>
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
          <td><MDBInput id='EstName1'/>
          </td>
          <td><MDBInput id='From1'/>
          </td>
          <td><MDBInput id='To1'/>
          </td>
          <td><MDBInput id='FOS1'/>
          </td>
          <td><MDBInput id='Qual1'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>University/ College/ Technical</th>
          <td><MDBInput id='EstName2'/>
          </td>
          <td><MDBInput id='From2'/>
          </td>
          <td><MDBInput id='To2'/>
          </td>
          <td><MDBInput id='FOS2'/>
          </td>
          <td><MDBInput id='Qual2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>Secondary</th>
          <td><MDBInput id='EstName3'/>
          </td>
          <td><MDBInput id='From3'/>
          </td>
          <td><MDBInput id='To3'/>
          </td>
          <td><MDBInput id='FOS3'/>
          </td>
          <td><MDBInput id='Qual3'/>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

    <hr />
        <h2>Language</h2>
        <hr />

        <MDBRow>
        <MDBCol>
        <MDBInput wrapperClass='mb-4' id='languageSpoken' label='Language(s) Spoken ' />
        <MDBInput wrapperClass='mb-4' id='languageWritten' label='Language(s) Written ' />
        </MDBCol>
        </MDBRow>

        <hr />
        <h2>Working Skill and Experiences</h2>
        <hr />
        <MDBRow>
        <MDBCol>
        <MDBTextArea label='Please provide information on your experiences above.' placeholder='Type here...' id='textAreaWorkingSkill' rows={5} />        
        </MDBCol>
        </MDBRow>

        <hr />
        <h2>Current Company</h2>
        <hr />
        <MDBRow>
        <MDBCol>
            <p>Current Employer</p>
            <MDBInput wrapperClass='mb-4' id='currentEmployer' label='Name of current employer or NONE if not employed ' />
        </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol>
          <MDBInput id='dateofjoining' type = "date" label='Date of joining' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='position' label='Position' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='salary' label='Salary' />
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
          <td><MDBInput id='nameOfEmployer1'/>
          </td>
          <td><MDBInput id='positionHeld1'/>
          </td>
          <td><MDBInput id='em_from1'/>
          </td>
          <td><MDBInput id='em_to1'/>
          </td>
          <td><MDBInput id='reasonOfLeaving1'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td><MDBInput id='nameOfEmployer2'/>
          </td>
          <td><MDBInput id='positionHeld2'/>
          </td>
          <td><MDBInput id='em_from2'/>
          </td>
          <td><MDBInput id='em_to2'/>
          </td>
          <td><MDBInput id='reasonOfLeaving2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td><MDBInput id='nameOfEmployer3'/>
          </td>
          <td><MDBInput id='positionHeld3'/>
          </td>
          <td><MDBInput id='em_from3'/>
          </td>
          <td><MDBInput id='em_to3'/>
          </td>
          <td><MDBInput id='reasonOfLeaving3'/>
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
          <MDBRadio name="flexRadioDefault" id="flexRadioGood" label="Good" inline defaultChecked/>
          <MDBRadio name="flexRadioDefault" id="flexRadioBad" label="Bad" inline defaultChecked/>
          </MDBCol>
          <MDBCol>
          <MDBInput id='diseases' label='If chosen Bad, what are the diseases?' />
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
          <td><MDBInput id='rel_name1'/>
          </td>
          <td><MDBInput id='rel_branch1'/>
          </td>
          <td><MDBInput id='rel_gender1'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td><MDBInput id='rel_name2'/>
          </td>
          <td><MDBInput id='rel_branch2'/>
          </td>
          <td><MDBInput id='rel_gender2'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td><MDBInput id='rel_name3'/>
          </td>
          <td><MDBInput id='rel_branch3'/>
          </td>
          <td><MDBInput id='rel_gender3'/>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

<br></br><br></br>
    <MDBRow>
    <MDBCol>
        <MDBInput id='expectedSalary' label='Expected Salary' />
    </MDBCol>
    <MDBCol>
        <MDBInput id='startWorkDate' type = 'date' label='If offered this job, when can you start work?' />
    </MDBCol>
    </MDBRow>
    <br></br><br></br>

    <div class="d-flex justify-content-center">
     <MDBRow>
      <MDBCol>
       <button className='button buttonBack' onClick={backhandler}>
        Back
       </button>
      </MDBCol>
      <MDBCol>
       <button className='button buttonNext' type='button' onClick={toggleShow} color='primary'>
        Next
       </button>
      </MDBCol>
     </MDBRow>

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
            <button className='button buttonNext' color='danger' onClick={handleNOClick}>No</button>
            </MDBTooltip>

            <MDBTooltip tag='a' title = "Proceed to next step.">  
            <button className='button buttonNext' color='green' onClick={handleYESClick}>Yes</button>
            </MDBTooltip>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      
    </div>
    </form>
    </div>

    <MDBFooter style={{ backgroundColor: "#F1FFEB" }}>
    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          HUACHANG GROWMAX M SDN BHD
        </div>
        </MDBFooter>


    </>
  );
  
}

export default PersonalDetails;

