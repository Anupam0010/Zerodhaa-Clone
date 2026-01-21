import React from 'react';
function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center' style={{color:"#424242"}}>
                <h1 className='mt-5' style={{fontSize:"24px"}}>The Zerodha Universe</h1>
                <p className='mt-3' style={{fontSize:"16px"}}>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-12 col-md p-5' style={{fontSize:"12px",color:"#9B9B9B"}}>
                    <div className=''>
                    <img src='media\images\zerodhaFundhouse.png' style={{width:"55%"}}/>
                    <p>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
                    </div>
                    <div className=' ' style={{marginTop:"64px"}}>
                    <img src='media\images\streakLogo.png' style={{width:"50%"}}/>
                     <p className='mt-md-0 mt-2'>Systematic trading platform<br/>
that allows you to create and backtest<br/>
strategies without coding.</p>
                </div>
                </div>
                <div className='col-12 col-md p-5' style={{fontSize:"12px",color:"#9B9B9B"}}>
                     <div className=''>
                    <img src='media\images\sensibullLogo.svg' style={{width:"65%"}}/>
                    <p className='mt-md-0 mt-2'>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
                    </div>
                    <div className=' ' style={{marginTop:"64px"}}>
                    <img src='media\images\smallcaseLogo.png' style={{width:"65%"}}/>
                     <p>Systematic trading platform<br/>
that allows you to create and backtest<br/>
strategies without coding.</p>
                </div>
                </div>
                <div className='col-12 col-md p-5'style={{fontSize:"12px",color:"#9B9B9B"}}>
                     <div className=''>
                    <img src='media\images\tijori.svg' style={{width:"45%"}}/>
                    <p className='mt-md-0 mt-2'>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
                    </div>
                    <div className=' ' style={{marginTop:"64px"}}>
                    <img src='media\images\dittoLogo.png' style={{width:"40%"}}/>
                     <p className='mt-md-0 mt-2'>Systematic trading platform<br/>
that allows you to create and backtest<br/>
strategies without coding.</p>
                </div>
                </div>
               
                

            </div>
              <div className='col-12 col-md-3 mx-md-auto'> 
    <button 
        type='button' 
        className='btn btn-primary p-2  fs-5 offset-md-1 offset-2 mt-3 mb-5 hero-sign w-100' 
        style={{backgroundColor:"#387ed1"}} // Margin aur width style se hata diya
    >
        Sign up for free
    </button>
</div>
        </div>
     );
}

export default Universe;