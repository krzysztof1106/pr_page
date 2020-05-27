import React from 'react';

//Import
import Topic from "../_Main_Components/Side_Topic";
import ContactCtx from './Contact_ContentRow';

//Pictures
import ContactMapPic from './img/Contact_MapPic.jpg';

//Row
const hed_1 = "Telefon:";
const link_1 = "tel:531-040-929";
const title_1 = "Zadzwoń";
const des_1 = "+48 537-323-793";

const hed_2 = "Email:";
const link_2 = "mailto:pelczar.lena@gmail.com";
const title_2 = "Napisz maila";
const des_2 = "Pelczar.Lena@gmail.com";

const hed_3 = "Lokalizacja:";
const link_3 = "https://www.google.com/maps/place/Spi%C5%BCowa+21A,+53-442+Wroc%C5%82aw,+Poland/@51.1024079,16.9990743,17z/data=!3m1!4b1!4m5!3m4!1s0x470fc21bbb48607f:0x3d982554ba38e50e!8m2!3d51.1024079!4d17.001263";
const title_3 = "Zajrzyj do salonu";
const des_3 = "Spiżowa 21A, Wrocław";

const Contact = () => {

    return (
        <article className="ContentStyle">
            <div className="ContentMaxWidth">
                <div className="ContentBox">
                    <Topic topic = "Kontakt" />
                    <div className="cp_contentBox">
                        <ContactCtx header={hed_1} link={link_1} title={title_1} description={des_1}/>
                        <ContactCtx header={hed_2} link={link_2} title={title_2} description={des_2}/>
                        <ContactCtx header={hed_3} link={link_3} title={title_3} description={des_3}/>
                    </div>
                </div>
                <div className="cp_mapBox">
                    <img src={ContactMapPic} alt="Pink Room Wrocław" />
                </div>
            </div>
        </article>
    );
}

export default Contact;