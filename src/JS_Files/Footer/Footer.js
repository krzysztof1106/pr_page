import React from 'react';

//Imports
import FooterCtx from "./FooterContext";


const Footer = (props) => {

    //Facebook
        const fbLink = "https://www.facebook.com/l.lashesstudio";
        const fbTitle = "Odwiedź mnie na Facebooku";
        const fbIkon = "fab fa-facebook-square";

    //Instagram
        const instaLink = "https://instagram.com/l.lashes_wroclaw?igshid=pdib9fqq7yis";
        const instaTitle = "Odwiedź mnie na Instagramie";
        const instaIkon = "fab fa-instagram";

    //Telefon
        const phoneLink = "tel:531-040-929";
        const phoneTitle = "Zadzwoń i dowiedz się więcej";
        const phoneIkon = "fas fa-phone";


    return (
        <footer>
            <div className="footerCoppyrightBox">© Pink 2020 - All Rights Reserved</div>
            <div className="footerSocialMedia">
                <FooterCtx foterLink={fbLink} FoterTitle={fbTitle} FoterIkon={fbIkon} />
                <FooterCtx foterLink={instaLink} FoterTitle={instaTitle} FoterIkon={instaIkon} />
                <FooterCtx foterLink={phoneLink} FoterTitle={phoneTitle} FoterIkon={phoneIkon} />
            </div>
        </footer>
    );
}

export default Footer;
