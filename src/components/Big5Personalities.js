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
  MDBNavbarBrand
} from "mdb-react-ui-kit";
const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
const supabase = createClient(supabaseUrl, supabaseKey);

const Big5Personalities = ({ supabase, onGenerateId, onNext, onBack  }) => {
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
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
    // Move the form submission logic here if you want to submit on every input change
  };const [submitted, setSubmitted] = useState(false);
  const [insertedId, setInsertedId] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const timestamp = new Date(); // Generate current timestamp
  
      const formDataWithTimestamp = {
        ...formData,
        timestamp: timestamp.toISOString(), // Convert timestamp to string format
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
          .eq('timestamp', formDataWithTimestamp.timestamp);
  
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

      <MDBContainer className="">
        <div style={{ margin: '50px' }}>

          <h2><b>Big Five Personalities Test</b></h2>
          <p>Please fill out the form below to test which position is best for you.</p>
          <hr />
          <form className="bg-white mt-3" action="">
            <p>
              1. Am the life of the party.           </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question1" id="question1_disagree" label="1" inline value="1" checked={formData.question1 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question1" id="question1" label="2" inline value="2" checked={formData.question1 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question1" id="question1_neutral" label="3" inline value="3" checked={formData.question1 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question1" id="question1_agree" label="4"  inline   value="4" checked={formData.question1 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question1" id="question1_agree_more" label="5"  inline value="5" checked={formData.question1 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <br></br>

          <form className="bg-white mt-3" action="">
            <p>
              2. Feel little concern for others          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question2" id="question2_disagree" label="1" inline value="1" checked={formData.question2 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question2" id="question2" label="2" inline value="2" checked={formData.question2 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question2" id="question2_neutral" label="3" inline value="3" checked={formData.question2 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question2" id="question2_agree" label="4"  inline   value="4" checked={formData.question2=== '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question2" id="question40_agree_more" label="5"  inline value="5" checked={formData.question2 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <br></br>

          <form className="bg-white mt-3" action="">
            <p>
              3. Am always prepared          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
          <MDBRadio
                name="question3" id="question3_disagree" label="1" inline value="1" checked={formData.question3 === '1'} onChange={handleChange}
              />
              <MDBRadio
                name="question3" id="question3" label="2" inline value="2" checked={formData.question3 === '2'} onChange={handleChange}
              />
              <MDBRadio
                name="question3" id="question3_neutral" label="3" inline value="3" checked={formData.question3 === '3'} onChange={handleChange}
              />
              <MDBRadio
                name="question3" id="question3_agree" label="4"  inline value="4" checked={formData.question3 === '4'}  onChange={handleChange}
              />
              <MDBRadio
                name="question3" id="question3_agree_more" label="5"  inline value="5" checked={formData.question3 === '5'} onChange={handleChange}
              />
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              4. Get stressed out easily           </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question4" id="question4_disagree" label="1" inline value="1" checked={formData.question4 === '1'} onChange={handleChange}
              />
              <MDBRadio
                name="question4" id="question4" label="2" inline value="2" checked={formData.question4 === '2'} onChange={handleChange}
              />
              <MDBRadio
                name="question4" id="question4_neutral" label="3" inline value="3" checked={formData.question4 === '3'} onChange={handleChange}
              />
              <MDBRadio
                name="question4" id="question4_agree" label="4"  inline   value="4" checked={formData.question4 === '4'}  onChange={handleChange}
              />
              <MDBRadio
                name="question4" id="question4_agree_more" label="5"  inline value="5" checked={formData.question4 === '5'} onChange={handleChange}
              />
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              5. Have a rich vocabulary           </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question5" id="question5_disagree" label="1" inline value="1" checked={formData.question5 === '1'} onChange={handleChange}
              />
              <MDBRadio
                name="question5" id="question5" label="2" inline value="2" checked={formData.question5 === '2'} onChange={handleChange}
              />
              <MDBRadio
                name="question5" id="question5_neutral" label="3" inline value="3" checked={formData.question5 === '3'} onChange={handleChange}
              />
              <MDBRadio
                name="question5" id="question5_agree" label="4"  inline value="4" checked={formData.question5 === '4'}  onChange={handleChange}
              />
              <MDBRadio
                name="question5" id="question5_agree_more" label="5"  inline value="5" checked={formData.question5 === '5'} onChange={handleChange}
              />
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              6. Don't talk a lot.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question6" id="question6_disagree" label="1" inline value="1" checked={formData.question6 === '1'} onChange={handleChange}
              />
              <MDBRadio
                name="question6" id="question6" label="2" inline value="2" checked={formData.question6 === '2'} onChange={handleChange}
              />
              <MDBRadio
                name="question6" id="question6_neutral" label="3" inline value="3" checked={formData.question6 === '3'} onChange={handleChange}
              />
              <MDBRadio
                name="question6" id="question6_agree" label="4"  inline   value="4" checked={formData.question6 === '4'}  onChange={handleChange}
              />
              <MDBRadio
                name="question6" id="question6_agree_more" label="5"  inline value="5" checked={formData.question6 === '5'} onChange={handleChange}
              />
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              7. Am interested in people          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question7" id="question7_disagree" label="1" inline value="1" checked={formData.question7 === '1'} onChange={handleChange}
              />
              <MDBRadio
                name="question7" id="question7" label="2" inline value="2" checked={formData.question7 === '2'} onChange={handleChange}
              />
              <MDBRadio
                name="question7" id="question7_neutral" label="3" inline value="3" checked={formData.question7 === '3'} onChange={handleChange}
              />
              <MDBRadio
                name="question7" id="question7_agree" label="4"  inline   value="4" checked={formData.question7 === '4'}  onChange={handleChange}
              />
              <MDBRadio
                name="question7" id="question7_agree_more" label="5"  inline value="5" checked={formData.question7 === '5'} onChange={handleChange}
              />
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              8. Leave my belongings around          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question8" id="question8_disagree" label="1" inline value="1" checked={formData.question8 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question8" id="question8" label="2" inline value="2" checked={formData.question8 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question8" id="question8_neutral" label="3" inline value="3" checked={formData.question8 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question8" id="question8_agree" label="4"  inline   value="4" checked={formData.question8 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question8" id="question8_agree_more" label="5"  inline value="5" checked={formData.question8 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              9. Am relaxed most of the time   </p>       <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question9" id="question9_disagree" label="1" inline value="1" checked={formData.question9 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question9" id="question9" label="2" inline value="2" checked={formData.question9 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question9" id="question9_neutral" label="3" inline value="3" checked={formData.question9 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question9" id="question9_agree" label="4"  inline   value="4" checked={formData.question9 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question9" id="question9_agree_more" label="5"  inline value="5" checked={formData.question9 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              10. Have difficulty understanding abstract ideas          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question10" id="question10_disagree" label="1" inline value="1" checked={formData.question10 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question10" id="question10" label="2" inline value="2" checked={formData.question10 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question10" id="question10_neutral" label="3" inline value="3" checked={formData.question10 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question10" id="question10_agree" label="4"  inline   value="4" checked={formData.question10 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question10" id="question10_agree_more" label="5"  inline value="5" checked={formData.question10 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              11. Feel comfortable around people         </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question11" id="question11_disagree" label="1" inline value="1" checked={formData.question11 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question11" id="question11" label="2" inline value="2" checked={formData.question11 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question11" id="question11_neutral" label="3" inline value="3" checked={formData.question11 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question11" id="question11_agree" label="4"  inline   value="4" checked={formData.question11 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question11" id="question11_agree_more" label="5"  inline value="5" checked={formData.question11 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              12. Insult people          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question12" id="question12_disagree" label="1" inline value="1" checked={formData.question12 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question12" id="question12" label="2" inline value="2" checked={formData.question12 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question12" id="question12_neutral" label="3" inline value="3" checked={formData.question12 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question12" id="question12_agree" label="4"  inline   value="4" checked={formData.question12 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question12" id="question12_agree_more" label="5"  inline value="5" checked={formData.question12 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              13. Pay attention to details          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question13" id="question13_disagree" label="1" inline value="1" checked={formData.question13 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question13" id="question13" label="2" inline value="2" checked={formData.question13 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question13" id="question13_neutral" label="3" inline value="3" checked={formData.question13 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question13" id="question13_agree" label="4"  inline   value="4" checked={formData.question13 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question13" id="question13_agree_more" label="5"  inline value="5" checked={formData.question13 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              14. Worry about things          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question14" id="question14_disagree" label="1" inline value="1" checked={formData.question14 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question14" id="question14" label="2" inline value="2" checked={formData.question14 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question14" id="question14_neutral" label="3" inline value="3" checked={formData.question14 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question14" id="question14_agree" label="4"  inline   value="4" checked={formData.question14 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question14" id="question13_agree_more" label="5"  inline value="5" checked={formData.question14 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              15. Have a vivid imagination         </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question15" id="question15_disagree" label="1" inline value="1" checked={formData.question15 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question15" id="question15" label="2" inline value="2" checked={formData.question15 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question15" id="question15_neutral" label="3" inline value="3" checked={formData.question15 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question15" id="question15_agree" label="4"  inline   value="4" checked={formData.question15 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question15" id="question15_agree_more" label="5"  inline value="5" checked={formData.question15 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              16. Keep in the background.         </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question16" id="question16_disagree" label="1" inline value="1" checked={formData.question16 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question16" id="question16" label="2" inline value="2" checked={formData.question16=== '2'} onChange={handleChange} />
              <MDBRadio
                name="question16" id="question16_neutral" label="3" inline value="3" checked={formData.question16 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question16" id="question16_agree" label="4"  inline   value="4" checked={formData.question16=== '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question16" id="question16_agree_more" label="5"  inline value="5" checked={formData.question16 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              17. Sympathize with other's feelings.         </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question17" id="question17_disagree" label="1" inline value="1" checked={formData.question17 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question17" id="question17" label="2" inline value="2" checked={formData.question17 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question17" id="question17_neutral" label="3" inline value="3" checked={formData.question17 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question17" id="question17_agree" label="4"  inline   value="4" checked={formData.question17 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question17" id="question17_agree_more" label="5"  inline value="5" checked={formData.question17 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              18. Make a mess of things          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question18" id="question18_disagree" label="1" inline value="1" checked={formData.question18 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question18" id="question18" label="2" inline value="2" checked={formData.question18 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question18" id="question18_neutral" label="3" inline value="3" checked={formData.question18 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question18" id="question18_agree" label="4"  inline   value="4" checked={formData.question18 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question18" id="question18_agree_more" label="5"  inline value="5" checked={formData.question18 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              19. Seldom feel blue          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question19" id="question19_disagree" label="1" inline value="1" checked={formData.question19 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question19" id="question19" label="2" inline value="2" checked={formData.question19 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question19" id="question19_neutral" label="3" inline value="3" checked={formData.question19 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question19" id="question19_agree" label="4"  inline   value="4" checked={formData.question19 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question19" id="question19_agree_more" label="5"  inline value="5" checked={formData.question19 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              20. Am not interested in abstract ideas.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question20" id="question20_disagree" label="1" inline value="1" checked={formData.question20 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question20" id="question20" label="2" inline value="2" checked={formData.question20 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question20" id="question20_neutral" label="3" inline value="3" checked={formData.question20 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question20" id="question20_agree" label="4"  inline   value="4" checked={formData.question20 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question20" id="question20_agree_more" label="5"  inline value="5" checked={formData.question20 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              21. Start conversations          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question21" id="question21_disagree" label="1" inline value="1" checked={formData.question21 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question21" id="question21" label="2" inline value="2" checked={formData.question21 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question21" id="question21_neutral" label="3" inline value="3" checked={formData.question21 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question21" id="question21_agree" label="4"  inline   value="4" checked={formData.question21 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question21" id="question21_agree_more" label="5"  inline value="5" checked={formData.question21 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              22. Am not interested in other people's problems. </p>          <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question22" id="question22_disagree" label="1" inline value="1" checked={formData.question22 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question22" id="question22" label="2" inline value="2" checked={formData.question22 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question22" id="question22_neutral" label="3" inline value="3" checked={formData.question22 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question22" id="question22_agree" label="4"  inline   value="4" checked={formData.question22 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question22" id="question22_agree_more" label="5"  inline value="5" checked={formData.question22 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              23. Get chores done right away.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question23" id="question23_disagree" label="1" inline value="1" checked={formData.question23 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question23" id="question23" label="2" inline value="2" checked={formData.question23 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question23" id="question23_neutral" label="3" inline value="3" checked={formData.question23=== '3'} onChange={handleChange} />
              <MDBRadio
                name="question23" id="question23_agree" label="4"  inline   value="4" checked={formData.question23 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question23" id="question23_agree_more" label="5"  inline value="5" checked={formData.question23 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              24. Am easily disturbed          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question24" id="question24_disagree" label="1" inline value="1" checked={formData.question24=== '1'} onChange={handleChange} />
              <MDBRadio
                name="question24" id="question24" label="2" inline value="2" checked={formData.question24 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question24" id="question24_neutral" label="3" inline value="3" checked={formData.question24 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question24" id="question24_agree" label="4"  inline   value="4" checked={formData.question24 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question24" id="question24_agree_more" label="5"  inline value="5" checked={formData.question24 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              25. Have excellent ideas.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question25" id="question25_disagree" label="1" inline value="1" checked={formData.question25 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question25" id="question25" label="2" inline value="2" checked={formData.question25 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question25" id="question25_neutral" label="3" inline value="3" checked={formData.question25 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question25" id="question25_agree" label="4"  inline   value="4" checked={formData.question25 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question25" id="question25_agree_more" label="5"  inline value="5" checked={formData.question25 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              26. Have little to say.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question26" id="question26_disagree" label="1" inline value="1" checked={formData.question26 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question26" id="question26" label="2" inline value="2" checked={formData.question26 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question26" id="question26_neutral" label="3" inline value="3" checked={formData.question26 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question26" id="question26_agree" label="4"  inline   value="4" checked={formData.question26 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question26" id="question26_agree_more" label="5"  inline value="5" checked={formData.question26 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              27. Have a soft heart.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question27" id="question27_disagree" label="1" inline value="1" checked={formData.question27 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question27" id="question27" label="2" inline value="2" checked={formData.question27 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question27" id="question27_neutral" label="3" inline value="3" checked={formData.question27 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question27" id="question27_agree" label="4"  inline   value="4" checked={formData.question27 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question27" id="question27_agree_more" label="5"  inline value="5" checked={formData.question27 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              28. Often forget to put things back in their proper place.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question28" id="question28_disagree" label="1" inline value="1" checked={formData.question28 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question28" id="question28" label="2" inline value="2" checked={formData.question28 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question28" id="question28_neutral" label="3" inline value="3" checked={formData.question28 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question28" id="question28_agree" label="4"  inline   value="4" checked={formData.question28 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question28" id="question28_agree_more" label="5"  inline value="5" checked={formData.question28 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              29.Get upset easily          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question29" id="question29_disagree" label="1" inline value="1" checked={formData.question29 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question29" id="question29" label="2" inline value="2" checked={formData.question29 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question29" id="question29_neutral" label="3" inline value="3" checked={formData.question29 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question29" id="question29_agree" label="4"  inline   value="4" checked={formData.question29 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question29" id="question29_agree_more" label="5"  inline value="5" checked={formData.question29 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              30. Do not have a good imagination.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question30" id="question30_disagree" label="1" inline value="1" checked={formData.question30 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question30" id="question30" label="2" inline value="2" checked={formData.question30 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question30" id="question30_neutral" label="3" inline value="3" checked={formData.question30 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question30" id="question30_agree" label="4"  inline   value="4" checked={formData.question30 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question30" id="question30_agree_more" label="5"  inline value="5" checked={formData.question30 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              31. Talk a lot of different people at parties.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question31" id="question31_disagree" label="1" inline value="1" checked={formData.question31 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question31" id="question31" label="2" inline value="2" checked={formData.question31 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question31" id="question31_neutral" label="3" inline value="3" checked={formData.question31 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question31" id="question31_agree" label="4"  inline   value="4" checked={formData.question31 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question31" id="question31_agree_more" label="5"  inline value="5" checked={formData.question31=== '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              32. Am not really interested in others          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question32" id="question32_disagree" label="1" inline value="1" checked={formData.question32 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question32" id="question32" label="2" inline value="2" checked={formData.question32 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question32" id="question32_neutral" label="3" inline value="3" checked={formData.question32 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question32" id="question32_agree" label="4"  inline   value="4" checked={formData.question32 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question32" id="question32_agree_more" label="5"  inline value="5" checked={formData.question32 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              33. Like order          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question33" id="question33_disagree" label="1" inline value="1" checked={formData.question33 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question33" id="question33" label="2" inline value="2" checked={formData.question33 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question33" id="question33_neutral" label="3" inline value="3" checked={formData.question33 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question33" id="question33_agree" label="4"  inline   value="4" checked={formData.question33 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question33" id="question33_agree_more" label="5"  inline value="5" checked={formData.question33 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              34. Change my mood a lot.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question34" id="question34_disagree" label="1" inline value="1" checked={formData.question34 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question34" id="question34" label="2" inline value="2" checked={formData.question34 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question34" id="question34_neutral" label="3" inline value="3" checked={formData.question34 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question34" id="question34_agree" label="4"  inline   value="4" checked={formData.question34 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question34" id="question34_agree_more" label="5"  inline value="5" checked={formData.question34 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              35. Am quick to understand things          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question35" id="question35_disagree" label="1" inline value="1" checked={formData.question35 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question35" id="question35" label="2" inline value="2" checked={formData.question35 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question35" id="question35_neutral" label="3" inline value="3" checked={formData.question35 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question35" id="question35_agree" label="4"  inline   value="4" checked={formData.question35 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question35" id="question35_agree_more" label="5"  inline value="5" checked={formData.question35 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              36. Don't like to draw attention to myself          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question36" id="question36_disagree" label="1" inline value="1" checked={formData.question36 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question36" id="question36" label="2" inline value="2" checked={formData.question36 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question36" id="question36_neutral" label="3" inline value="3" checked={formData.question36 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question36" id="question36_agree" label="4"  inline   value="4" checked={formData.question36 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question36" id="question36_agree_more" label="5"  inline value="5" checked={formData.question36 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              37. Take time out for others          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question37" id="question37_disagree" label="1" inline value="1" checked={formData.question37 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question37" id="question37" label="2" inline value="2" checked={formData.question37 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question37" id="question37_neutral" label="3" inline value="3" checked={formData.question37 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question37" id="question37_agree" label="4"  inline   value="4" checked={formData.question37 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question37" id="question37_agree_more" label="5"  inline value="5" checked={formData.question37 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              38. Shirk my duties          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question38" id="question38_disagree" label="1" inline value="1" checked={formData.question38 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question38" id="question38" label="2" inline value="2" checked={formData.question38 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question38" id="question38_neutral" label="3" inline value="3" checked={formData.question38 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question38" id="question38_agree" label="4"  inline   value="4" checked={formData.question38 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question38" id="question38_agree_more" label="5"  inline value="5" checked={formData.question38 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              39. Have frequent mood swings.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question39" id="question39_disagree" label="1" inline value="1" checked={formData.question39 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question39" id="question39" label="2" inline value="2" checked={formData.question39 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question39" id="question39_neutral" label="3" inline value="3" checked={formData.question39 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question39" id="question39_agree" label="4"  inline   value="4" checked={formData.question39 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question39" id="question39_agree_more" label="5"  inline value="5" checked={formData.question39 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              40. Use difficult words.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question40" id="question40_disagree" label="1" inline value="1" checked={formData.question40 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question40" id="question40" label="2" inline value="2" checked={formData.question40 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question40" id="question40_neutral" label="3" inline value="3" checked={formData.question40 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question40" id="question40_agree" label="4"  inline   value="4" checked={formData.question40 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question40" id="question40_agree_more" label="5"  inline value="5" checked={formData.question40 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              41. Don't mind being the center of attention          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question41" id="question41_disagree" label="1" inline value="1" checked={formData.question41 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question41" id="question41" label="2" inline value="2" checked={formData.question41 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question41" id="question41_neutral" label="3" inline value="3" checked={formData.question41 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question41" id="question41_agree" label="4"  inline   value="4" checked={formData.question41 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question41" id="question41_agree_more" label="5"  inline value="5" checked={formData.question41 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              42. Feel other's emotions          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question42" id="question42_disagree" label="1" inline value="1" checked={formData.question42 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question42" id="question42" label="2" inline value="2" checked={formData.question42 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question42" id="question42_neutral" label="3" inline value="3" checked={formData.question42 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question42" id="question42_agree" label="4"  inline   value="4" checked={formData.question42 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question42" id="question42_agree_more" label="5"  inline value="5" checked={formData.question42 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              43. Follow a schedule.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question43" id="question43_disagree" label="1" inline value="1" checked={formData.question43=== '1'} onChange={handleChange} />
              <MDBRadio
                name="question43" id="question43" label="2" inline value="2" checked={formData.question43 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question43" id="question43_neutral" label="3" inline value="3" checked={formData.question43 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question43" id="question43_agree" label="4"  inline   value="4" checked={formData.question43 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question43" id="question43_agree_more" label="5"  inline value="5" checked={formData.question43 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              44. Get irritated easily          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question44" id="question44_disagree" label="1" inline value="1" checked={formData.question44 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question44" id="question44" label="2" inline value="2" checked={formData.question44 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question44" id="question44_neutral" label="3" inline value="3" checked={formData.question44 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question44" id="question44_agree" label="4"  inline   value="4" checked={formData.question44 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question44" id="question44_agree_more" label="5"  inline value="5" checked={formData.question44 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              45. Spend time reflecting on things          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question45" id="question45_disagree" label="1" inline value="1" checked={formData.question45 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question45" id="question45" label="2" inline value="2" checked={formData.question45 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question45" id="question45_neutral" label="3" inline value="3" checked={formData.question45 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question45" id="question45_agree" label="4"  inline   value="4" checked={formData.question45=== '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question45" id="question45_agree_more" label="5"  inline value="5" checked={formData.question45 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              46. Am quiet around strangers.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question46" id="question46_disagree" label="1" inline value="1" checked={formData.question46 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question46" id="question46" label="2" inline value="2" checked={formData.question46 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question46" id="question46_neutral" label="3" inline value="3" checked={formData.question46 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question46" id="question46_agree" label="4"  inline   value="4" checked={formData.question46 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question46" id="question46_agree_more" label="5"  inline value="5" checked={formData.question46 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              47. Make people feel at ease.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question47" id="question47_disagree" label="1" inline value="1" checked={formData.question47 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question47" id="question47" label="2" inline value="2" checked={formData.question47 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question47" id="question47_neutral" label="3" inline value="3" checked={formData.question47 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question47" id="question47_agree" label="4"  inline   value="4" checked={formData.question47 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question47" id="question47_agree_more" label="5"  inline value="5" checked={formData.question47 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              48. Am exacting in my work.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question48" id="question48_disagree" label="1" inline value="1" checked={formData.question48 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question48" id="question48" label="2" inline value="2" checked={formData.question48 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question48" id="question48_neutral" label="3" inline value="3" checked={formData.question48 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question48" id="question48_agree" label="4"  inline   value="4" checked={formData.question48 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question48" id="question48_agree_more" label="5"  inline value="5" checked={formData.question48 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              49. Often feel blue.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question49" id="question49_disagree" label="1" inline value="1" checked={formData.question49 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question49" id="question49" label="2" inline value="2" checked={formData.question49=== '2'} onChange={handleChange} />
              <MDBRadio
                name="question49" id="question49_neutral" label="3" inline value="3" checked={formData.question49 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question49" id="question49_agree" label="4"  inline   value="4" checked={formData.question49 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question49" id="question49_agree_more" label="5"  inline value="5" checked={formData.question49 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <form className="bg-white mt-3" action="">
            <p>
              50. Am full of ideas.          </p>
            <div className="text-center">
              <div className="d-inline mx-3">Disagree</div>
              <MDBRadio
                name="question50" id="question50_disagree" label="1" inline value="1" checked={formData.question50 === '1'} onChange={handleChange} />
              <MDBRadio
                name="question50" id="question50" label="2" inline value="2" checked={formData.question50 === '2'} onChange={handleChange} />
              <MDBRadio
                name="question50" id="question50_neutral" label="3" inline value="3" checked={formData.question50 === '3'} onChange={handleChange} />
              <MDBRadio
                name="question50" id="question50_agree" label="4"  inline   value="4" checked={formData.question50 === '4'}  onChange={handleChange}/>
              <MDBRadio
                name="question50" id="question50_agree_more" label="5"  inline value="5" checked={formData.question50 === '5'} onChange={handleChange}/>
              <div className="d-inline mx-3">Agree</div>
            </div>
          </form>

          <br></br><br></br>

          <div class="d-flex justify-content-center">
            <MDBRow>
              <MDBCol>
                <MDBBtn onClick={backHandler}>Back</MDBBtn>
              </MDBCol>
              <MDBCol>
              <MDBBtn type="button" onClick={handleSubmit}>Submit</MDBBtn>
              </MDBCol>
            </MDBRow>
          </div>
          {submitted && insertedId && <BigFiveCalculator id={insertedId} />}
        </div>
      </MDBContainer>





    </>
  );
}

export default Big5Personalities;
