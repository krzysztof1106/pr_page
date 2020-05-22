import React from 'react';


const ContactCtx = (props) => {

    return (
        <div className="CP_contentRow">
            <div className="HeaderStyle CP_headerBox">{props.header}</div>
                <a href={props.link} target="_blank" rel="noopener noreferrer" title={props.title}>
                    <div>
                        {props.description}
                    </div>
                </a>
        </div>
    );
} 

export default ContactCtx;