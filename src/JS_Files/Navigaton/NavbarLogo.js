import React from 'react';
import {Link} from 'react-router-dom';


const NavLogo = (props) => {

    let linkStatus;

    if(props.mainLinksStatus){
        linkStatus = props.navLogoClick;
    }
    else if(props.subLinksStatus > 0){
        linkStatus = props.navLogoClick;
    }

    return (
        <Link to=''>
            <div className="nav_logoBox" onClick={linkStatus}>
                Pink
            </div>
        </Link>
    );
}

export default NavLogo;