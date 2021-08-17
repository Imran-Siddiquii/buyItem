import React from 'react';

const Catogary = ({items}) => {
    return (
        <>
                  <div className="menu-item mt-5 px-xl-0 container">
                  <div className="row ">
                      <div className="col-10 col-xl-10 mx-auto">
                          <div className="row">
                          {items.map((elem,index)=>{
            const{id,name,image,category}=elem;
            return(
            <div className="col-10 col-md-6 col-lg-6 col-xl-4 g-4  text-center"  key={index}>
                                  
                                      {/* for image */}
                                      
                                          <img src={image} alt="menu pic" width="300px" style={{border:"1px solid lightgray"}}/>
                                          <h4 className="mt-3">{name}</h4>
                                          <p>{category}</p>
                                      </div>
                                   )}) 
                                   }
                                   </div>
                     </div>
                      </div>
                  </div>
                  </>)
}
export default Catogary;

                                  
                                      
                                              
                                  
                                                                

