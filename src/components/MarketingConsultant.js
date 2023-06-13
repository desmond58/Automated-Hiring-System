import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBTextArea,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../images/huachanglogo.png';


const MarketingConsultant = ({ combinedFormData, onSaveFormData, onNext, onBack }) => {
  const [languageList, setLanguageList] = useState([]);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");
  const LanguageList = ["English", "Mandarin", "Bahasa Malaysia"];

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
      input7: input7,
      input8: input8,
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

      <div className='pageContainer'>
        <div className='formContainer'>

          <h2><b>Job Interest</b></h2>
          <p>(Marketing Consultant)</p>
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
                <b>Which one do you prefer and why? (teamwork or working alone?)</b>
              </label>
              <MDBTextArea
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                rows={5}
                type="text"
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
              <label htmlFor="input2" className="block font-bold mb-2">
                <b>You found out that your manager is wrong with something, what will you do?</b>
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
                <b>Describe a time when you had to solve a problem in crisis?</b>
              </label>
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
                <b>What are your actions if other employees disagree with your decision?</b>
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
                <b>Explain your largest failure during studies. How did you learn from this experience?</b>
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
                <b>What business technologies, office software, and marketing platforms are you familiar and good in?</b>
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

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="input7" className="block font-bold mb-2">
                <b>What is your experience in organizing and managing social media content, such as recording and editing video? Have you ever handled an account on your own?</b>
              </label>
              <MDBTextArea
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                rows={5}
                type="text"
                id="input7"
                value={input7}
                onChange={(event) => setInput7(event.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className='formBorder'>
            <div className='pageContainer'>
              <label htmlFor="input8" className="block font-bold mb-2">
                <b>Describe an example where you had to plan a challenging project or activity. What was the result of your reaction to the task?</b>
              </label>
              <MDBTextArea
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                rows={5}
                type="text"
                id="input8"
                value={input8}
                onChange={(event) => setInput8(event.target.value)}
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

export default MarketingConsultant;
