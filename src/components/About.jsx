import React from 'react';
import { useHistory } from 'react-router-dom';
const About = () => {
const history = useHistory();
    return (
        <>
        <div className="container my-4">
           <div className="about">
          <span><span className="hr1"></span></span>
               <span>ABOUT ME</span>
               <span><span className="hr2"></span></span>
           </div>
</div>
            <div class="container-fluid justify-content-center px-xl-5 my-xl-4 my-3 px-3">
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6 col-12 p-4">
    <p>
      I was associated with SSF PLASTICS Indai Pvt Ltd Mumbai as Pan Indai lead Purchase Manager.My role was to:
      </p>
      <ul>
      
          <li>
              Maintain records of goods ordered and received.
          </li>
          <li>Locate vendors of materials, equipment or subplies,and interview them in order to detemine product availability and term of sales.</li>
          <li>Contril purchasing department budgets.</li>
          <li>Review purchase order cliams and contracts for conformance to company policy.</li>
          <li>Handle all project work of setting up the factory.</li>
      </ul>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-12 p-4">
      <p>Of 5 plants,in co-ordination with technical team,along with best negotiation skill and on time completion I have taken care of all  AMC contact/audiy agencies and complete set of work concerned for 12 plants with complete clean room set up for more than 600 crore group reporting to Md.</p>
       
       <button onClick={()=>{
         history.push('/about')
       }} className="btn btn-outline-primary px-4 my-4" style={{borderRadius:"50px",fontFamily:"Nunito', sans-serif !important"}}>Learn More</button>
    </div>

  </div>
</div> 
     
        </>
        )
}

export default About;
