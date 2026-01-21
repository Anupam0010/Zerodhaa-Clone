import React from 'react'
function Hero() {
    return ( 
       <div className='container-md p-2 p-md-5 mt-5 mt-md-5'>
        <div className='row text-center'>
            {/* <img src='media/images/homeHero.png' alt='Hero IMG' className=' hero-img img-fluid mx-auto mb-4 ' style={{width:"85%"}}/> */}
            {/* Image ko ek responsive column wale div mein daala */}
<div className='col-12 col-md-10 mx-auto'>
    <img 
        src='media/images/homeHero.png' 
        alt='Hero IMG' 
        className='hero-img img-fluid mb-4' 
        // style={{width:"85%"}}  <-- Yeh line hata di hai
        // mx-auto bhi hata diya kyunki ab bahar wala div center karega
    />
</div>
            <h1 className='mt-3 mt-md-5'>Invest in everything</h1>
            <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            {/* <button style={{width:"20%", margin:"0 auto",backgroundColor:"#387ed1"}} type='button' className='btn btn-primary p-3 fs-5 mt-3 mb-5 hero-sign '>Sign up for free</button> */}
            

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

export default Hero;


