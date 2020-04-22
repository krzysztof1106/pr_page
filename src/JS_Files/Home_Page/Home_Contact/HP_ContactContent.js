import React from 'react';
import HPCLink from './HP_ContactLink';
import HPCTile from "./HP_ContactTile";


//***************
//Icons
    const socialIcon = "fas fa-comments";
    const phoneIcon = "fas fa-phone";
    const locationIcon = "fas fa-map-marker-alt";


//***************
//Descriptions
    const socialDescription = "Umów się przez social media!";
    const phoneDescription = "Umów się telefonicznie!";
    const locationDescription = "Odwiedż nas w salonie!";


//***************
//Headers
    const socialHeader = <HPCLink link="https://www.facebook.com/l.lashesstudio" title="Napisz na Facebooku" name="fb: L.Lashes"/>;
    const phonelHeader = <HPCLink link="tel:531-040-929" title="Zadzwoń" name="+48 537-323-793"/>;
    const locationlHeader = <HPCLink link="https://www.google.com/maps/place/Spi%C5%BCowa+21A,+53-442+Wroc%C5%82aw,+Poland/@51.1024079,16.9990743,17z/data=!3m1!4b1!4m5!3m4!1s0x470fc21bbb48607f:0x3d982554ba38e50e!8m2!3d51.1024079!4d17.001263" title="Lokalizacja salonu" name="Spiżowa 21A, Wrocław"/>;


const HPContactContent = (props) => {

    return (
        <article>
            <div className="homeContact">
                <div className="homeContactTopStyle"></div>
                <div className="MainContent">
                    <div className="homeContactBox">
                        <HPCTile icon={socialIcon} description={socialDescription} header={socialHeader}/>
                        <HPCTile icon={phoneIcon} description={phoneDescription} header={phonelHeader}/>
                        <HPCTile icon={locationIcon} description={locationDescription} header={locationlHeader}/>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default HPContactContent;