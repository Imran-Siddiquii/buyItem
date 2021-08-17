import React from 'react';

const CatList = ({filter,catItem}) => {
    return (
        <>
         <div className="menu-tabs container-fliud">
            <div className="menu-tab d-flex justify-content-center  mx-xl-4 m-4">
                {/* <button className="btn btn-warning"  onClick={()=>setitem(Sdata)}  >All</button> */}
                {catItem.map((elc,index)=>{
                   return <button className="btn btn-primary mx-2" activeClassName="activ_class" key={index} onClick={()=>filter(elc)}>{elc}</button>
                })}
               
            </div>
        </div>
          
        </>
    )
}

export default CatList;

