import React from 'react';


/* ---------- App imports ---------- */
import FrontPic from './Front_Pic/Front_Pic';
import FPTreatments from './Treatments/FP_Treatments_Context';          //ok
import Team from './Team/TeamContext';                                  //ok
import Contact from './Contact/ContactContext';                         //ok
import Map from './Map/MapContext';                                     //ok



const Home = ()  => {
    return (
        <div>
            <FrontPic />
            <FPTreatments />
            <Team />
            <Contact />
            <Map />
        </div>
    );
}

export default Home;
