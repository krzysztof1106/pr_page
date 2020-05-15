import React from 'react';


/* ---------- App imports ---------- */
import HomeHeader from './JS_Files/Home_Page/Home_Topic/Home_Topic';
import HomeFrontPic from './JS_Files/Home_Page/Home_FrontPic/Home_FrontPic';
import HomeTreatments from './JS_Files/Home_Page/Home_Treatments/Home_Treatment';
import HomeTeam from './JS_Files/Home_Page/Home_Team/Home_Team';


import HomeContact from './JS_Files/Home_Page/Home_Contact/Home_Contact';
import HomeMap from './JS_Files/Home_Page/Home_Map/Home_Map';


const HomePage = (props)  => {
    return (
        <div>

            <HomeFrontPic />
            <HomeTreatments />
            <HomeTeam />
            <HomeContact />
            <HomeMap />
            <HomeHeader title="Example" />
        </div>
    );
}

export default HomePage;
