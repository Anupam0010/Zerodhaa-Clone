import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { Link } from 'react-router-dom';
import Universe from './Universe';


function ProductPage() {
    return (  
        <>
        <Hero/>
        <LeftSection
        imageURL="media\images\kite.png"
        productName="Kite"
        productDescription={<>Our ultra-fast flagship trading platform with<br/>streaming market data,
            advanced charts, an <br/> elegant UI, and more. Enjoy the Kite<br/> experience
            seamlessly on your Android and<br/> iOS devices.</>}
        tryDemo="Try demo"
        learnMore="Learn more"
        arrowIcon={<i class="fa-solid fa-arrow-right"></i>}
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstore-badge.svg"
        
        
        
        />
        <RightSection
        imageUrl="media\images\console.png"
        productName={"Console"}
        productDescription={<>The central dashboard for your Zerodha <br/> account. Gain insights into your trades and<br/> investments with in-depth reports and<br/> visualisations.</>}
        learnMore={""}
        arrowIcon={""}
        />
          <LeftSection
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription={<>Buy direct mutual funds online, commission-<br/>free, delivered directly to your Demat<br/> account. Enjoy the investment experience<br/> on your Android and iOS devices.</>}
        tryDemo="Coin"
        arrowIcon={<i class="fa-solid fa-arrow-right"></i>}
        learnMore=""
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstore-badge.svg"
        marginTop='10px'
        
        
        
        />
        <RightSection
        imageUrl="media\images\kiteconnect.png"
        productName={"Kite Connect API"}
        productDescription={<>Build powerful trading platforms and <br/> experiences with our super simple <br/> HTTP/JSON APIs. If you are a startup, build <br/> your investment app and showcase it to our<br/> clientbase.</>}
        learnMore={"Kite Connect"}
        arrowIcon={<i class="fa-solid fa-arrow-right"></i>}
        marginTop='40px'
        />
          <LeftSection
        imageURL="media\images\varsity-products.svg"
        productName="Varsity mobile"
        productDescription={<>An easy to grasp, collection of stock market<br/> lessons with in-depth coverage and <br/> illustrations. Content is broken down into<br/> bite-size cards to help you learn on the go.</>}
        tryDemo=""
        arrowIcon=""
        learnMore=""
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstore-badge.svg"
        marginTop='10px'
        width='70%'
         />
         <p className='text-center mt-4' style={{fontSize:"20px",color:"#424242"}}>Want to know more about our technology stack? Check out the <Link to={""} style={{textDecoration:"None",color:"#387de1"}}>Zerodha.tech blog.</Link></p>
         <Universe/>

        
        </>
    );
}

export default ProductPage;