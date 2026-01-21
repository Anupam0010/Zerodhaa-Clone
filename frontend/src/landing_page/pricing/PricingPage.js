import React from 'react';
import Hero from "./Hero";
import EquityTable from './EquityTable';
import AMCChargesTable from './AMCChargesTable';
import CFO from './CFO';
import ChargesExplained from './chargesExplained';

function PricingPage() {
    return (  
        <>
        <Hero/>
        <EquityTable/>
        <AMCChargesTable/>
        <CFO/>
        <ChargesExplained/>
        </>
        
        
    );
}

export default PricingPage;