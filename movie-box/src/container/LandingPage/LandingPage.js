import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import LandingPageContent from "../../components/LandingPageContent/LandingPageContent";
function LandingPage() {
    return (
        <div className="landingPage_container">
            <Navbar />
            <LandingPageContent /> 
        </div>
    )
}
export default LandingPage;