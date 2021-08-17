import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className="container-fluid mx-0 pt-4 text-center" style={{border:"",boxShadow:"0px -1px 13px 1px lightgray"}} >
            <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-6 col-6">
                    <p>© Copyright <strong> MG Purchasing Solution.</strong> All Rights Reserved Designed by <span style={{color:"rgb(58, 147, 177)"}} >ImranSiddiqui</span></p>
                </div>
                <div className="col-xl-5  col-lg-4 col-md-6 col-6 ftrInline" >
                    <ul type="none">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li> 
                        <li><a href=""> Privacy Policy</a></li>
                       <li><a href=""> Terms of Use</a></li>
                    </ul>
                </div>
            </div>

        </div>
        </footer>
         )
};

export default Footer;
