import React from 'react';


//Imports
import LinkGo from "./LinkItem_Go";
import LinkStay from "./LinkItem_Stay";

//Content


    //Lashes
    const lashName = "Stylizacja rzęs";
    const lashLink = "/stylizacja-rzes";

    //Eyebrows
    const browName = "Stylizacja brwi";
    const browLink = "/stylizacja-brwi";

    //Nails
    const nailName = "Stylizacja paznokci";
    const nailLink = "/stylizacja-paznokci";

    //Hairs
    const hairName = "Zabiegi na włosy";
    const hairLink = "/zabiegi-na-wlosy";


const NavSubLinks = (props) => {
    //Return
        const returnName = <i style={{fontSize: "3em", display: props.treatArrowStatus}} className="fas fa-long-arrow-alt-left"></i>;

    return(
        <div className="nav_subbarSubBox">
            <LinkGo linkHeader={lashName} linkLink={lashLink} linkClick={props.subLinkClick} />
            <LinkGo linkHeader={browName} linkLink={browLink} linkClick={props.subLinkClick} />
            <LinkGo linkHeader={nailName} linkLink={nailLink} linkClick={props.subLinkClick} />
            <LinkGo linkHeader={hairName} linkLink={hairLink} linkClick={props.subLinkClick} />
            <LinkStay linkHeader={returnName} linkClick={props.treatBackArrowClick} />
        </div>
    );
};
export default NavSubLinks;