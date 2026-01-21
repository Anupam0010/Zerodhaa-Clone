 import React from 'react';
 function OpenAccount() {
    return (
         <div className='container p-md-5 mt-md-5'>
        <div className='row text-center'>
            <h1 className='mt-5 fs-4' style={{color:"#424242"}}>Open a Zerodha account</h1>
            <p className='mt-2' style={{font:"16px", color:"#666666"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            {/* <button style={{width:"20%", margin:"0 auto",backgroundColor:"#387ed1"}} type='button' className='btn btn-primary p-3 fs-5 mt-3 mb-5 '>Sign up for free</button> */}
<div className='col-12 col-md-3 mx-auto'> 
    <button 
        type='button' 
        className='btn btn-primary p-3 fs-5 mt-3 mb-5 hero-sign w-100' 
        style={{backgroundColor:"#387ed1"}} // Margin aur width style se hata diya
    >
        Sign up for free
    </button>
</div>
        </div>

       </div>

      );
 }
 
 export default OpenAccount;