import React from 'react';
function ChargesExplained() {
    return ( 
        <div className='container p-3  p-md-5 ms-md-5' style={{marginLeft:""}} >
       <div className='row offset-md-1 '>
        <div className="col-12" style={{color:"#424242"}}>
    <h2 style={{fontSize:"24px"}}>Charges explained</h2>
  </div>

        {/* <h2 className='' style={{marginLeft:""}}>Charges explained</h2> */}
        <div className='col-md-6 col-12 mt-4  ' style={{fontSize:"12px", color:"#424242",marginLeft:""}}>
       <p style={{fontSize:"17px", color:"#424242"}}>Securities/Commodities transaction tax</p>
       <p>Tax by the government when transacting on the exchanges. Charged as above on both buy <br/> and sell sides when trading equity delivery. Charged only on selling side when trading <br/> intraday or on F&O.</p>
       <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.<br/> Important to keep a tab.</p>
       <p style={{fontSize:"17px", color:"#424242"}} >Transaction/Turnover Charges</p>
       <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
       <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore<br/> w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
       <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross<br/> turnover.</p>
       <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-<br/>exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate<br/> basis w.e.f. December 1, 2022.</p>
        <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross<br/> turnover.</p>
        <p style={{fontSize:"17px", color:"#424242"}}>Call & trade</p>
        <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including<br/> auto square off orders.</p>
        <p style={{fontSize:"17px", color:"#424242"}}>Stamp charges</p>
        <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for<br/> transacting in instruments on the stock exchanges and depositories.</p>
        <p style={{fontSize:"17px", color:"#424242"}}>NRI brokerage charges</p>
        <p>
            <ul>
                <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is<br/> lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            </ul>
        </p>
        <p style={{fontSize:"17px", color:"#424242"}}>Account with debit balance</p>
        <p>If the account is in debit balance, any order placed will be charged ₹40 per executed order<br/> instead of ₹20 per executed order.</p>
        <p></p>
        <p></p>
        </div>
        <div className='col-md-6 col-12 mt-4' style={{fontSize:"12px", color:"#424242"}}>
            <p style={{fontSize:"17px", color:"#424242"}}>GST</p>
            <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges<br/> + transaction charges)

</p>
            <p style={{fontSize:"17px", color:"#424242"}}>SEBI Charges</p>
            <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the<br/> markets.</p>
            <p style={{fontSize:"17px", color:"#424242"}}>DP (Depository participant) charges</p>
            <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading<br/> account ledger when stocks are sold, irrespective of quantity.</p>
            <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction <br/> on the CDSL fee.</p>
            <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL<br/> fee.</p>
            <p style={{fontSize:"17px", color:"#424242"}}>Pledging charges</p>
            <p>₹30 + GST per pledge request per ISIN.</p>
             <p style={{fontSize:"17px", color:"#424242"}}>AMC (Account maintenance charges)</p>
             <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn<br/> more about BSDA, Click here</p>
             <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn<br/> more about AMC, Click here</p>
             <p style={{fontSize:"17px", color:"#424242"}}>Corporate action order charges</p>
             <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through<br/> Console.</p>
             <p>Off-market transfer charges</p>
             <p>₹25 per transaction.</p>
            


        </div>
          <div className="col-12 mt-3" >
    <h2 style={{fontSize:"16px",color:"#424242",fontWeight:"500"}}>Desclaimer</h2>
    <p className='mt-3' style={{fontSize:"14px",color:"#424242"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges.<br className='d-none d-md-block'/> Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and<br className='d-none d-md-block'/> assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery<br className='d-none d-md-block'/> brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1%<br className='d-none d-md-block'/> will be charged.</p>
  </div>
       </div>
        </div>
     );
}

export default ChargesExplained;