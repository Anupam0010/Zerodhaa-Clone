import React from 'react'
function Education() {
    return ( 
          <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 col-md-6 '>
     <img src='media/images/education.svg ' className='img-fluid' />
            </div>
            <div className='col-12 p-md-0 p-4 col-md-6 mt-5'>
                <h1 className='fs-3 fs-md-3' style={{color:"#424242"}}> Free and open market education</h1>
                <p className='mt-3 ' style={{color:"#424242"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' className='' style={{textDecoration:"None",color:"#387ed1"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                <p className='mt-5' style={{color:"#424242"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='' style={{textDecoration:"None",color:"#387ed1"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>  
                  
                </div>
                
            </div>
            </div>  
    
     );
}

export default Education;