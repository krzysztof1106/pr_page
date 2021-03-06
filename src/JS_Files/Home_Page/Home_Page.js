import React from 'react';

//Iimports
import HomeFrontPic from "./Home_FrontPic/Home_FrontPic";
import HomeTreatments from "./Home_Treatments/Home_Treatment";
import HomeTeam from "./Home_Team/Home_Team";
import HomeReview from "./Home_Review/Home_Review";
import HomeContact from "./Home_Contact/Home_Contact";


const HomePage = (props) => {

    return (
        <div>
            <HomeFrontPic/>
            <HomeTreatments />
            <HomeTeam />
            <HomeReview />
            <HomeContact />
        </div>
    );
}

export default HomePage;