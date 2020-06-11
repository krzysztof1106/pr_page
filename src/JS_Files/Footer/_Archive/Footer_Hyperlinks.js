import React from 'react';
import {Link} from 'react-router-dom';


const FooterHyperlink = ()  => {
    return (
        <div className="footer_linkRow">
            <div className="footer_linkBox">
                <Link to = "/cennik">
                    CENNIK
                </Link>
            </div>
            <div className="footer_linkBox">
                <a href="https://www.facebook.com/l.lashesstudio/?ref=bookmarks" target="_blank" title="Umów wizytę online" rel="noopener noreferrer">
                    <div>UMÓW WIZYTE</div>
                </a>
            </div>
        </div>
    );
}
export default FooterHyperlink;