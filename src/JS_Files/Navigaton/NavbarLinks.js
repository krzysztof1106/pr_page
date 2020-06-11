import React from 'react';


//Imports
import LinksSkt from "./LinkSkt";

//Name
    const mainMenu = "Strona główna";
    const treatments = "Zabiegi";
    const pricelist = "Cennik";
    const appointment = "Umów wizytę";
    const team = "Nasz zespół";
    const contact = "Kontakt";

//Links
    const mainMenuLink = "";
    const treatmentsLink = "/zabiegi";
    const pricelistLink = "/cennik";
    const appointmentLink = "/umow_wizyte";
    const teamLink = "/nasz-zespol";
    const contactLink = "/kontakt";


const NavLinks = (props) => {

    /*
    let currentDisplayHeight = window.innerHeight;   
    let sidebarHeight = currentDisplayHeight - 162;;
    style={{ height: sidebarHeight}}
    */

    let navbarClassName = "nav_mainLinksBox nav_linksDeactive";
    
    if (props.sidebarStatus){
        navbarClassName = "nav_mainLinksBox nav_linksActive";
    };


    return(
        <div className={navbarClassName}>
            <LinksSkt header={mainMenu} link={mainMenuLink} navHeaderClick={props.navLinksClick}/>
            <LinksSkt header={treatments} link={treatmentsLink} navHeaderClick={props.navLinksClick}/>
            <LinksSkt header={pricelist} link={pricelistLink} navHeaderClick={props.navLinksClick}/>
            <LinksSkt header={appointment} link={appointmentLink} navHeaderClick={props.navLinksClick}/>
            <LinksSkt header={team} link={teamLink} navHeaderClick={props.navLinksClick}/>
            <LinksSkt header={contact} link={contactLink} navHeaderClick={props.navLinksClick}/>
        </div>
    );
};

export default NavLinks;