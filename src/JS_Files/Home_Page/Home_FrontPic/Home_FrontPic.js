import React from 'react';

//Imports
import StartPic from './img/Front_Pic2.jpg'

const HomeFrontPic = () => {


    return (
        <div className="hp_startPic">
            <img src={StartPic} alt="Pink Room - Wrocław" />
            <div className="hp_frontPicArrow IconStyle">
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    );
}

export default HomeFrontPic;
