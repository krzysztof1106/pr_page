import React from 'react';


const ContactCtx = (props) => {

    return (
            <div className="CP_contentRow">
                <div className="CP_headerBox HeaderBox">{props.header}</div>
                <div className="DescriptionBox">{props.description}</div>
            </div>
    );
}

export default ContactCtx;
