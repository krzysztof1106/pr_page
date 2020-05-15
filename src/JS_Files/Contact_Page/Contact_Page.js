import React from 'react';

//Import
import Topic from "../_Main_Components/Side_Topic";
import ContactCtx from './CP_Context';


import ContactMapPic from './img/Contact_MapPic.jpg';


const ContactCtn = () => {

    return (
        <div className="CP_mainBox">
            <div className="CP_contentBox">
                <Topic topic = "Kontakt" />
                <ContactCtx header="Telefon:" description="+48 537-323-793"/>
                <ContactCtx header="Email:" description="Pelczar.Lena@gmail.com"/>
                <ContactCtx header="Lokalizacja:" description="Spiżowa 21A"/>
            </div>

            <div className="CP_mapBox">
                <img src={ContactMapPic} alt="Pink Room Wrocław" />
            </div>
        </div>
    );
}

export default ContactCtn;
