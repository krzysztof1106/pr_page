import React from 'react';


import ContactCtx from './CP_Context';
import ContactMapPic from './img/Contact_MapPic.jpg';


const ContactCtn = () => {

    return (
        <div className="CP_mainBox">
            <div className="CP_contentBox">
                <div className="TopicBox">Kontakt:</div>
                <ContactCtx cpHeader="Telefon:" cpDescription="+48 537-323-793"/>
                <ContactCtx cpHeader="Email:" cpDescription="Pelczar.Lena@gmail.com"/>
                <ContactCtx cpHeader="Lokalizacja:" cpDescription="Spiżowa 21A"/>
            </div>

            <div className="CP_mapBox">
                <img src={ContactMapPic} alt="Pink Room Wrocław" />
            </div>
        </div>
    );
}

export default ContactCtn;
