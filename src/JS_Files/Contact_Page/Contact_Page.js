import React from 'react';

//Import
import Topic from "../_Main_Components/Side_Topic";
import ContactCtx from './CP_Context';

//Pictures
import ContactMapPic from './img/Contact_MapPic.jpg';


const ContactCtn = () => {

    return (
        <article>
            <div className="CP_mainBox">
                <div className="CP_contentBox">
                    <Topic topic = "Kontakt" />
                    <ContactCtx header="Telefon:" link="tel:531-040-929" title="Zadzwoń" description="+48 537-323-793"/>
                    <ContactCtx header="Email:" link="mailto:pelczar.lena@gmail.com" title="Napisz maila" description="Pelczar.Lena@gmail.com"/>
                    <ContactCtx header="Lokalizacja:" link="https://www.google.com/maps/place/Spi%C5%BCowa+21A,+53-442+Wroc%C5%82aw,+Poland/@51.1024079,16.9990743,17z/data=!3m1!4b1!4m5!3m4!1s0x470fc21bbb48607f:0x3d982554ba38e50e!8m2!3d51.1024079!4d17.001263" title="Zajrzyj do salonu" description="Spiżowa 21A"/>
                </div>

                <div className="CP_mapBox">
                    <img src={ContactMapPic} alt="Pink Room Wrocław" />
                </div>
            </div>
        </article>
    );
}

export default ContactCtn;