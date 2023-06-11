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

const PersonalDetails = ({ step, setStep, onSaveFormData }) => {
  const [formData, setFormData] = useState({
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      dob: '',
      age: '',
      nric: '',
      pob: '',
      nationality: '',
      religion: '',
      race: '',
      estName1: '',
      from1: '',
      to1: '',
      fos1: '',
      qual1: '',
      estName2: '',
      from2: '',
      to2: '',
      fos2: '',
      qual2: '',
      estName3: '',
      from3: '',
      to3: '',
      fos3: '',
      qual3: '',
      languageSpoken: '',
      languageWritten: '',
      textAreaWorkingSkill: '',
      currentEmployer: '',
      dateofjoining: '',
      position: '',
      salary: '',
      nameOfEmployer1: '',
      positionHeld1: '',
      em_from1: '',
      em_to1: '',
      reasonOfLeaving1: '',
      nameOfEmployer2: '',
      positionHeld2: '',
      em_from2: '',
      em_to2: '',
      reasonOfLeaving2: '',
      nameOfEmployer3: '',
      positionHeld3: '',
      em_from3: '',
      em_to3: '',
      reasonOfLeaving3: '',
      health: '',
      diseases: '',
      rel_name1: '',
      rel_branch1: '',
      rel_gender1: '',
      rel_name2: '',
      rel_branch2: '',
      rel_gender2: '',
      rel_name3: '',
      rel_branch3: '',
      rel_gender3: '',
      expectedSalary: '',
      startWorkDate: ''
    });
   
const handleFormSubmit = (formData) => {
  onSaveFormData(formData); // Call the onSaveFormData function with the current form data

};

  const backhandler = () => {
    setStep(1);
  };

  const handleNOClick = (event) => {
    event.preventDefault();
    const newFormData = {
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      gender: formData.genderRadio,
      dob: formData.dob,
      age: formData.age,
      nric: formData.nric,
      pob: formData.pob,
      nationality: formData.nationalityRadio,
      religion: formData.religionRadio,
      race: formData.raceRadio,
      estName1: formData.estName1,
      from1: formData.from1,
      to1: formData.to1,
      fos1: formData.fos1,
      qual1: formData.qual1,
      estName2: formData.estName2,
      from2: formData.from2,
      to2: formData.to2,
      fos2: formData.fos2,
      qual2: formData.qual2,
      estName3: formData.estName3,
      from3: formData.from3,
      to3: formData.to3,
      fos3: formData.fos3,
      qual3: formData.qual3,
      languageSpoken: formData.languageSpoken,
      languageWritten: formData.languageWritten,
      textAreaWorkingSkill: formData.textAreaWorkingSkill,
      currentEmployer: formData.currentEmployer,
      dateofjoining: formData.dateofjoining,
      position: formData.position,
      salary: formData.salary,
      nameOfEmployer1: formData.nameOfEmployer1,
      positionHeld1: formData.positionHeld1,
      em_from1: formData.em_from1,
      em_to1: formData.em_to1,
      reasonOfLeaving1: formData.reasonOfLeaving1,
      nameOfEmployer2: formData.nameOfEmployer2,
      positionHeld2: formData.positionHeld2,
      em_from2: formData.em_from2,
      em_to2: formData.em_to2,
      reasonOfLeaving2: formData.reasonOfLeaving2,
      nameOfEmployer3: formData.nameOfEmployer3,
      positionHeld3: formData.positionHeld3,
      em_from3: formData.em_from3,
      em_to3: formData.em_to3,
      reasonOfLeaving3: formData.reasonOfLeaving3,
      health: formData.healthRadio,
      diseases: formData.diseases,
      rel_name1: formData.rel_name1,
      rel_branch1: formData.rel_branch1,
      rel_gender1: formData.rel_gender1,
      rel_name2: formData.rel_name2,
      rel_branch2: formData.rel_branch2,
      rel_gender2: formData.rel_gender2,
      rel_name3: formData.rel_name3,
      rel_branch3: formData.rel_branch3,
      rel_gender3: formData.rel_gender3,
      expectedSalary: formData.expectedSalary,
      startWorkDate: formData.startWorkDate
    };
  
console.log(newFormData)
    handleFormSubmit(newFormData,    setStep(3));
  
  };
  
   

  const handleYESClick = (event) => {
    event.preventDefault();
    const newFormData = {
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      gender: formData.genderRadio,
      dob: formData.dob,
      age: formData.age,
      nric: formData.nric,
      pob: formData.pob,
      nationality: formData.nationalityRadio,
      religion: formData.religionRadio,
      race: formData.raceRadio,
      estName1: formData.estName1,
      from1: formData.from1,
      to1: formData.to1,
      fos1: formData.fos1,
      qual1: formData.qual1,
      estName2: formData.estName2,
      from2: formData.from2,
      to2: formData.to2,
      fos2: formData.fos2,
      qual2: formData.qual2,
      estName3: formData.estName3,
      from3: formData.from3,
      to3: formData.to3,
      fos3: formData.fos3,
      qual3: formData.qual3,
      languageSpoken: formData.languageSpoken,
      languageWritten: formData.languageWritten,
      textAreaWorkingSkill: formData.textAreaWorkingSkill,
      currentEmployer: formData.currentEmployer,
      dateofjoining: formData.dateofjoining,
      position: formData.position,
      salary: formData.salary,
      nameOfEmployer1: formData.nameOfEmployer1,
      positionHeld1: formData.positionHeld1,
      em_from1: formData.em_from1,
      em_to1: formData.em_to1,
      reasonOfLeaving1: formData.reasonOfLeaving1,
      nameOfEmployer2: formData.nameOfEmployer2,
      positionHeld2: formData.positionHeld2,
      em_from2: formData.em_from2,
      em_to2: formData.em_to2,
      reasonOfLeaving2: formData.reasonOfLeaving2,
      nameOfEmployer3: formData.nameOfEmployer3,
      positionHeld3: formData.positionHeld3,
      em_from3: formData.em_from3,
      em_to3: formData.em_to3,
      reasonOfLeaving3: formData.reasonOfLeaving3,
      health: formData.healthRadio,
      diseases: formData.diseases,
      rel_name1: formData.rel_name1,
      rel_branch1: formData.rel_branch1,
      rel_gender1: formData.rel_gender1,
      rel_name2: formData.rel_name2,
      rel_branch2: formData.rel_branch2,
      rel_gender2: formData.rel_gender2,
      rel_name3: formData.rel_name3,
      rel_branch3: formData.rel_branch3,
      rel_gender3: formData.rel_gender3,
      expectedSalary: formData.expectedSalary,
      startWorkDate: formData.startWorkDate
    };
  
console.log(newFormData)
    handleFormSubmit(newFormData,   setStep(4));
  };


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'radio') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(true);

  const handleClose = (e) => {
    e.preventDefault();
    setBasicModal(false);
  };
  const scrollContainerRef = useRef(null);
  const scrollToBottom = () => {
    scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
  };

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
              <MDBInput
                name='firstName'
                label='First name'
                onChange={handleInputChange}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                name='middleName'
                label='Middle name'
                onChange={handleInputChange}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                name='lastName'
                label='Last name'
                onChange={handleInputChange}
              />
            </MDBCol>
          </MDBRow>

      <MDBRow className='mb-4'>
        <MDBCol>
          <p>Gender</p>
          <form>
          <MDBRadio
      name="genderRadio"
      id="genderRadioMale"
      label="Male"
      value = "Male"
      inline
      onChange={handleInputChange}
    />
    <MDBRadio
      name="genderRadio"
      id="genderRadioFemale"
      label="Female"
      value = "Female"
      inline
      onChange={handleInputChange}
    />
          </form>        
          </MDBCol>
        <MDBCol>
        <p>Date Of Birth</p>
        <MDBInput
      name='dob'
      type='date'
      label='Date of Birth'
      onChange={handleInputChange}
    />
        </MDBCol>
        <MDBCol>
        <MDBInput
      name='age'
      label='Age'
      onChange={handleInputChange}
    />
        </MDBCol>
        </MDBRow>

      <MDBRow className='mb-4'>
      
      </MDBRow>
     
      <MDBInput
  name='nric'
  label='NRIC/FIN No.'
  onChange={handleInputChange}
/>
      <MDBRow>
        <MDBCol>
        <MDBInput
  name='pob'
  label='Place of Birth'
  onChange={handleInputChange}
/>
        </MDBCol>
        <MDBCol>
        <p>Nationality</p>
        <MDBRadio
  name="nationalityRadio"
 
  label="Malaysian"
  value='Malaysian'
  inline
  onChange={handleInputChange}
/>
<MDBRadio
  name="nationalityRadio"
  id="nationalityRadioPR"
  label="PR"
  value = "PR"
  inline
  onChange={handleInputChange}
/>
<MDBRadio
  name="nationalityRadio"
  id="nationalityRadioForeigner"
  label="Foreigner"
  inline
  onChange={handleInputChange}
/>
        </MDBCol>

      </MDBRow>
      
      <MDBRow className='mb-4'>
        <MDBCol>
          <p>Religion</p>
          <MDBRadio
  name="religionRadio"
  id="religionRadioBuddhist"
  label="Buddhist"
  value= "Buddhist"
  inline
  onChange={handleInputChange}
/>
<MDBRadio
  name="religionRadio"
  id="religionRadioChristian"
  label="Christian"
  value= "Christian"
  inline
  onChange={handleInputChange}
/>
<MDBRadio
  name="religionRadio"
  id="religionRadioHindu"
  value = "Hindu"
  label="Hindu"
  inline
  onChange={handleInputChange}
/>
<MDBRadio
  name="religionRadio"
  id="religionRadioMuslim"
  value = "Muslim"
  label="Muslim"
  inline
  onChange={handleInputChange}
/>
<MDBRadio
  name="religionRadio"
  id="religionRadioOthers"
  value = "Others"
  label="Others"
  inline
  onChange={handleInputChange}
/>
        </MDBCol>
        <MDBCol>
        <p>Race</p>
        <MDBRadio
  name="raceRadio"
  id="raceRadioChinese"
  value = "Chinese"
  label="Chinese"
  inline
  onChange={handleInputChange}

/>
<MDBRadio
  name="raceRadio"
  id="raceRadioIndian"
  label="Indian"
  value = "India"
  inline
  onChange={handleInputChange}
/>
<MDBRadio
  name="raceRadio"
  id="raceRadioMalay"
  value = "Malay"
  label="Malay"
  inline
  onChange={handleInputChange}
/>
<MDBRadio
  name="raceRadio"
  value = "Others"
  id="raceRadioOthers"
  label="Others"
  inline
  onChange={handleInputChange}
/>
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
          <td><MDBInput name='estName1' onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='from1' onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='to1' onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='fos1' onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='qual1' onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <th scope='row'>University/ College/ Technical</th>
          <td><MDBInput name='estName2' onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='from2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='to2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='fos2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='qual2'onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <th scope='row'>Secondary</th>
          <td><MDBInput name ='estName3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name ='from3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='to3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='fos3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='qual3'onChange={handleInputChange}/>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

    <hr />
        <h2>Language</h2>
        <hr />

        <MDBRow>
        <MDBCol>
        <MDBInput wrapperClass='mb-4' name='languageSpoken' label='Language(s) Spoken 'onChange={handleInputChange}/>
        <MDBInput wrapperClass='mb-4' name='languageWritten' label='Language(s) Written ' onChange={handleInputChange}/>
        </MDBCol>
        </MDBRow>

        <hr />
        <h2>Working Skill and Experiences</h2>
        <hr />
        <MDBRow>
        <MDBCol>
        <MDBTextArea label='Please provide information on your experiences above.' placeholder='Type here...' name='textAreaWorkingSkill' rows={5} onChange={handleInputChange}/>        
        </MDBCol>
        </MDBRow>

        <hr />
        <h2>Current Company</h2>
        <hr />
        <MDBRow>
        <MDBCol>
     
            <MDBInput wrapperClass='mb-4' name='currentEmployer' label='Name of current employer or NONE if not employed '  onChange={handleInputChange} />
        </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol>
          <MDBInput name='dateofjoining' type = "date" label='Date of joining'onChange={handleInputChange} />
        </MDBCol>
        <MDBCol>
          <MDBInput name='position' label='Position'onChange={handleInputChange} />
        </MDBCol>
        <MDBCol>
          <MDBInput name='salary' label='Salary'onChange={handleInputChange} />
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
          <td><MDBInput name='nameOfEmployer1'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='positionHeld1'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='em_from1'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='em_to1'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='reasonOfLeaving1'onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td><MDBInput name='nameOfEmployer2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='positionHeld2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='em_from2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='em_to2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='reasonOfLeaving2'onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td><MDBInput name='nameOfEmployer3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='positionHeld3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='em_from3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='em_to3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='reasonOfLeaving3'onChange={handleInputChange}/>
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
          <MDBRadio name="healthRadio" id="healthRadioGood" label="Good"  value="Good" inline onChange={handleInputChange}/>
          <MDBRadio name="healthRadio" id="healthRadioBad" label="Bad" value="Bad" inline onChange={handleInputChange}/>
          </MDBCol>
          <MDBCol>
          <MDBInput name='diseases' label='If chosen Bad, what are the diseases?'onChange={handleInputChange}/>
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
          <td><MDBInput  name='rel_name1'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='rel_branch1'onChange={handleInputChange}/>
          </td>
          <td><MDBInput  name='rel_gender1'onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td><MDBInput  name='rel_name2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput  name='rel_branch2'onChange={handleInputChange}/>
          </td>
          <td><MDBInput  name='rel_gender2'onChange={handleInputChange}/>
          </td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td><MDBInput  name='rel_name3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput  name='rel_branch3'onChange={handleInputChange}/>
          </td>
          <td><MDBInput name='rel_gender3'onChange={handleInputChange}/>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

<br></br><br></br>
    <MDBRow>
    <MDBCol>
        <MDBInput name='expectedSalary' label='Expected Salary'onChange={handleInputChange} />
    </MDBCol>
    <MDBCol>
        <MDBInput name='startWorkDate' type = 'date' label='If offered this job, when can you start work?'onChange={handleInputChange} />
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

