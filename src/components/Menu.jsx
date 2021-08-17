import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu =()=>{
    return(<>
<div className="containeri-fluid">
   <div className="row">
     <div className="col-12">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <a className="navbar-brand text-capitalize" ><h3 className="BrandName">mG purchasing solutions</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
    <div className="collapse navbar-collapse mx-xl-5 "  id="navbarNav"> 
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-3">
          <span className="nav-link active" aria-current="page">
          <NavLink activeClassName="active_class" exact to="/"><span style={{color:"",display:"inline-block",textDecoration:"none"}}>Home</span></NavLink>
          </span>
        </li>
        <li className="nav-item mx-3">
        <span className="nav-link active" aria-current="page">
          <NavLink activeClassName="active_class" exact to="/about"><span style={{color:"",display:"inline-block",textDecoration:"none"}}>About</span></NavLink>
          </span>
        </li>
        <li className="nav-item mx-3">
        <span className="nav-link active" aria-current="page">
          <NavLink activeClassName="active_class" exact to="/product"><span style={{color:"",display:"inline-block",textDecoration:"none"}}>Products</span></NavLink>
          </span>
        </li>
          
        <li className="nav-item mx-3">
        <span className="nav-link active" aria-current="page">
          <NavLink activeClassName="active_class" exact to="/testimonials"><span style={{color:"",display:"inline-block",textDecoration:"none"}}>Testimonials</span></NavLink>
          </span>
        </li>
        <li className="nav-item mx-3">
        <span className="nav-link active" aria-current="page">
          <NavLink activeClassName="active_class" exact to="/contact"><span style={{color:"",display:"inline-block",textDecoration:"none"}}>Contacts</span></NavLink>
          </span>
        </li>
       
      </ul>
      </div>
    </div>
</nav>
</div>
   </div>
  </div>
  
    </>)
}
export default Menu;