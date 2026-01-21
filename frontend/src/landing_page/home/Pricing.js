 import React from 'react'
 function Pricing() {
    return (  
        <div className='container p-md-5 mt-5'>
            <div className='row p-3 p-md-5'>
                <div className='col-12 col-md-5'>
                    <h2>Unbeatable pricing</h2>
                    <p style={{color:"#424242"}}>We pioneered the concept of discount broking and price transparency 
                        in India. Flat fees and no hidden charges.</p>
                        <a href='' style={{textDecoration:"None",color:"#387ed1"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>

                </div>
                <div className='col-12 col-md-7 d-flex flex-column flex-md-row gap-3 gap-md-5 justify-content-center align-items-center' style={{display:"flex", gap:"50px"}}>
                    <div className="pricing-box " style={{width:"186px", height:"96px", display:"flex"}}>
              <img src="media/images/pricing-eq.svg" alt=""  style={{
    width: "120px",
    height: "88px",
    objectFit: "contain"
  }} />
              <p style={{marginTop:"35px", fontSize:"10px",marginTop:"35px",color:"#666666"}}>Free account<br/>opening</p>
            </div>
            <div className="pricing-box" style={{width:"186px",height:"96px" ,display:"flex", alignItems:"center"}}>
              <img src="media/images/pricing-eq.svg" alt=""   style={{
    width: "120px",
    height: "88px",
    objectFit: "contain"
  }}/>
              <p style={{fontSize:"10px",marginTop:"35px", lineHeight:"1.4",minWidth:'110px',color:"#666666"}}>Free equity delivery <br/>
                and direct mutual funds</p>
            </div>
  

            <div className="pricing-box" style={{width:"186px", height:"96px",display:"flex"}}>
              <img src="media\images\intradayTrades.svg" alt=""   style={{
    width: "120px",
    height: "88px",
    objectFit: "contain"
  }}/>
              <p style={{marginTop:"35px", fontSize:"10px",color:"#666666"}}>Intraday and<br/>F&amp;O</p>
            </div>
                    
                </div>

            </div>

        </div>
    );
 }
 
 export default Pricing;
