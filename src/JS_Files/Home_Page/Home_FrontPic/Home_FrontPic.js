import React from 'react';

//Imports
import StartPic from './img/Front_Pic2.jpg'

const HomeFrontPic = () => {


    return (
        <div className="hp_frtPic">
            <img src={StartPic} alt="Pink Room - Wrocław" />
            <div className="hp_frtPicMainBox ContentStyle">
                <div>
                    <div className="hp_frtPicTopicBox">
                        Pink room
                    </div>
                    <div>
                        Salon kosmetyczny <br /> Wrocław
                    </div>
                </div>
                <div className="hp_frtPicArrow">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    );
}

export default HomeFrontPic;

/* <i className="fas fa-chevron-down"></i> */
/* <i className="fas fa-long-arrow-alt-down"></i> */
/* <i className="fas fa-angle-double-down"></i> */