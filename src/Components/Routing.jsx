import React  from "react";
import { Routes, Route } from "react-router-dom";
import { ContactInformation, FullLayout, ProfessionalExperience, ProfileOverview,
ProjectShowcase, TechnicalProficiency } from "./exports";

const Routing = () => {
    return(
        <Routes>
            <Route index path="/" element={<FullLayout/>}/>
            {/* other meta-routes */}
        </Routes>
    )
}

export default Routing;

