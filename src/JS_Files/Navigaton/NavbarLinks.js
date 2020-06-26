import React from 'react';


//Imports
import LinkGo from "./LinkItem_Go";
import LinkStay from "./LinkItem_Stay";

//Name
    const mainMenu = "Strona główna";
    const mainMenuLink = "";

    const treatments = "Zabiegi";

    const pricelist = "Cennik";
    const pricelistLink = "/cennik";

    const appointment = "Umów wizytę";
    const appointmentLink = "/umow_wizyte";

    const team = "Nasz zespół";
    const teamLink = "/nasz-zespol";

    const contact = "Kontakt";
    const contactLink = "/kontakt";

const NavLinks = (props) => {

    let mainLinksClass = "nav_mainLinksBox nav_linksDeactive";
    
    if (props.sidebarStatus){
        mainLinksClass = "nav_mainLinksBox nav_linksActive";
    };

    return(
        <div className={mainLinksClass}>
            <LinkGo linkHeader={mainMenu} linkLink={mainMenuLink} linkClick={props.mainLinks}/>
            <LinkStay linkHeader={treatments} linkClick={props.subLinks}/>
            <LinkGo linkHeader={pricelist} linkLink={pricelistLink} linkClick={props.mainLinks}/>
            <LinkGo linkHeader={appointment} linkLink={appointmentLink} linkClick={props.mainLinks}/>
            <LinkGo linkHeader={team} linkLink={teamLink} linkClick={props.mainLinks}/>
            <LinkGo linkHeader={contact} linkLink={contactLink} linkClick={props.mainLinks}/>
        </div>
    );
};

export default NavLinks;