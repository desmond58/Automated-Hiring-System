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


const Sales = (props) => {
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
        <p>(Internship - Sales)</p>
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
        How many months can you intern? (at least 2 months)        </label>
        <input
          style={{display:"block"}}
          rows = {5}
          type="number"
          id="input1"
          value={input1}
          onChange={(event) => setInput1(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <br></br><br></br>

      <p>Do you have a driver's license and be able to travel if needed?</p>
          <MDBRadio name="licence" id="flexRadioDefault1" label="Yes" inline defaultChecked/>
          <MDBRadio name="licence" id="flexRadioDefault1" label="No" inline/>

      <br></br><br></br>


      <div>
        <label htmlFor="input2" className="block font-bold mb-2">
       Which one do you prefer and why? (teamwork or working alone?)
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
        How will you remain positive when faced with email and telephonic rejections?        </label>
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
        How do you keep up with sales industry trends? 
        </label>
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
        What made you want to complete your internship at our company? 
        </label>        
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
        What can you contribute to our company during your internship? 
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

export default Sales;