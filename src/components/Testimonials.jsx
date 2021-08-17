import React from 'react';
// import Testimonials5 from './Testimonials5.jpg';
// import Testimonials1 from './Testimonials1.jpg';
import Testimonials5 from './Testimonials5.jpg'
import Testimonials1 from './Testimonials1.jpg'


const Testimonials = () => {
    return (<>
        {/* <div className="container-fluid bg-light p-5">
              <div className="container my-4">
           <div className="about">
          <span><span className="hr1"></span></span>
               <span>TESTIMONIALS</span>
               <span><span className="hr2"></span></span>
           </div>
         </div>
           <p className="mt-4 text-center"> A rerum nisi doloremque odit numquam quidem,  reprehenderit dolorum!</p>
            <div className="row justify-content-center my-4  mx-2">
      <div className="col-md-5 col-xl-5 col-12 p-3 text-center">
      
          <div className="bg-white  my-5">
          <img src={Testimonials5} alt="i" className="ima-fluid" width="300px"/>
          <h2 className="pt-2">John Larson</h2>
            <p>Entrepreneur</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
          </div>
      </div>
      <div className="col-md-6 col-xl-5 col-12 p-3 mx-2 text-center">
          <div className="bg-white  my-5">
          <img src={Testimonials1} alt="i" className="ima-fluid" width="300px" />
            <h2 className="pt-2">Soul GoodMan</h2>
            <p>Ceo & Founder</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
          </div>
      </div>
            </div> 

        </div> */}
{/* testtinf */}
   <div className="container-fluid bg-light pt-5 pb-1 my-5">
   <div className="container ">
           <div className="about">
          <span><span className="hr1"></span></span>
               <span >TESTIMONIALS</span>
               <span><span className="hr2"></span></span>
           </div>
           <p className="mt-3 text-center"> A rerum nisi doloremque odit numquam quidem,  reprehenderit dolorum!</p>
         </div>
<div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-primary" aria-current="true" aria-label="Slide 1"></button>
    <button type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-primary" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="bg-primary" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="bg-primary" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="bg-primary" aria-label="Slide 5"></button>
  </div>


  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="row justify-content-center gx-5  my-4  mx-2">
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto" >
          <div className="bg-white mb-5 my-3 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
           <div className="row">
             <div className="col-4 text-center ">
             <img src={Testimonials5} alt="i" className="img-fluid mt-2 mt-2"/>
              </div>
              <div className="col-8">
              <h2 className="pt-2">John Larson</h2>
            <p>Entrepreneur</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
              </div>
           </div>
          </div>

          
          
      </div>
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto ">
          <div className="bg-white mb-5 my-3 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
          <div className="row">
          <div className="col-4 text-center ">
          <img src={Testimonials1} alt="i" className="img-fluid mt-2" />
          </div>
          <div className="col-8">
            <h2 className="pt-2">Soul GoodMan</h2>
            <p>Ceo & Founder</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
            </div>
            </div>
          </div>
      </div>
            </div>
    </div>
    <div className="carousel-item">
    <div className="row justify-content-center gx-5  my-4  mx-2">
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto" >
          <div className="bg-white my-3  mb-5 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
           <div className="row">
             <div className="col-4 text-center ">
             <img src={Testimonials5} alt="i" className="img-fluid mt-2 mt-2"/>
              </div>
              <div className="col-8">
              <h2 className="pt-2">John Larson</h2>
            <p>Entrepreneur</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
              </div>
           </div>
          </div>

          
          
      </div>
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto ">
          <div className="bg-white mb-5 my-3 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
          <div className="row">
          <div className="col-4 text-center ">
          <img src={Testimonials1} alt="i" className="img-fluid mt-2" />
          </div>
          <div className="col-8">
            <h2 className="pt-2">Soul GoodMan</h2>
            <p>Ceo & Founder</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
            </div>
            </div>
          </div>
      </div>
            </div>
    </div>
    <div className="carousel-item">
    <div className="row justify-content-center gx-5  my-4  mx-2">
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto" >
          <div className="bg-white mb-5 my-3 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
           <div className="row">
             <div className="col-4 text-center ">
             <img src={Testimonials5} alt="i" className="img-fluid mt-2 mt-2"/>
              </div>
              <div className="col-8">
              <h2 className="pt-2">John Larson</h2>
            <p>Entrepreneur</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
              </div>
           </div>
          </div>

          
          
      </div>
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto ">
          <div className="bg-white mb-5 my-3 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
          <div className="row">
          <div className="col-4 text-center ">
          <img src={Testimonials1} alt="i" className="img-fluid mt-2" />
          </div>
          <div className="col-8">
            <h2 className="pt-2">Soul GoodMan</h2>
            <p>Ceo & Founder</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
            </div>
            </div>
          </div>
      </div>
            </div>
              </div>
            <div className="carousel-item">
            <div className="row justify-content-center gx-5  my-4  mx-2">
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto" >
          <div className="bg-white mb-5 my-3 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
           <div className="row">
             <div className="col-4 text-center ">
             <img src={Testimonials5} alt="i" className="img-fluid mt-2 mt-2"/>
              </div>
              <div className="col-8">
              <h2 className="pt-2">John Larson</h2>
            <p>Entrepreneur</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
              </div>
           </div>
          </div>

          
          
      </div>
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto ">
          <div className="bg-white mb-5 my-3 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
          <div className="row">
          <div className="col-4 text-center ">
          <img src={Testimonials1} alt="i" className="img-fluid mt-2" />
          </div>
          <div className="col-8">
            <h2 className="pt-2">Soul GoodMan</h2>
            <p>Ceo & Founder</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
            </div>
            </div>
          </div>
      </div>
            </div>
    </div>
    <div className="carousel-item">
    <div className="row justify-content-center gx-5  my-4  mx-2">
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto" >
          <div className="bg-white mb-5 my-3 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
           <div className="row">
             <div className="col-4 text-center ">
             <img src={Testimonials5} alt="i" className="img-fluid mt-2 mt-2"/>
              </div>
              <div className="col-8">
              <h2 className="pt-2">John Larson</h2>
            <p>Entrepreneur</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
              </div>
           </div>
          </div>

          
          
      </div>
      <div className="col-12 col-lg-5 col-xl-5 p-2 gx-5 m-auto ">
          <div className="bg-white mb-5 px-3 border" style={{border:"",boxShadow:"1px -1px 13px 1px lightgray"}}>
          <div className="row">
          <div className="col-4 text-center ">
          <img src={Testimonials1} alt="i" className="img-fluid mt-2" />
          </div>
          <div className="col-8">
            <h2 className="pt-2">Soul GoodMan</h2>
            <p>Ceo & Founder</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa iusto, eum facilis, ea enim maiores doloribus laborum quia soluta accusantium laudantium explicabo, mollitia dolorum quam non praesentium omnis ex.
            </p>
            </div>
            </div>
          </div>
      </div>
            </div>
    </div>
    </div>
  </div>
 </div>
 
</>
    )
}

export default Testimonials;