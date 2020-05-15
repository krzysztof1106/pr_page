import React from 'react';

//Imports
import Links from "./NavbarLinks";

const NavLinksBox = (props) => {

    let currentDisplayHeight = window.innerHeight;
    let sidebarHeight = currentDisplayHeight - 162;;

    let navbarClassName = "nav_linkMobileBox nav_linksDeactive";

    if (props.sidebarStatus){
        navbarClassName = "nav_linkMobileBox nav_linksActive";
    };
    return(
        <div>
            <div className="nav_linkPCBox">
                <Links />
            </div>
            <div className={navbarClassName} style={{ height: sidebarHeight}}>
                <Links />
            </div>           
        </div>
    );
};

export default NavLinksBox;

//</div> style={{ height: sidebarHeight}}>