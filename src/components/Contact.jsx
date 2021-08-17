import React from 'react';
import Footer from './Footer';
const Contact = () => {
    return (
      <>
        <div className="container">
          <div className="container my-xl-5 my-lg-4 my-4">
           <div className="about">
          <span><span className="hr1"></span></span>
               <span>CONTACT</span>
               <span><span className="hr2"></span></span>
           </div>
          </div>
         <div className="row my-5">
             <div className="col-xl-5 col-lg-4 col-md-4 col-12 p-5">
                 <h3>DD Plastics Project</h3>
                 <p>A competent professional offering 27 years of rice and cross-caltural experience in Logistics Management,Sales Operation and Business Development.</p>
                <a href="http://">
                 <i className="fab fa-facebook linkTag"></i></a>
                <a href="#"> <i className="fab fa-twitter linkTag"></i></a>
                
                 <a href="#"><i className="fab fa-linkedin linkTag" ></i></a>
                <a href="#"><i className="fab fa-instagram linkTag"></i></a>
             </div>
             <div className="col-xl-3 col-lg-3 col-md-4 col-12 p-5 p-md-0" >
             <i className="fas fa-map-marker-alt contactLink"></i>
             <span> B-8/302, Veena nagar Lbs marg,Mulund(W) Mumbai - 400080</span>
             <br/>
             <i className="fas fa-envelope contactLink"></i>
              <a href="mailto:dhirajd11@yahoo.co.in" className="contactLink" style={{display:"inline-block",textDecoration:"none"}}>dhirajd11@yahoo.co.in</a>
              
              <br/>

              <i className="fas fa-phone-alt contactLink"></i>
              <span className="contactLink">+91 9833551927</span>
              </div>
             
             <div className="col-xl-4 col-lg-4 col-md-4 col-12 p-5 p-md-0 text-center">

             <form>
             <div className="mb-xl-3">
             <input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Your Name"/>
               <input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Your Email"/>
               <input type="subject" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Subject"/>
  <textarea className="form-control mb-5" id="exampleFormControlTextarea1" rows="5"></textarea>
    <button type="submit" className="btn btn-outline-primary " style={{borderRadius:"50px",fontFamily:"Nunito', sans-serif !important"}}>Send Message</button>
          </div>
          </form>
             </div>
         </div>
        </div>
      <Footer/>         
</>
        )
      }
        
        
         
        

export default Contact;
