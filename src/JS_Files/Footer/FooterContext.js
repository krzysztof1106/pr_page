import React from 'react';

const FooterCtx = (props) => {

    return (

        <a href={props.foterLink} target="_blank" title={props.FoterTitle} rel="noopener noreferrer">
            <div className="footerSocialMediaIcon"><i className={props.FoterIkon} /></div>
        </a>

    );
}

export default FooterCtx;