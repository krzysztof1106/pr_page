import React from 'react';

import MainFooter from "./Footer_Links";

const FooterContent = (props) => {

    return (
        <footer>
            <div className="footerCoppyrightBox">© Pink Room 2020 - All Rights Reserved</div>
            <div className="footerSocialMedia">
                
                <MainFooter link="https://www.facebook.com/l.lashesstudio" title="Odwiedź mnie na Facebooku" ikon="fab fa-facebook-square"/>
                <MainFooter link="https://instagram.com/l.lashes_wroclaw?igshid=pdib9fqq7yis" title="Odwiedź mnie na Instagramie" ikon="fab fa-instagram"/>
                <MainFooter link="tel:531-040-929" title="Zadzwoń i dowiedz się więcej" ikon="fas fa-phone"/>

            </div>
        </footer>
    );
}

export default FooterContent;
