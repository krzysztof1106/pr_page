import React from 'react';
import {Link} from 'react-router-dom';

const TreatLinksBar = ()  => {
    return (
        <div className="HeaderStyle tp_linkContent">
            <div className="tp_linkBox">
                <Link to = "/cennik">
                    CENNIK
                </Link>
            </div>
            <div className="tp_linkBox">
                <a href="https://www.facebook.com/l.lashesstudio/?ref=bookmarks" target="_blank" title="Umów wizytę online" rel="noopener noreferrer">
                    <div>UMÓW WIZYTE ONLINE</div>
                </a>
            </div>
            <div className="tp_linkBox">
                <a href="https://instagram.com/lashes_wroclaw?igshid=1isaxhcdpe5d1" target="_blank" title="Zobacz więcej naszych prac" rel="noopener noreferrer">
                    <div>NASZE PRACE</div>
                </a>
            </div>

        </div>
    );
}

export default TreatLinksBar;
