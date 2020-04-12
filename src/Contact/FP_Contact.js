import React from 'react';


const Contact = () => {

    return (
            <div className="homeContact">
                <div className="homeContactTopStyle"></div>
                <div className="MainContent">
                    <div className="homeContactBox">

                        <div className="homeContactTile">
                            <div className="MainIcon"><i className="fas fa-comments"></i></div>
                            <div className="MainHeader homeContactHeader">
                                    <a href="https://www.facebook.com/l.lashesstudio" target="_blank"  title="Odwiedź mnie na Facebooku">
                                        <div>Facebook</div>
                                    </a>
                                    <div>&nbsp;/&nbsp;</div>
                                    <a href="https://www.instagram.com/l.lashesstudio" target="_blank"  title="Odwiedź mnie na Instagramie">
                                        <div>Instagram</div>
                                    </a>
                            </div>
                            <div className="MainDescription homeContactDes">Umów sie poprzez social media!</div>
                        </div>

                        <div className="homeContactTile">
                            <div className="MainIcon"><i className="fas fa-phone"></i></div>
                            <div className="MainHeader homeContactHeader">
                                    <a href="tel:+48531040929" target="_blank"  title="Zadzwoń i dowiedz się więcej">
                                        <div>+48 531-040-929</div>
                                    </a>
                            </div>
                            <div className="MainDescription homeContactDes">Umów sie telefonicznie!</div>
                        </div>

                        <div className="homeContactTile">
                            <div className="MainIcon"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="MainHeader homeContactHeader">Spiżowa 21A<br />53-442 Wrocław</div>
                            <div className="MainDescription homeContactDes">Zajrzyj do naszego salonu!</div>
                        </div>

                    </div>
                </div>
            </div>
    );
}

export default Contact;
