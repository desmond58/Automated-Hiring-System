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



const PositionForm = (props) => {
  const [position, setPosition] = useState("");
  const [pathList, setPathList] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const PathList = ["Social Media", "Friends", "School", "Others"];

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      position: position,
      pathList: pathList,
      input1: input1,
      input2: input2,
      input3: input3,
      input4: input4,
      input5: input5,
    };
    props.onSaveFormData(formData);
    props.onNext();
  }

  const backHandler = () => {
    props.onBack();
  };

  const handlePositionChange = (event) => {
    const selectedPosition = event.target.value;
    setPosition(selectedPosition);
    props.onPositionChange(selectedPosition); // call onPositionChange with the selected position
  };

  return (
    <form onSubmit={submitHandler}>
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

       <div style={{margin:'200px',marginTop:"50px"}}>
         <h2><b>Job Interest</b></h2>
         <p>Position available</p>

          <hr />

        <p style={{textAlign:"center"}}>Applying for position:</p>
        <div align = "center">
        <select
          id="position"
          style={{align:"center"}}
          value={position}
          onChange={handlePositionChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Select a position</option>
          <option value="Marketing">Marketing (Internship)</option>
          <option value="Sales">Sales (Internship)</option>
          <option value="Business Administrative">Business Administrative (Internship)</option>
          <option value="HumanResources">Human Resource (Internship)</option>
          <option value="Accounting">Accounting (Internship)</option>
          <option value="Marketing Coordinator">Marketing Coordinator</option>
          <option value="Admin Executive">Admin Executive</option>

        </select>
        </div>
       
      
        <br></br><br></br>
       
         <label 
          htmlFor="path" 
          className="block font-bold mb-2">
           How did you know about our company?
         </label>
         <br></br>
        
         {PathList.map((path) => ( 
           <label 
             key={path} 
             className="block font-bold mb-2">
             <input  
              type="checkbox"  
              id="path" 
              value={path}  
              onChange={(event) => setPathList(  event.target.checked  ? [...pathList, event.target.value]   : pathList.filter((c) => c !== event.target.value) )}
              className="mr-2 leading-tight" 
             />
            {path}
          </label>
        ))}

        <br></br><br></br>
         
        <p>Please give an example of how you resolved a major conflict or contradiction that occurred with your parents?</p>
        <MDBTextArea 
         style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
         rows={5}
         type="text"    
         id="input1"  
         value={input1}  
         onChange={(event) => setInput1(event.target.value)}
         required 
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      
      <br></br><br></br>

        <p>How do you handle pressure?</p>
        <MDBTextArea
         style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
         rows={5} 
         type="text"  
         id="input2"  
         value={input2}    
         onChange={(event) => setInput2(event.target.value)}
         required
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
         />

         <br></br><br></br>

        <label htmlFor="input3" className="block font-bold mb-2">What skills do you possess that will help you succeed in this position?</label>
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
     
     <br></br><br></br>

     <div>
       <label htmlFor="input4" className="block font-bold mb-2">What are your career goals?</label>
       <MDBTextArea  
         style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
         rows={5}
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
       <label htmlFor="input5" className="block font-bold mb-2">What makes you the best candidate for this position?</label>
       <MDBTextArea
         style={{display:"block", marginLeft:"auto", marginRight:"auto"}}
         rows={5}  
        type="text"  
        id="input5"  
        value={input5}   
        onChange={(event) => setInput5(event.target.value)}  
        required   
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
     </div>

     <br></br><br></br>

     <div class="d-flex justify-content-center">
        <MDBRow>
          <MDBCol>
          <MDBBtn onClick={backHandler}>Back</MDBBtn>
          </MDBCol>
          <MDBCol>
          <MDBBtn type="submit">Next</MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>

  </div>
  </> 
 </form>
);
};

export default PositionForm;