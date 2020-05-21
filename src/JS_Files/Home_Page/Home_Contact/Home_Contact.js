import React from 'react';

//Imports
import Topic from "../../_Main_Components/Middle_Topic";
import Contact from "./Home_ContactTile";
import Map from "./Home_MapContent";


//***************
//Social media
    const socialIcon = "fas fa-comments";
    const socialDescription = "Umów się przez social media!";
    const socialLink = "https://www.facebook.com/l.lashesstudio";
    const socialName = "FB: L.Lashes";
    const socialTitle = "Napisz na Facebooku";

//Phone
    const phoneIcon = "fas fa-phone";
    const phoneDescription = "Umów się telefonicznie!";
    const phoneLink = "tel:531-040-929";
    const phoneName = "+48 537-323-793";
    const phoneTitle = "Zadzwoń teraz";


//Location
    const locationIcon = "fas fa-map-marker-alt";
    const locationDescription = "Odwiedż nas w salonie!";
    const locationLink = "https://www.google.com/maps/place/Spi%C5%BCowa+21A,+53-442+Wroc%C5%82aw,+Poland/@51.1024079,16.9990743,17z/data=!3m1!4b1!4m5!3m4!1s0x470fc21bbb48607f:0x3d982554ba38e50e!8m2!3d51.1024079!4d17.001263";
    const locationName = "Spiżowa 21A, Wrocław";
    const locationTitle = "Lokalizacja salonu";


const HPContactContent = (props) => {

    return (
        <article className="ContentStyle">
            <div className="hp_contact">
                <div className="hp_contactTopStyle"></div>
                <Topic topic="Kontakt" />
                <div className="hp_contactMainBox">
                    <div className="hp_contactContent">
                        <Contact icon={socialIcon} description={socialDescription} link={socialLink} name={socialName} title={socialTitle} />
                        <Contact icon={phoneIcon} description={phoneDescription} link={phoneLink} name={phoneName} title={phoneTitle} />
                        <Contact icon={locationIcon} description={locationDescription} link={locationLink} name={locationName} title={locationTitle} />
                    </div>
                </div>
            </div>
            <Map />
        </article>
    );
}

export default HPContactContent;