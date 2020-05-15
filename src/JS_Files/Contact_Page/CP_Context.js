import React from 'react';


const ContactCtx = (props) => {

    return (
            <div className="CP_contentRow">
                <div className="CP_headerBox HeaderBox">{props.header}</div>
                <div className="DescriptionBox">
                    <a href={props.link} target="_blank" rel="noopener noreferrer" title={props.title}>
                        {props.description}
                    </a>
                </div>
            </div>
    );
}

export default ContactCtx;