 import React from 'react';
 import { Link } from 'react-router-dom';
 function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore,
    arrowIcon,
    marginTop=""

}) {
    return ( 
        <div className='container mt-md-0  p-4 p-md-5'>
            <div className='row d-flex align-items-md-center '>
                <div className='col-md-5 col-12 p-md-5 order-2 order-md-1  ' >
                    <h2 style={{fontSize:"24px",color:"#424242"}}>{productName}</h2>
                    <p className='mt-md-3' style={{lineHeight:"24px",fontSize:"17px",color:"#424242"}}>{productDescription}</p>
                    <Link to={""} style={{textDecoration:"None",color:"#387de1",fontSize:"16px"}}>{learnMore}{arrowIcon}</Link>
                    

                </div>
                
                
                <div className='col-md-7 col-12 order-1 order-md-2  '>
                    <img src={imageUrl} className='img-fluid '/>

                </div>
                
            </div>
        </div>
     );
 }
 
 export default RightSection;
 