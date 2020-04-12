import React from 'react';
import {Link} from 'react-router-dom';


const NavLogo = (props) => {


    let navLogoSA;

    if(props.navLogoSS){
        navLogoSA = props.navLogoClick;
    }

    return (
        <Link to=''>
            <div className="nav_logoBox" onClick={navLogoSA}>
                        Piooo
            </div>
        </Link>
    );
}

export default NavLogo;