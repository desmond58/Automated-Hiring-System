import React, { useState } from 'react';
import '../index.css';
import logo from "../images/huachanglogo.png";
import BigFiveCalculator from './BigFiveCalculator';
import { createClient } from '@supabase/supabase-js';

import {
  MDBBtn,
  MDBContainer,
  MDBRadio,
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";


// const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
// const supabase = createClient(supabaseUrl, supabaseKey);

const Big5Personalities = ({ personalDetails, supabase, onGenerateId, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question12: '',
    question13: '',
    question14: '',
    question15: '',
    question16: '',
    question17: '',
    question18: '',
    question19: '',
    question20: '',
    question21: '',
    question22: '',
    question23: '',
    question24: '',
    question25: '',
    question26: '',
    question27: '',
    question28: '',
    question29: '',
    question30: '',
    question31: '',
    question32: '',
    question33: '',
    question34: '',
    question35: '',
    question36: '',
    question37: '',
    question38: '',
    question39: '',
    question40: '',
    question41: '',
    question42: '',
    question43: '',
    question44: '',
    question45: '',
    question46: '',
    question47: '',
    question48: '',
    question49: '',
    question50: '',

  }); const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));

    // Move the form submission logic here if you want to submit on every input change
  };

  const [submitted, setSubmitted] = useState(false);
  const [insertedId, setInsertedId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch the last status data
      const { data: totalCountData, error: totalCountError } = await supabase
        .from('bigfive_count')
        .select('count')
        .eq('id', 1); // Assuming there is a row with id 1 in the bigfive_count table
      if (totalCountError) {
        console.error('Error retrieving total count:', totalCountError.message);
        return;
      }

      const totalRecords = totalCountData.length > 0 ? totalCountData[0].count : 0;
      const newStatusId = totalRecords + 1;

      const timestamp = Date.now(); // Generate current timestamp in milliseconds
      const trackingNumber = `TR-${timestamp}-${newStatusId}`;

      const formDataWithTimestamp = {
        ...formData,
        ...personalDetails,
        statusId: newStatusId,
        status: "PROGRESS", // Exclude status from the formData
        trackingNumber, // Include the new trackingNumber in the formData
        submissionDate: new Date().toISOString(), // Convert timestamp to string format
      };

      const { data, error } = await supabase.from('bigfive').insert([formDataWithTimestamp]);

      if (error) {
        console.error('Error submitting form data:', error.message);
      } else {
        console.log('Form data submitted successfully');
        // Retrieve the inserted data by querying the Supabase table
        const { data: insertedData, error: insertedError } = await supabase
          .from('bigfive')
          .select('id')
          .eq('submissionDate', formDataWithTimestamp.submissionDate);
        console.log(formDataWithTimestamp.submissionDate)
        if (insertedError) {
          console.error('Error retrieving inserted data:', insertedError.message);
        } else {
          console.log('Inserted Data:', insertedData);
          if (insertedData.length > 0) {
            const id = insertedData[0].id;
            setInsertedId(id);
            setSubmitted(true);
            onGenerateId(id); // Pass the generated ID to the handleGenerateId function
            console.log('Inserted ID:', id);
            console.log(personalDetails);
            // Update the count in bigfive_count table
            await supabase
              .from('bigfive_count')
              .update({ count: totalRecords + 1 })
              .eq('id', 1); // Assuming there is a row with id 1 in the bigfive_count table
            onNext(); // Call the onNext function from props to navigate to the next step
          }
        }
      }
    } catch (error) {
      console.error('Error submitting form data:', error.message);
    }
  };


  const backHandler = () => {
    onBack();
  };






  return (
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

          <h2><b>Big Five Personalities Test</b></h2>
          <p>Please fill out the form below to test which position is best for you.</p>
          <hr />

          <div class="d-flex justify-content-center">
            <MDBCard alignment='center' className='w-50'>
              <MDBCardBody>
                <MDBCardTitle>Rating:</MDBCardTitle>
                <MDBCardText>
                  1 = Disagree
                  2 = Slightly disagree
                  3 = Neutral
                  4 = Slightly agree
                  5 = Agree
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>


          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>1. Am the life of the party.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question1" id="question1_disagree" className={formData.question1 === '1' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question1', value: '1' } })}>1</button>
                <button name="question1" id="question1" className={formData.question1 === '2' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question1', value: '2' } })}>2</button>
                <button name="question1" id="question1_neutral" className={formData.question1 === '3' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question1', value: '3' } })}>3</button>
                <button name="question1" id="question1_agree" className={formData.question1 === '4' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question1', value: '4' } })}>4</button>
                <button name="question1" id="question1_agree_more" className={formData.question1 === '5' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question1', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>2. Feel little concern for others</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question2" id="question2_disagree" className={formData.question2 === '1' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question2', value: '1' } })}>1</button>
                <button name="question2" id="question2" className={formData.question2 === '2' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question2', value: '2' } })}>2</button>
                <button name="question2" id="question2_neutral" className={formData.question2 === '3' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question2', value: '3' } })}>3</button>
                <button name="question2" id="question2_agree" className={formData.question2 === '4' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question2', value: '4' } })}>4</button>
                <button name="question2" id="question2_agree_more" className={formData.question2 === '5' ? 'selected' : 'big5button'}
                  onClick={() => handleChange({ target: { name: 'question2', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>3. Am always prepared</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question3" id="question3_disagree" className={formData.question3 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question3', value: '1' } })}>1</button>
                <button name="question3" id="question3" className={formData.question3 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question3', value: '2' } })}>2</button>
                <button name="question3" id="question3_neutral" className={formData.question3 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question3', value: '3' } })}>3</button>
                <button name="question3" id="question3_agree" className={formData.question3 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question3', value: '4' } })}>4</button>
                <button name="question3" id="question3_agree_more" className={formData.question3 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question3', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>4. Get stressed out easily</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question4" id="question4_disagree" className={formData.question4 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question4', value: '1' } })}>1</button>
                <button name="question4" id="question4" className={formData.question4 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question4', value: '2' } })}>2</button>
                <button name="question4" id="question4_neutral" className={formData.question4 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question4', value: '3' } })}>3</button>
                <button name="question4" id="question4_agree" className={formData.question4 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question4', value: '4' } })}>4</button>
                <button name="question4" id="question4_agree_more" className={formData.question4 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question4', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>5. Have a rich vocabulary</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question5" id="question5_disagree" className={formData.question5 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question5', value: '1' } })}>1</button>
                <button name="question5" id="question5" className={formData.question5 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question5', value: '2' } })}>2</button>
                <button name="question5" id="question5_neutral" className={formData.question5 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question5', value: '3' } })}>3</button>
                <button name="question5" id="question5_agree" className={formData.question5 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question5', value: '4' } })}>4</button>
                <button name="question5" id="question5_agree_more" className={formData.question5 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question5', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>6. Don't talk a lot.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question6" id="question6_disagree" className={formData.question6 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question6', value: '1' } })}>1</button>
                <button name="question6" id="question6" className={formData.question6 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question6', value: '2' } })}>2</button>
                <button name="question6" id="question6_neutral" className={formData.question6 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question6', value: '3' } })}>3</button>
                <button name="question6" id="question6_agree" className={formData.question6 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question6', value: '4' } })}>4</button>
                <button name="question6" id="question6_agree_more" className={formData.question6 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question6', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>7. Am interested in people</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question7" id="question7_disagree" className={formData.question7 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question7', value: '1' } })}>1</button>
                <button name="question7" id="question7" className={formData.question7 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question7', value: '2' } })}>2</button>
                <button name="question7" id="question7_neutral" className={formData.question7 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question7', value: '3' } })}>3</button>
                <button name="question7" id="question7_agree" className={formData.question7 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question7', value: '4' } })}>4</button>
                <button name="question7" id="question7_agree_more" className={formData.question7 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question7', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>8. Leave my belongings around</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question8" id="question8_disagree" className={formData.question8 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question8', value: '1' } })}>1</button>
                <button name="question8" id="question8" className={formData.question8 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question8', value: '2' } })}>2</button>
                <button name="question8" id="question8_neutral" className={formData.question8 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question8', value: '3' } })}>3</button>
                <button name="question8" id="question8_agree" className={formData.question8 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question8', value: '4' } })}>4</button>
                <button name="question8" id="question8_agree_more" className={formData.question8 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question8', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>9. Am relaxed most of the time</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question9" id="question9_disagree" className={formData.question9 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question9', value: '1' } })}>1</button>
                <button name="question9" id="question9" className={formData.question9 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question9', value: '2' } })}>2</button>
                <button name="question9" id="question9_neutral" className={formData.question9 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question9', value: '3' } })}>3</button>
                <button name="question9" id="question9_agree" className={formData.question9 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question9', value: '4' } })}>4</button>
                <button name="question9" id="question9_agree_more" className={formData.question9 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question9', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>10. Have difficulty understanding abstract ideas</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question10" id="question10_disagree" className={formData.question10 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question10', value: '1' } })}>1</button>
                <button name="question10" id="question10" className={formData.question10 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question10', value: '2' } })}>2</button>
                <button name="question10" id="question10_neutral" className={formData.question10 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question10', value: '3' } })}>3</button>
                <button name="question10" id="question10_agree" className={formData.question10 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question10', value: '4' } })}>4</button>
                <button name="question10" id="question10_agree_more" className={formData.question10 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question10', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>11. Feel comfortable around people</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question11" id="question11_disagree" className={formData.question11 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question11', value: '1' } })}>1</button>
                <button name="question11" id="question11" className={formData.question11 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question11', value: '2' } })}>2</button>
                <button name="question11" id="question11_neutral" className={formData.question11 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question11', value: '3' } })}>3</button>
                <button name="question11" id="question11_agree" className={formData.question11 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question11', value: '4' } })}>4</button>
                <button name="question11" id="question11_agree_more" className={formData.question11 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question11', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>12. Insult people</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question12" id="question12_disagree" className={formData.question12 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question12', value: '1' } })}>1</button>
                <button name="question12" id="question12" className={formData.question12 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question12', value: '2' } })}>2</button>
                <button name="question12" id="question12_neutral" className={formData.question12 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question12', value: '3' } })}>3</button>
                <button name="question12" id="question12_agree" className={formData.question12 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question12', value: '4' } })}>4</button>
                <button name="question12" id="question12_agree_more" className={formData.question12 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question12', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>13. Pay attention to details</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question13" id="question13_disagree" className={formData.question13 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question13', value: '1' } })}>1</button>
                <button name="question13" id="question13" className={formData.question13 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question13', value: '2' } })}>2</button>
                <button name="question13" id="question13_neutral" className={formData.question13 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question13', value: '3' } })}>3</button>
                <button name="question13" id="question13_agree" className={formData.question13 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question13', value: '4' } })}>4</button>
                <button name="question13" id="question13_agree_more" className={formData.question13 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question13', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>14. Worry about things</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question14" id="question14_disagree" className={formData.question14 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question14', value: '1' } })}>1</button>
                <button name="question14" id="question14" className={formData.question14 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question14', value: '2' } })}>2</button>
                <button name="question14" id="question14_neutral" className={formData.question14 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question14', value: '3' } })}>3</button>
                <button name="question14" id="question14_agree" className={formData.question14 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question14', value: '4' } })}>4</button>
                <button name="question14" id="question14_agree_more" className={formData.question14 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question14', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>15. Have a vivid imagination</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question15" id="question15_disagree" className={formData.question15 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question15', value: '1' } })}>1</button>
                <button name="question15" id="question15" className={formData.question15 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question15', value: '2' } })}>2</button>
                <button name="question15" id="question15_neutral" className={formData.question15 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question15', value: '3' } })}>3</button>
                <button name="question15" id="question15_agree" className={formData.question15 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question15', value: '4' } })}>4</button>
                <button name="question15" id="question15_agree_more" className={formData.question15 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question15', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>16. Keep in the background</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question16" id="question16_disagree" className={formData.question16 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question16', value: '1' } })}>1</button>
                <button name="question16" id="question16" className={formData.question16 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question16', value: '2' } })}>2</button>
                <button name="question16" id="question16_neutral" className={formData.question16 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question16', value: '3' } })}>3</button>
                <button name="question16" id="question16_agree" className={formData.question16 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question16', value: '4' } })}>4</button>
                <button name="question16" id="question16_agree_more" className={formData.question16 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question16', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>17. Sympathize with other's feelings</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question17" id="question17_disagree" className={formData.question17 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question17', value: '1' } })}>1</button>
                <button name="question17" id="question17" className={formData.question17 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question17', value: '2' } })}>2</button>
                <button name="question17" id="question17_neutral" className={formData.question17 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question17', value: '3' } })}>3</button>
                <button name="question17" id="question17_agree" className={formData.question17 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question17', value: '4' } })}>4</button>
                <button name="question17" id="question17_agree_more" className={formData.question17 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question17', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>18. Make a mess of things</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question18" id="question18_disagree" className={formData.question18 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question18', value: '1' } })}>1</button>
                <button name="question18" id="question18" className={formData.question18 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question18', value: '2' } })}>2</button>
                <button name="question18" id="question18_neutral" className={formData.question18 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question18', value: '3' } })}>3</button>
                <button name="question18" id="question18_agree" className={formData.question18 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question18', value: '4' } })}>4</button>
                <button name="question18" id="question18_agree_more" className={formData.question18 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question18', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>19. Seldom feel blue</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question19" id="question19_disagree" className={formData.question19 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question19', value: '1' } })}>1</button>
                <button name="question19" id="question19" className={formData.question19 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question19', value: '2' } })}>2</button>
                <button name="question19" id="question19_neutral" className={formData.question19 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question19', value: '3' } })}>3</button>
                <button name="question19" id="question19_agree" className={formData.question19 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question19', value: '4' } })}>4</button>
                <button name="question19" id="question19_agree_more" className={formData.question19 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question19', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>20. Am not interested in abstract ideas</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question20" id="question20_disagree" className={formData.question20 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question20', value: '1' } })}>1</button>
                <button name="question20" id="question20" className={formData.question20 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question20', value: '2' } })}>2</button>
                <button name="question20" id="question20_neutral" className={formData.question20 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question20', value: '3' } })}>3</button>
                <button name="question20" id="question20_agree" className={formData.question20 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question20', value: '4' } })}>4</button>
                <button name="question20" id="question20_agree_more" className={formData.question20 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question20', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>21. Start conversations</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question21" id="question21_disagree" className={formData.question21 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question21', value: '1' } })}>1</button>
                <button name="question21" id="question21" className={formData.question21 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question21', value: '2' } })}>2</button>
                <button name="question21" id="question21_neutral" className={formData.question21 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question21', value: '3' } })}>3</button>
                <button name="question21" id="question21_agree" className={formData.question21 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question21', value: '4' } })}>4</button>
                <button name="question21" id="question21_agree_more" className={formData.question21 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question21', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>22. Am not interested in other people's problems.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question22" id="question22_disagree" className={formData.question22 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question22', value: '1' } })}>1</button>
                <button name="question22" id="question22" className={formData.question22 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question22', value: '2' } })}>2</button>
                <button name="question22" id="question22_neutral" className={formData.question22 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question22', value: '3' } })}>3</button>
                <button name="question22" id="question22_agree" className={formData.question22 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question22', value: '4' } })}>4</button>
                <button name="question22" id="question22_agree_more" className={formData.question22 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question22', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>23. Get chores done right away.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question23" id="question23_disagree" className={formData.question23 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question23', value: '1' } })}>1</button>
                <button name="question23" id="question23" className={formData.question23 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question23', value: '2' } })}>2</button>
                <button name="question23" id="question23_neutral" className={formData.question23 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question23', value: '3' } })}>3</button>
                <button name="question23" id="question23_agree" className={formData.question23 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question23', value: '4' } })}>4</button>
                <button name="question23" id="question23_agree_more" className={formData.question23 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question23', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>24. Am easily disturbed.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question24" id="question24_disagree" className={formData.question24 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question24', value: '1' } })}>1</button>
                <button name="question24" id="question24" className={formData.question24 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question24', value: '2' } })}>2</button>
                <button name="question24" id="question24_neutral" className={formData.question24 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question24', value: '3' } })}>3</button>
                <button name="question24" id="question24_agree" className={formData.question24 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question24', value: '4' } })}>4</button>
                <button name="question24" id="question24_agree_more" className={formData.question24 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question24', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>25. Have excellent ideas.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question25" id="question25_disagree" className={formData.question25 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question25', value: '1' } })}>1</button>
                <button name="question25" id="question25" className={formData.question25 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question25', value: '2' } })}>2</button>
                <button name="question25" id="question25_neutral" className={formData.question25 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question25', value: '3' } })}>3</button>
                <button name="question25" id="question25_agree" className={formData.question25 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question25', value: '4' } })}>4</button>
                <button name="question25" id="question25_agree_more" className={formData.question25 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question25', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>26. Have little to say.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question26" id="question26_disagree" className={formData.question26 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question26', value: '1' } })}>1</button>
                <button name="question26" id="question26" className={formData.question26 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question26', value: '2' } })}>2</button>
                <button name="question26" id="question26_neutral" className={formData.question26 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question26', value: '3' } })}>3</button>
                <button name="question26" id="question26_agree" className={formData.question26 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question26', value: '4' } })}>4</button>
                <button name="question26" id="question26_agree_more" className={formData.question26 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question26', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>27. Have a soft heart.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question27" id="question27_disagree" className={formData.question27 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question27', value: '1' } })}>1</button>
                <button name="question27" id="question27" className={formData.question27 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question27', value: '2' } })}>2</button>
                <button name="question27" id="question27_neutral" className={formData.question27 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question27', value: '3' } })}>3</button>
                <button name="question27" id="question27_agree" className={formData.question27 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question27', value: '4' } })}>4</button>
                <button name="question27" id="question27_agree_more" className={formData.question27 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question27', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>28. Often forget to put things back in their proper place.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question28" id="question28_disagree" className={formData.question28 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question28', value: '1' } })}>1</button>
                <button name="question28" id="question28" className={formData.question28 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question28', value: '2' } })}>2</button>
                <button name="question28" id="question28_neutral" className={formData.question28 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question28', value: '3' } })}>3</button>
                <button name="question28" id="question28_agree" className={formData.question28 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question28', value: '4' } })}>4</button>
                <button name="question28" id="question28_agree_more" className={formData.question28 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question28', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>29. Get upset easily.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question29" id="question29_disagree" className={formData.question29 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question29', value: '1' } })}>1</button>
                <button name="question29" id="question29" className={formData.question29 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question29', value: '2' } })}>2</button>
                <button name="question29" id="question29_neutral" className={formData.question29 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question29', value: '3' } })}>3</button>
                <button name="question29" id="question29_agree" className={formData.question29 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question29', value: '4' } })}>4</button>
                <button name="question29" id="question29_agree_more" className={formData.question29 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question29', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>30. Do not have a good imagination.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question30" id="question30_disagree" className={formData.question30 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question30', value: '1' } })}>1</button>
                <button name="question30" id="question30" className={formData.question30 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question30', value: '2' } })}>2</button>
                <button name="question30" id="question30_neutral" className={formData.question30 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question30', value: '3' } })}>3</button>
                <button name="question30" id="question30_agree" className={formData.question30 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question30', value: '4' } })}>4</button>
                <button name="question30" id="question30_agree_more" className={formData.question30 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question30', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>31. Talk a lot of different people at parties.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question31" id="question31_disagree" className={formData.question31 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question31', value: '1' } })}>1</button>
                <button name="question31" id="question31" className={formData.question31 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question31', value: '2' } })}>2</button>
                <button name="question31" id="question31_neutral" className={formData.question31 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question31', value: '3' } })}>3</button>
                <button name="question31" id="question31_agree" className={formData.question31 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question31', value: '4' } })}>4</button>
                <button name="question31" id="question31_agree_more" className={formData.question31 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question31', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>32. Am not really interested in others.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question32" id="question32_disagree" className={formData.question32 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question32', value: '1' } })}>1</button>
                <button name="question32" id="question32" className={formData.question32 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question32', value: '2' } })}>2</button>
                <button name="question32" id="question32_neutral" className={formData.question32 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question32', value: '3' } })}>3</button>
                <button name="question32" id="question32_agree" className={formData.question32 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question32', value: '4' } })}>4</button>
                <button name="question32" id="question32_agree_more" className={formData.question32 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question32', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>33. Like order</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question33" id="question33_disagree" className={formData.question33 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question33', value: '1' } })}>1</button>
                <button name="question33" id="question33" className={formData.question33 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question33', value: '2' } })}>2</button>
                <button name="question33" id="question33_neutral" className={formData.question33 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question33', value: '3' } })}>3</button>
                <button name="question33" id="question33_agree" className={formData.question33 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question33', value: '4' } })}>4</button>
                <button name="question33" id="question33_agree_more" className={formData.question33 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question33', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>34. Change my mood a lot.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question34" id="question34_disagree" className={formData.question34 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question34', value: '1' } })}>1</button>
                <button name="question34" id="question34" className={formData.question34 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question34', value: '2' } })}>2</button>
                <button name="question34" id="question34_neutral" className={formData.question34 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question34', value: '3' } })}>3</button>
                <button name="question34" id="question34_agree" className={formData.question34 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question34', value: '4' } })}>4</button>
                <button name="question34" id="question34_agree_more" className={formData.question34 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question34', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>35. Am quick to understand things</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question35" id="question35_disagree" className={formData.question35 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question35', value: '1' } })}>1</button>
                <button name="question35" id="question35" className={formData.question35 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question35', value: '2' } })}>2</button>
                <button name="question35" id="question35_neutral" className={formData.question35 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question35', value: '3' } })}>3</button>
                <button name="question35" id="question35_agree" className={formData.question35 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question35', value: '4' } })}>4</button>
                <button name="question35" id="question35_agree_more" className={formData.question35 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question35', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>36. Don't like to draw attention to myself</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question36" id="question36_disagree" className={formData.question36 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question36', value: '1' } })}>1</button>
                <button name="question36" id="question36" className={formData.question36 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question36', value: '2' } })}>2</button>
                <button name="question36" id="question36_neutral" className={formData.question36 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question36', value: '3' } })}>3</button>
                <button name="question36" id="question36_agree" className={formData.question36 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question36', value: '4' } })}>4</button>
                <button name="question36" id="question36_agree_more" className={formData.question36 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question36', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>37. Take time out for others</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question37" id="question37_disagree" className={formData.question37 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question37', value: '1' } })}>1</button>
                <button name="question37" id="question37" className={formData.question37 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question37', value: '2' } })}>2</button>
                <button name="question37" id="question37_neutral" className={formData.question37 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question37', value: '3' } })}>3</button>
                <button name="question37" id="question37_agree" className={formData.question37 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question37', value: '4' } })}>4</button>
                <button name="question37" id="question37_agree_more" className={formData.question37 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question37', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>38. Shirk my duties</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question38" id="question38_disagree" className={formData.question38 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question38', value: '1' } })}>1</button>
                <button name="question38" id="question38" className={formData.question38 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question38', value: '2' } })}>2</button>
                <button name="question38" id="question38_neutral" className={formData.question38 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question38', value: '3' } })}>3</button>
                <button name="question38" id="question38_agree" className={formData.question38 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question38', value: '4' } })}>4</button>
                <button name="question38" id="question38_agree_more" className={formData.question38 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question38', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>39. Have frequent mood swings.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question39" id="question39_disagree" className={formData.question39 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question39', value: '1' } })}>1</button>
                <button name="question39" id="question39" className={formData.question39 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question39', value: '2' } })}>2</button>
                <button name="question39" id="question39_neutral" className={formData.question39 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question39', value: '3' } })}>3</button>
                <button name="question39" id="question39_agree" className={formData.question39 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question39', value: '4' } })}>4</button>
                <button name="question39" id="question39_agree_more" className={formData.question39 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question39', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>40. Use difficult words.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question40" id="question40_disagree" className={formData.question40 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question40', value: '1' } })}>1</button>
                <button name="question40" id="question40" className={formData.question40 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question40', value: '2' } })}>2</button>
                <button name="question40" id="question40_neutral" className={formData.question40 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question40', value: '3' } })}>3</button>
                <button name="question40" id="question40_agree" className={formData.question40 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question40', value: '4' } })}>4</button>
                <button name="question40" id="question40_agree_more" className={formData.question40 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question40', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>41. Don't mind being the center of attention.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question41" id="question41_disagree" className={formData.question41 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question41', value: '1' } })}>1</button>
                <button name="question41" id="question41" className={formData.question41 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question41', value: '2' } })}>2</button>
                <button name="question41" id="question41_neutral" className={formData.question41 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question41', value: '3' } })}>3</button>
                <button name="question41" id="question41_agree" className={formData.question41 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question41', value: '4' } })}>4</button>
                <button name="question41" id="question41_agree_more" className={formData.question41 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question41', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>42. Feel others' emotions.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question42" id="question42_disagree" className={formData.question42 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question42', value: '1' } })}>1</button>
                <button name="question42" id="question42" className={formData.question42 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question42', value: '2' } })}>2</button>
                <button name="question42" id="question42_neutral" className={formData.question42 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question42', value: '3' } })}>3</button>
                <button name="question42" id="question42_agree" className={formData.question42 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question42', value: '4' } })}>4</button>
                <button name="question42" id="question42_agree_more" className={formData.question42 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question42', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>43. Follow a schedule.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question43" id="question43_disagree" className={formData.question43 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question43', value: '1' } })}>1</button>
                <button name="question43" id="question43" className={formData.question43 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question43', value: '2' } })}>2</button>
                <button name="question43" id="question43_neutral" className={formData.question43 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question43', value: '3' } })}>3</button>
                <button name="question43" id="question43_agree" className={formData.question43 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question43', value: '4' } })}>4</button>
                <button name="question43" id="question43_agree_more" className={formData.question43 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question43', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>44. Get irritated easily.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question44" id="question44_disagree" className={formData.question44 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question44', value: '1' } })}>1</button>
                <button name="question44" id="question44" className={formData.question44 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question44', value: '2' } })}>2</button>
                <button name="question44" id="question44_neutral" className={formData.question44 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question44', value: '3' } })}>3</button>
                <button name="question44" id="question44_agree" className={formData.question44 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question44', value: '4' } })}>4</button>
                <button name="question44" id="question44_agree_more" className={formData.question44 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question44', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>45. Spend time reflecting on things.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question45" id="question45_disagree" className={formData.question45 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question45', value: '1' } })}>1</button>
                <button name="question45" id="question45" className={formData.question45 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question45', value: '2' } })}>2</button>
                <button name="question45" id="question45_neutral" className={formData.question45 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question45', value: '3' } })}>3</button>
                <button name="question45" id="question45_agree" className={formData.question45 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question45', value: '4' } })}>4</button>
                <button name="question45" id="question45_agree_more" className={formData.question45 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question45', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>46. Am quiet around strangers.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question46" id="question46_disagree" className={formData.question46 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question46', value: '1' } })}>1</button>
                <button name="question46" id="question46" className={formData.question46 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question46', value: '2' } })}>2</button>
                <button name="question46" id="question46_neutral" className={formData.question46 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question46', value: '3' } })}>3</button>
                <button name="question46" id="question46_agree" className={formData.question46 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question46', value: '4' } })}>4</button>
                <button name="question46" id="question46_agree_more" className={formData.question46 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question46', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>47. Make people feel at ease.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question47" id="question47_disagree" className={formData.question47 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question47', value: '1' } })}>1</button>
                <button name="question47" id="question47" className={formData.question47 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question47', value: '2' } })}>2</button>
                <button name="question47" id="question47_neutral" className={formData.question47 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question47', value: '3' } })}>3</button>
                <button name="question47" id="question47_agree" className={formData.question47 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question47', value: '4' } })}>4</button>
                <button name="question47" id="question47_agree_more" className={formData.question47 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question47', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>48. Am exacting in my work.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question48" id="question48_disagree" className={formData.question48 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question48', value: '1' } })}>1</button>
                <button name="question48" id="question48" className={formData.question48 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question48', value: '2' } })}>2</button>
                <button name="question48" id="question48_neutral" className={formData.question48 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question48', value: '3' } })}>3</button>
                <button name="question48" id="question48_agree" className={formData.question48 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question48', value: '4' } })}>4</button>
                <button name="question48" id="question48_agree_more" className={formData.question48 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question48', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>49. Often feel blue.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question49" id="question49_disagree" className={formData.question49 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question49', value: '1' } })}>1</button>
                <button name="question49" id="question49" className={formData.question49 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question49', value: '2' } })}>2</button>
                <button name="question49" id="question49_neutral" className={formData.question49 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question49', value: '3' } })}>3</button>
                <button name="question49" id="question49_agree" className={formData.question49 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question49', value: '4' } })}>4</button>
                <button name="question49" id="question49_agree_more" className={formData.question49 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question49', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>

          <div className='big5Border'>
            <div className='big5Container'>
              <p><b>50. Am full of ideas.</b></p>
              <div className="text-center">
                <div className="d-inline mx-3">Disagree</div>
                <button name="question50" id="question50_disagree" className={formData.question50 === '1' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question50', value: '1' } })}>1</button>
                <button name="question50" id="question50" className={formData.question50 === '2' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question50', value: '2' } })}>2</button>
                <button name="question50" id="question50_neutral" className={formData.question50 === '3' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question50', value: '3' } })}>3</button>
                <button name="question50" id="question50_agree" className={formData.question50 === '4' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question50', value: '4' } })}>4</button>
                <button name="question50" id="question50_agree_more" className={formData.question50 === '5' ? 'selected' : 'big5button'} onClick={() => handleChange({ target: { name: 'question50', value: '5' } })}>5</button>
                <div className="d-inline mx-3">Agree</div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <MDBRow>
            <MDBCol>
              <button className="button buttonBack" onClick={backHandler}>Back</button>
            </MDBCol>
            <MDBCol>
              <button className="button buttonNext" type="button" onClick={handleSubmit}>Submit</button>
            </MDBCol>
          </MDBRow>
        </div>
        {submitted && insertedId && <BigFiveCalculator id={insertedId} />}

      </div >





    </>
  );
}

export default Big5Personalities;
