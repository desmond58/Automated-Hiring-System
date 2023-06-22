import React, { useRef, useState } from 'react';
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
  MDBTooltip,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBValidation,
  MDBValidationItem
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

  const backhandler = (e) => {
    e.preventDefault();
    const confirmed = window.confirm('Are you sure you want to go back? Any unsaved changes will be lost.');
    if (confirmed) {
      window.location.reload();
    }
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
    handleFormSubmit(newFormData, setStep(3));

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
    handleFormSubmit(newFormData, setStep(4));

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [health, setHealth] = useState('');
  const [diseases, setDiseases] = useState('');
  //const [empty, setEmpty] = useState('');

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

    if (name === 'healthRadio') {
      setHealth(value);
      if (value === 'Good') {
        setDiseases('');
      }
    } else {
      setDiseases(value);
    }

    if (name === "dob") {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      setFormData((prevFormData) => ({
        ...prevFormData,
        age: age.toString(),
      }));
    }

    // const isInputEmpty = event.target.value.trim() === '';
    //   // Handle empty string value for non-required fields
    //   if (isInputEmpty) {
    //     setEmpty('');
    //   }
    //   else {
    //     setEmpty(value);
    //   }
  };


  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => {
    // Get the form element and check its validity
    const form = document.getElementById('form1');
    if (form.checkValidity()) {
      // Validation successful, set basicModal to true
      setBasicModal(true);
    } else {
      // Validation failed, display error messages or handle accordingly
      form.reportValidity();
    }
  };


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
      <MDBNavbar sticky bgColor='white'>
        <MDBContainer className='justify-content-center'>
          <MDBNavbarBrand href='#'>
            <a onClick={backhandler}>
              <img
                src={logo}
                height='85'
                alt=''
                loading='lazy'
              />
            </a>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>


      <div className='pageContainer'>
        <form id='form1'>
          <div className='formContainer'>
            <h2><b>Personal Details</b></h2>
            <p>Please TICK and provide necessary information</p>
            <hr />
            <div className='formBorder'>
              <div className='pageContainer'>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput
                      name='firstName'
                      label='First name'
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      name='middleName'
                      label='Middle name'
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      name='lastName'
                      label='Last name'
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                </MDBRow>


                <MDBRow className='mb-4'>
                  <MDBCol>
                    <p>Gender</p>
                    <MDBRadio
                      name="genderRadio"
                      id="genderRadioMale"
                      label="Male"
                      value="Male"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                    <MDBRadio
                      name="genderRadio"
                      id="genderRadioFemale"
                      label="Female"
                      value="Female"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      name='dob'
                      type='date'
                      label='Date of Birth'
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      name='age'
                      label='Age'
                      value={formData.age || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                </MDBRow>


                <MDBInput
                  name='nric'
                  label='NRIC (without "-")'
                  onChange={handleInputChange}
                  pattern="[0-9]{12}"
                  maxLength={12}
                  placeholder='eg. 123456789012'
                  required
                />
                < br />
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      name='pob'
                      label='Place of Birth'
                      onChange={handleInputChange}
                      required
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
                      required
                    />
                    <MDBRadio
                      name="nationalityRadio"
                      id="nationalityRadioPR"
                      label="PR"
                      value="PR"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                    <MDBRadio
                      name="nationalityRadio"
                      id="nationalityRadioForeigner"
                      label="Foreigner"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <br></br>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <p>Religion</p>
                    <MDBRadio
                      name="religionRadio"
                      id="religionRadioBuddhist"
                      label="Buddhist"
                      value="Buddhist"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                    <MDBRadio
                      name="religionRadio"
                      id="religionRadioChristian"
                      label="Christian"
                      value="Christian"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                    <MDBRadio
                      name="religionRadio"
                      id="religionRadioHindu"
                      value="Hindu"
                      label="Hindu"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                    <MDBRadio
                      name="religionRadio"
                      id="religionRadioMuslim"
                      value="Muslim"
                      label="Muslim"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                    <MDBRadio
                      name="religionRadio"
                      id="religionRadioOthers"
                      value="Others"
                      label="Others"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <p>Race</p>
                    <MDBRadio
                      name="raceRadio"
                      id="raceRadioChinese"
                      value="Chinese"
                      label="Chinese"
                      inline
                      onChange={handleInputChange}
                      required

                    />
                    <MDBRadio
                      name="raceRadio"
                      id="raceRadioIndian"
                      label="Indian"
                      value="India"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                    <MDBRadio
                      name="raceRadio"
                      id="raceRadioMalay"
                      value="Malay"
                      label="Malay"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                    <MDBRadio
                      name="raceRadio"
                      value="Others"
                      id="raceRadioOthers"
                      label="Others"
                      inline
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>
          <div className='formContainer'>
            <hr />
            <h2><b>Education / Academic Qualification</b></h2>
            <p>State your education or academic qualifications.</p>
            <hr />

            <div className='formBorder'>
              <div className='pageContainer'>
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
                      <td><MDBInput name='estName1' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='from1' placeholder='eg. 2022' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='to1' placeholder='eg. 2023' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='fos1' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='qual1' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>University/ College/ Technical</th>
                      <td><MDBInput name='estName2' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='from2' placeholder='eg. 2022' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='to2' placeholder='eg. 2023' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='fos2' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='qual2' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>Secondary</th>
                      <td><MDBInput name='estName3' onChange={handleInputChange} />
                      </td>
                      <td><MDBInput name='from3' placeholder='eg. 2022' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='to3' placeholder='eg. 2023' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='fos3' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='qual3' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
            </div>
          </div>

          <div className='formContainer'>
            <hr />
            <h2><b>Language</b></h2>
            <p>State the languages that you spoken and written.</p>
            <hr />
            <div className='formBorder'>
              <div className='pageContainer'>
                <MDBRow>
                  <MDBCol>
                    <MDBInput wrapperClass='mb-4' name='languageSpoken' label='Language(s) Spoken ' onChange={handleInputChange} required />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput wrapperClass='mb-4' name='languageWritten' label='Language(s) Written ' onChange={handleInputChange} required />
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>

          <div className='formContainer'>
            <hr />
            <h2><b>Working Skill and Experiences</b></h2>
            <p>Please provide information on your experiences below.</p>
            <hr />
            <div className='formBorder'>
              <div className='pageContainer'>
                <MDBRow>
                  <MDBCol>
                    <MDBTextArea label="Working skills and experiences." placeholder='Type here...' name='textAreaWorkingSkill' rows={5} onChange={handleInputChange} required />
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>

          <div className='formContainer'>
            <hr />
            <h2><b>Current Company</b></h2>
            <p>State your current company.</p>
            <hr />
            <div className='formBorder'>
              <div className='pageContainer'>
                <MDBRow>
                  <MDBCol>
                    <MDBInput wrapperClass='mb-4' name='currentEmployer' label='Name of current employer or NONE if not employed ' onChange={handleInputChange} required />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBInput name='dateofjoining' type="date" label='Date of joining' onChange={handleInputChange} required />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput name='position' label='Position' onChange={handleInputChange} required />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput name='salary' label='Salary' onChange={handleInputChange} required />
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>

          <div className='formContainer'>
            <hr />
            <h2><b>Employment History</b></h2>
            <p>State your previous employments.</p>
            <hr />
            <div className='formBorder'>
              <div className='pageContainer'>
                <MDBTable bordered>
                  <MDBTableHead>
                    <tr>
                      <th scope='col'></th>
                      <th scope='col'>Name of Employer</th>
                      <th scope='col'>Position Held</th>
                      <th scope='col'>From (Year)</th>
                      <th scope='col'>To (Year)</th>
                      <th scope='col'>Reason of Leaving</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope='row'>1</th>
                      <td><MDBInput name='nameOfEmployer1' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='positionHeld1' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='em_from1' placeholder='eg. 2022' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='em_to1' placeholder='eg. 2022' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='reasonOfLeaving1' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td><MDBInput name='nameOfEmployer2' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='positionHeld2' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='em_from2' placeholder='eg. 2022' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='em_to2' placeholder='eg. 2023' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='reasonOfLeaving2' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>3</th>
                      <td><MDBInput name='nameOfEmployer3' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='positionHeld3' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='em_from3' placeholder='eg. 2022' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='em_to3' placeholder='eg. 2023' min='1900' max='2099' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='reasonOfLeaving3' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
            </div>
          </div>

          <div className='formContainer'>
            <hr />
            <h2><b>Health Condition and Status</b></h2>
            <p>please TICK and provide necessary information</p>
            <hr />
            <div className='formBorder'>
              <div className='pageContainer'>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <p>Health</p>
                    <MDBRadio
                      name="healthRadio"
                      id="healthRadioGood"
                      label="Good"
                      value="Good"
                      inline
                      onChange={handleInputChange}
                      checked={health === 'Good'}
                      required
                    />
                    <MDBRadio
                      name="healthRadio"
                      id="healthRadioBad"
                      label="Bad"
                      value="Bad"
                      inline
                      onChange={handleInputChange}
                      checked={health === 'Bad'}
                      required
                    />                  </MDBCol>
                  <MDBCol>
                    {health === 'Bad' ? (
                      <MDBInput
                        name='diseases'
                        label='If chosen Bad, what are the diseases?'
                        value={diseases}
                        onChange={handleInputChange}
                        required
                      />
                    ) : (
                      <MDBInput
                        name='diseases'
                        label='If chosen Bad, what are the diseases?'
                        value={diseases}
                        onChange={handleInputChange}
                        disabled
                        required
                      />
                    )}
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>

          <div className='formContainer'>
            <hr />
            <h2><b>Relatives working in Huachang Growmax</b></h2>
            <p>State your relatives that work in Huachang Growmax Sdn Bhd, if any.</p>
            <hr />
            <div className='formBorder'>
              <div className='pageContainer'>
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
                      <td><MDBInput name='rel_name1' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='rel_branch1' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='rel_gender1' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td><MDBInput name='rel_name2' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='rel_branch2' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='rel_gender2' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>3</th>
                      <td><MDBInput name='rel_name3' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='rel_branch3' onChange={handleInputChange} required/>
                      </td>
                      <td><MDBInput name='rel_gender3' onChange={handleInputChange} required/>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
            </div>
          </div>

          <div className='formContainer'>
            <MDBRow>
              <MDBCol>
                <MDBInput name='expectedSalary' label='Expected Salary' onChange={handleInputChange} required />
              </MDBCol>
              <MDBCol>
                <MDBInput name='startWorkDate' type='date' label='If offered this job, when can you start work?' onChange={handleInputChange} required />
              </MDBCol>
            </MDBRow>
          </div>

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
                  <MDBModalBody><h4 style={{ textAlign: 'center' }}>Do you have a job position in mind that you wanted to apply for?</h4></MDBModalBody>

                  <MDBModalFooter style={{ justifyContent: "center" }}>

                    <MDBRow>
                      <MDBCol sm='6'>
                        <MDBCard alignment='center'>
                          <MDBCardBody>
                            <MDBCardTitle>Big 5 Personalites Test</MDBCardTitle>
                            <MDBCardText>
                              Take the Big Five Personalities test to find out which position is suitable for you!
                            </MDBCardText>
                            <button className='button buttonNext' color='danger' onClick={handleNOClick}>No</button>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol sm='6'>
                        <MDBCard alignment='center'>
                          <MDBCardBody>
                            <MDBCardTitle>Job Interest : Position available</MDBCardTitle>
                            <MDBCardText>
                              Proceed to next step.
                            </MDBCardText><br /><br />
                            <button className='button buttonNext' color='green' onClick={handleYESClick}>Yes</button>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
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

