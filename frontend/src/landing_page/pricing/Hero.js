import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center   p-md-5'>
            <div className='row mt-md-0 mt-5   p-md-5'>
                <h1 style={{fontSize:"28px", color:"#424242"}}>Charges</h1>
                <p style={{fontSize:"20px", color:"#9b9b9b"}}>List of all charges and taxes
            </p>
            <div className='col-md col-12 mt-1 mt-md-5  ' style={{marginTop:""}}>
                <img src='media\images\pricing0.svg' className='img-fluid  pricing  mt-5' style={{width:"70%"}}/>
                <h1 style={{fontSize:"28px",color:"#424242"}}>Free equity delivery</h1>
                <p style={{fontSize:"16px",color:"#666666" ,lineHeight:"25px" ,marginTop:"25px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-12 col-md mt-md-5 mt-1  ' style={{marginTop:""}}>
                <img src='media\images\intradayTrades.svg' className='mt-5 img-fluid pricing' style={{width:"70%"}}/> 
                 <h1 style={{fontSize:"28px",color:"#424242"}}>Intraday and F&O trades</h1>
                 <p style={{fontSize:"16px",color:"#666666",lineHeight:"25px",marginTop:"25px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per <br className='d-md-none d-none'/> executed order on intraday trades across<br className='d-md-none d-none'/> equity, currency, and commodity trades. Flat<br className='d-md-none d-none'/> ₹20 on all option trades.</p>
            </div>
            <div className='col-12 col-md mt-md-5 mt-1' style={{marginTop:"160px"}}>
                <img src='media\images\pricingEquity.svg' className='mt-5 img-fluid pricing' style={{width:"70%"}}/>
                 <h1 style={{fontSize:"28px",color:"#424242"}}>Free direct MF</h1>
                 <p style={{fontSize:"16px",color:"#666666" ,lineHeight:"25px",marginTop:"25px"}}>All direct mutual fund investments are<br className='d-md-none d-none'/> absolutely free — ₹ 0 commissions & DP<br className='d-md-none d-none'/> charges.</p>
            </div>

            </div>
        </div>
     );
}

export default Hero;