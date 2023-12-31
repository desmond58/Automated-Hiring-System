import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBTextArea,
  MDBRow,
  MDBCheckbox,
  MDBInput,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../images/huachanglogo.png';
import '../button.css';
const PositionForm = ({ personalDetails, onSubmit, onNext, onBack, onPositionChange }) => {
  const [position, setPosition] = useState("");
  const [pathList, setPathList] = useState([]);
  const [inputp1, setInputp1] = useState("");
  const [inputp2, setInputp2] = useState("");
  const [inputp3, setInputp3] = useState("");
  const [inputp4, setInputp4] = useState("");
  const [inputp5, setInputp5] = useState("");
  const PathList = ["Social Media", "Friends", "School", "Others"];

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      position: position,
      pathList: pathList,
      inputp1: inputp1,
      inputp2: inputp2,
      inputp3: inputp3,
      inputp4: inputp4,
      inputp5: inputp5,
    };
    const combinedFormData = {
      ...personalDetails,
      ...formData,
    };
    onSubmit(combinedFormData, position); // Pass the combinedFormData and the selected position as arguments
    console.log(combinedFormData);
    onNext(); // Move to the next step

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };

  const backHandler = () => {
     // Use onBack instead of props.onBack
    const confirmed = window.confirm('Are you sure you want to go back? Any unsaved changes will be lost.');
    if (confirmed) {
      onBack();
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };

  const handlePositionChange = (event) => {
    const selectedPosition = event.target.value;
    setPosition(selectedPosition);
    onPositionChange(selectedPosition); // Use onPositionChange instead of props.onPositionChange
  };

  return (

    <form onSubmit={submitHandler}>
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


        <div className='pageContainer'>
          <div className='formContainer'>
            <h2><b>Job Interest</b></h2>
            <p>Position available</p>

            <hr />

            <p style={{ textAlign: "center" }}><b>Applying for position:</b></p>
            <div align="center">
              <select
                id="position"
                style={{ align: "center" }}
                value={position}
                onChange={handlePositionChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a position</option>
                <option value="Marketing">Marketing (Internship)</option>
                <option value="Sales">Sales (Internship)</option>
                <option value="Business Administrative">Business Administrative (Internship)</option>
                <option value="HumanResources">Human Resource (Internship)</option>
                <option value="Accounting">Accounting (Internship)</option>
                <option value="Marketing Consultant">Marketing Consultant</option>
                <option value="Admin Executive">Admin Executive</option>
              </select>
            </div>

            <div className='formBorder'>
              <div className='pageContainer'>
                <label
                  htmlFor="path"
                  className="block font-bold mb-2"
                ><b>How did you know about our company?</b>
                </label>
                <br></br>

                {PathList.map((path) => (
                  <div key={path} className="mb-2">
                    <label
                      key={path}
                      className="block font-bold mb-2"
                    >
                      <input
                        type="checkbox"
                        id="path"
                        value={path}
                        onChange={(event) => setPathList(event.target.checked ? [...pathList, event.target.value] : pathList.filter((c) => c !== event.target.value))}
                        className="mr-2 leading-tight"
                      />
                      {path}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className='formBorder'>
              <div className='pageContainer'>
                <p><b>Please give an example of how you resolved a major conflict or contradiction that occurred with your parents?</b></p>
                <MDBTextArea
                  style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                  rows={5}
                  type="text"
                  id="input1"
                  value={inputp1}
                  onChange={(event) => setInputp1(event.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className='formBorder'>
              <div className='pageContainer'>
                <p><b>How do you handle pressure?</b></p>
                <MDBTextArea
                  style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                  rows={5}
                  type="text"
                  id="input2"
                  value={inputp2}
                  onChange={(event) => setInputp2(event.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className='formBorder'>
              <div className='pageContainer'>
                <label htmlFor="input3" className="block font-bold mb-2"><b>What skills do you possess that will help you succeed in this position?</b></label>
                <MDBTextArea
                  style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                  rows={5}
                  type="text"
                  id="input3"
                  value={inputp3}
                  onChange={(event) => setInputp3(event.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>


            <div className='formBorder'>
              <div className='pageContainer'>
                  <label htmlFor="input4" className="block font-bold mb-2"><b>What are your career goals?</b></label>
                  <MDBTextArea
                    style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                    rows={5}
                    type="text"
                    id="input4"
                    value={inputp4}
                    onChange={(event) => setInputp4(event.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
              </div>
            </div>

            <div className='formBorder'>
              <div className='pageContainer'>
                  <label htmlFor="input5" className="block font-bold mb-2"><b>What makes you the best candidate for this position?</b></label>
                  <MDBTextArea
                    style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                    rows={5}
                    type="text"
                    id="input5"
                    value={inputp5}
                    onChange={(event) => setInputp5(event.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <MDBRow>
              <MDBCol>
                <button className="button buttonBack" onClick={backHandler}>Back</button>
              </MDBCol>
              <MDBCol>
                <button className="button buttonNext" type="submit">Next</button>
              </MDBCol>
            </MDBRow>
          </div>
        </div>


        <div className='text-center p-4' style={{ backgroundColor: '#F1FFEB' }}>
          HUACHANG GROWMAX M SDN BHD
        </div>


      </>
    </form>

  );
};

export default PositionForm;
