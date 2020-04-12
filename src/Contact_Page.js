import React from 'react';


/* ---------- App imports ---------- */
import Contact from './Contact/ContactContext';                         //ok
import Map from './Map/MapContext';                                     //ok



const Home = ()  => {
    return (
        <div>
            <Contact />
            <Map />
        </div>
    );
}

export default Home;
