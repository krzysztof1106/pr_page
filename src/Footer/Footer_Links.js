import React from 'react';

const Footer = (props) => {

    return (
        <a href={props.link} target="_blank"  title={props.title}>
            <div className="footerSocialMediaIcon"><i className={props.ikon}></i></div>
        </a>
    );
}

export default Footer;
