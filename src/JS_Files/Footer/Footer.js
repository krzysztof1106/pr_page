import React from 'react';

import FooterCtx from "./FooterContext";


const Footer = (props) => {

    return (
        <footer>
            <div className="footerCoppyrightBox">© Pink 2020 - All Rights Reserved</div>
            <div className="footerSocialMedia">
                <FooterCtx foterLink="https://www.facebook.com/l.lashesstudio" FoterTitle="Odwiedź mnie na Facebooku" FoterIkon="fab fa-facebook-square"/>
                <FooterCtx foterLink="https://instagram.com/l.lashes_wroclaw?igshid=pdib9fqq7yis" FoterTitle="Odwiedź mnie na Instagramie" FoterIkon="fab fa-instagram"/>
                <FooterCtx foterLink="tel:531-040-929" FoterTitle="Zadzwoń i dowiedz się więcej" FoterIkon="fas fa-phone"/>
            </div>
        </footer>
    );
}

export default Footer;
