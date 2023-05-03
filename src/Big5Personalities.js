import React from "react";
import './index.css';
import logo from "./images/huachanglogo.png";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRadio } from "mdb-react-ui-kit";

const Big5 = ({step, setStep, formData, setFormData}) => {

  return (
<>
    <div class="navbar">
        <ul class="nav-list">
            <div class="logo">
                <a href='./'>
                 <img src= {logo} />
                 </a>
            </div>
                   
        </ul>
  
    </div>

    <MDBContainer className="">
      <div style={{margin:'50px'}}>

      <h2><b>Big Five Personalities Test</b></h2>
      <p>Please fill out the form below to test which position is best for you.</p>
    <hr />
        <form className="bg-white mt-3" action="">
          <p>
          1. Am the life of the party.           </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          2. Feel little concern for others          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          3. Am always prepared          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          4. Get stressed out easily           </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          5. Have a rich vocabulary           </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          6. Don't talk a lot.          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          7. Am interested in people          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          8. Leave my belongings around          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          9. Am relaxed most of the time   </p>       <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          10. Have difficulty understanding abstract ideas          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          11. Feel comfortable around people         </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          12. Insult people          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          13. Pay attention to details          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          14. Worry about things          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          15. Have a vivid imagination         </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          16. Keep in the background.         </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          17. Sympathize with other's feelings.         </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          18. Make a mess of things          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          19. Seldom feel blue          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          20. Am not interested in abstract ideas.          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          21. Start conversations          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          22. Am not interested in other people's problems. </p>          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          23. Get chores done right away.          </p>
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          24. Am easily disturbed          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          25. Have excellent ideas.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          26. Have little to say.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          27. Have a soft heart.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          28. Often forget to put things back in their proper place.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          29.Get upset easily          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          30. Do not have a good imagination.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          31. Talk a lot of different people at parties.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          32. Am not really interested in others          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          33. Like order          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          34. Change my mood a lot.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          35. Am quick to understand things          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          36. Don't like to draw attention to myself          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          37. Take time out for others          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          38. Shirk my duties          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          39. Have frequent mood swings.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          40. Use difficult words.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          41. Don't mind being the center of attention          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          42. Feel other's emotions          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          43. Follow a schedule.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          44. Get irritated easily          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          45. Spend time reflecting on things          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          46. Am quiet around strangers.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          47. Make people feel at ease.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          48. Am exacting in my work.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          49. Often feel blue.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>

        <form className="bg-white mt-3" action="">
          <p>
          50. Am full of ideas.          </p>     
          <div className="text-center">
            <div className="d-inline mx-3">Disagree</div>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="1" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="2" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="3" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="4" inline defaultChecked/>
            <MDBRadio name="flexRadioDefault" id="flexRadioDefault1" label="5" inline defaultChecked/>
            <div className="d-inline mx-3">Agree</div>
          </div>
        </form>


        
        <div className="text-end">
          <MDBBtn>Home</MDBBtn>
        </div>
      </div>
    </MDBContainer>
</>
  );
}

export default Big5;
