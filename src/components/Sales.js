import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBTextArea,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBRadio
} from 'mdb-react-ui-kit';
import logo from '../images/huachanglogo.png';


const Sales = ({ combinedFormData, onSaveFormData, onNext, onBack }) => {
  const [languageList, setLanguageList] = useState([]);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  const LanguageList = ["English", "Mandarin", "Bahasa Malaysia", "Cantonese", "Others"];

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      languageList: languageList,
      input1: input1,
      input2: input2,
      input3: input3,
      input4: input4,
      input5: input5,
      input6: input6,

    };

    // Combine the specific form data with the combinedFormData if needed
    const updatedFormData = {
      ...combinedFormData,
      ...formData,
    };
    // Use the combinedFormData as needed in the Marketing component

    onSaveFormData(updatedFormData);
    console.log(combinedFormData);
    console.log(updatedFormData);
    onNext();
  };


  const backHandler = () => {
    onBack();
  };


  return (
    <form onSubmit={submitHandler}>
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
          <p>(Internship - Sales)</p>
          <hr />

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="language" className="block font-bold mb-2"><b>What language are you proficient in oral and written?</b></label>
              <br></br>
              {LanguageList.map((language) => (
                <div key={language} className="mb-2">
                  <label key={language} className="block font-bold mb-2">
                    <input
                      type="checkbox"
                      id="language"
                      value={language}
                      onChange={(event) => setLanguageList(event.target.checked ? [...languageList, event.target.value] : languageList.filter((c) => c !== event.target.value))}
                      className="mr-2 leading-tight"
                    />
                    {language}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="input1" className="block font-bold mb-2">
                <b>How many months can you intern? (at least 2 months)</b>        </label>
              <input
                style={{ display: "block" }}
                rows={5}
                type="number"
                id="input1"
                value={input1}
                onChange={(event) => setInput1(event.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className='formBorder'>
            <div className='pageContainer'>
              <p><b>Do you have a driver's license and be able to travel if needed?</b></p>
              <MDBRadio name="licence" id="flexRadioDefault1" label="Yes"   />
              <MDBRadio name="licence" id="flexRadioDefault1" label="No"  />
            </div>
          </div>

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="input2" className="block font-bold mb-2">
                <b>Which one do you prefer and why? (teamwork or working alone?)</b>
              </label>
              <MDBTextArea
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                rows={5}
                type="text"
                id="input2"
                value={input2}
                onChange={(event) => setInput2(event.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="input3" className="block font-bold mb-2">
                <b>How will you remain positive when faced with email and telephonic rejections? </b>       </label>
              <MDBTextArea
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                rows={5}
                type="text"
                id="input3"
                value={input3}
                onChange={(event) => setInput3(event.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="input4" className="block font-bold mb-2">
                <b>How do you keep up with sales industry trends?</b>
              </label>
              <MDBTextArea
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                rows={5}
                type="text"
                id="input4"
                value={input4}
                onChange={(event) => setInput4(event.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="input5" className="block font-bold mb-2">
                <b>What made you want to complete your internship at our company?</b>
              </label>
              <MDBTextArea
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                rows={5}
                type="text"
                id="input5"
                value={input5}
                onChange={(event) => setInput5(event.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="input6" className="block font-bold mb-2">
                <b>What can you contribute to our company during your internship?</b>
              </label>
              <MDBTextArea
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                rows={5}
                type="text"
                id="input6"
                value={input6}
                onChange={(event) => setInput6(event.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>


        <div className="d-flex justify-content-center">
          <MDBRow>
            <MDBCol>
              <button className="button buttonBack" onClick={backHandler}>Back</button>
            </MDBCol>
            <MDBCol>
              <button className="button buttonNext" type="submit">Submit</button>
            </MDBCol>
          </MDBRow>
        </div>
        
      </div>
    </form>
  );
};

export default Sales;
