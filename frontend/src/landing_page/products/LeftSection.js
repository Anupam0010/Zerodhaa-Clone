import React from 'react';
import { Link } from 'react-router-dom';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
    arrowIcon,
    marginTop="120px",
    width="100%"
}) {
    return( 
        <div className='container p-md-5 ' style={{marginTop}}>
            <div className='row d-flex align-items-md-center gx-md-5 p-md-0 p-3 '>
                <div className='col-md-6 col-12'>
                    <img src={imageURL} style={{width}} className='img-fluid'/>
                </div>
                <div className='col-1'></div>
                  <div className='col-md-5 col-12' style={{marginTop:"60px",marginLeft:""}}>
                    <h2 style={{fontSize:"24px",color:"#424242"}}>{productName}</h2>
                    <p className='mt-3' style={{fontSize:"17px",color:"#424242",lineHeight:"24px"}}>{productDescription}</p>
            <div className='d-flex gap-5' style={{color:"#387ed1", fontSize:"16px"}}>
                <p>{tryDemo}{arrowIcon} </p>
                <p>{learnMore}{arrowIcon} </p>

            </div>
            <div className='d-flex gap-5' style={{width:"70%"}}>

               <Link to={""}> <img src={googlePlay}/></Link>
                <Link to={""}> <img src={appStore}/></Link>

            </div>
                  </div>

            </div>
            
        </div>
     );
}

export default LeftSection;