 import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import NoticeBox from './NoticeBox';
 function SupportPage() {
    return (  
<>
<Hero/>
<CreateTicket 
Boxname={"Account Opening"}
Boxitem1={"Resident individual"}
Boxitem2={"Minor"}
Boxitem3={"Non Resident Indian"}
/>
<CreateTicket 
Boxname={"Your Zerodha Account"}
Boxitem1={"Your Profile"}
Boxitem2={"Account Modification"}
Boxitem3={"Nomination"}
/>
<CreateTicket 
Boxname={"Kite"}
Boxitem1={"IPOs"}
Boxitem2={"Trading FAQs"}
Boxitem3={"Charts and Orders"}
/>
<CreateTicket 
Boxname={"Funds"}
Boxitem1={"Add Money"}
Boxitem2={"Withdraw Money"}
Boxitem3={"Add bank account"}
/>
<CreateTicket 
Boxname={"Console"}
Boxitem1={"Portfolio"}
Boxitem2={"Corporate actions"}
Boxitem3={"Funds Statements"}
/>
<CreateTicket 
Boxname={"Coin"}
Boxitem1={"Mutual Funds"}
Boxitem2={"National Pension Scheme(NSP)"}
Boxitem3={"Features on coin"}
/>


</>
    )
    
 }
 
 export default SupportPage;