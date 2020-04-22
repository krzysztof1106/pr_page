import React from 'react';


const ContactLink = (props) => {

    return (

        <a href={props.link} target="_blank" rel="noopener noreferrer" title={props.title}>
            <div>{props.name}</div>
        </a>

    );
}

export default ContactLink;
