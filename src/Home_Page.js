import React from 'react';


/* ---------- App imports ---------- */
import HomeFrontPic from './JS_Files/Home_Page/Home_FrontPic/Home_FrontPic';
import HomeTreatments from './JS_Files/Home_Page/Home_Treatments/Home_Treatment';
import HomeTeam from './JS_Files/Home_Page/Home_Team/Home_TeamContent';
import HomeMap from './JS_Files/Home_Page/Home_Map/Home_Map';

import HomeContact from './JS_Files/Home_Page/Home_Contact/HP_ContactContent';



const HomePage = ()  => {
    return (
        <div>
            <HomeFrontPic />
            <HomeTreatments />
            <HomeTeam />
            <HomeContact />
            <HomeMap />
        </div>
    );
}

export default HomePage;
