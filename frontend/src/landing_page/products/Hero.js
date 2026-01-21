import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className='container '>
            <div className='row text-center ' style={{marginTop:"160px"}}>
                <h1 className='' style={{fontSize:"28px",color:"#424242"}}>Zerodha Products</h1>
                <p style={{fontSize:"20px",color:"#424242"}}>Sleek, modern, and intuitive trading platforms</p>
                <p style={{fontSize:"16px", color:"#424242"}}>Check out our <Link to={""} style={{textDecoration:"none"}}>investment offerings</Link> <i class="fa-solid fa-arrow-right" style={{color:"#387ed1"}}></i> </p>
            
            
            </div>
           
        </div>
      );
}

export default Hero;