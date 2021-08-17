import React from 'react';
import Hero from './Hero.png';
import Client from './Image/clients/Client.png';
import Client2 from './Image/clients/Client2.png';
import Client3 from './Image/clients/Client3.png';
import Client4 from './Image/clients/Client4.png';
import Client5 from './Image/clients/Client5.png';
import Client6 from './Image/clients/Client6.png';
import About from './About';
import Products from './Products';
import CareerHis from './CareerHis';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history= useHistory();
    return (<>
                <div className="container my-xl-5 my-lg-5 my-2 ">
                <div className="row">
    <div className="col-xl-6 col-lg-6 col-md-12 col-12 justify-content-center my-auto ">
      <span style={{fontSize:"50px",fontWeight:"700"}}>Grow your business with Mukul Gaikwad </span><br />
      <button onClick={()=>{
        history.push('/product')
      }} className="btn btn-outline-primary mt-xl-3 mt-lg-3 px-4" style={{borderRadius:"50px",fontFamily:"Nunito', sans-serif !important"}} >See Product</button>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
      <img src={Hero} alt="helo" className="img-fluid"  />
    </div>
  </div>
</div> 
  <div className="container-fluid my-xl-5 my-lg-5 my-3">
  <div className="row bg-light px-xl-5 py-xl-3  ">
    <div className="col-xl-2 col-lg-2 col-md-3 justify-content-center col-6 px-xl-5">
      <img src={Client}  className="img-fluid ImageSeturation" alt="myob" />
    </div>
    <div className="col-xl-2 col-lg-2 col-md-3 col-6 px-xl-5">
    <img src={Client2} className="img-fluid " alt="Balimo" />
    </div>
    <div className="col-xl-2 col-lg-2 col-md-3 col-6 px-xl-5 ">
    <img src={Client3} className="img-fluid" alt="LifeGroup" />
    </div>
    <div className="col-xl-2 col-lg-2 col-md-3 col-6 px-xl-5">
    <img src={Client4} className="img-fluid" alt="lilly"/>

    </div>
    <div className="col-xl-2 col-lg-2 col-md-3 col-6 px-xl-5">
    <img src={Client5} className="img-fluid" alt="citrus" />

    </div>
    <div className="col-xl-2 col-lg-2 col-md-3 col-6 px-xl-4">
    <img src={Client6} alt="Turstly" className="img-fluid" />

    </div>
  </div>
</div>     
 <About/>
 <Products/>
   <CareerHis/>
   <Testimonials/>
   <Contact/> 
   </>)
};

export default Home;