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


const BusinessAdministrative = (props) => {
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
    props.onSaveFormData(formData);
    props.onNext();
  };

 

  const backHandler = () => {
    props.onBack();
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

      <div style={{margin:'200px',marginTop:"50px"}}>

        <h2><b>Job Interest</b></h2>
        <p>(Business Administrative)</p>
        <hr />
      
      <div>
        <label htmlFor="language" className="block font-bold mb-2">What language are you proficient in oral and written?</label>
        <br></br>
        {LanguageList.map((language) => ( 
          <label key={language} className="block font-bold mb-2">
            <input  
             type="checkbox"  
             id="language" 
             value={language}  
             onChange={(event) => setLanguageList(  event.target.checked  ? [...languageList, event.target.value]   : languageList.filter((c) => c !== event.target.value) )}
             className="mr-2 leading-tight"    />
            {language}
          </label>
        ))}
      </div>

      <br></br><br></br>

      <div>
        <label htmlFor="input1" className="block font-bold mb-2">
       Which one do you prefer and why? (teamwork or working alone?)
        </label>
        <MDBTextArea
          style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
          rows = {5}
          type="text"
          id="input1"
          value={input1}
          onChange={(event) => setInput1(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <br></br><br></br>

      <div>
        <label htmlFor="input2" className="block font-bold mb-2">
        Name three of your important considerations when working as Business Administration?
        </label>
        <MDBTextArea
          style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
          rows = {5}
          type="text"
          id="input2"
          value={input2}
          onChange={(event) => setInput2(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <br></br><br></br>

      <div>
        <label htmlFor="input3" className="block font-bold mb-2">
        Explain your largest failure during studies. How did you learn from this experience?        </label>
        <MDBTextArea
          style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
          rows = {5}
          type="text"
          id="input3"
          value={input3}
          onChange={(event) => setInput3(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <br></br><br></br>

      <div>
        <label htmlFor="input4" className="block font-bold mb-2">
        How do you deal with busy and stressful studies period?        </label>
        <MDBTextArea
          style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
          rows = {5}
          type="text"
          id="input4"
          value={input4}
          onChange={(event) => setInput4(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <br></br><br></br>

      <div>
        <label htmlFor="input5" className="block font-bold mb-2">
        What is the responsibility as a Business Administrative?        </label>
        <MDBTextArea
          style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
          rows = {5}
          type="text"
          id="input5"
          value={input5}
          onChange={(event) => setInput5(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <br></br><br></br>

      <div>
        <label htmlFor="input6" className="block font-bold mb-2">
          What business technologies, office software, and marketing platforms are you familiar and good in?
        </label>
        <MDBTextArea
          style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
          rows = {5}
          type="text"
          id="input6"
          value={input6}
          onChange={(event) => setInput6(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <br></br><br></br>

     

      <br></br><br></br>

      <div class="d-flex justify-content-center">
        <MDBRow>
          <MDBCol>
          <MDBBtn onClick={backHandler}>Back</MDBBtn>
          </MDBCol>
          <MDBCol>
          <MDBBtn type="submit">Submit</MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>
  </div>
 </form>
  );
};

export default BusinessAdministrative;
