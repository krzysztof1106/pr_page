import React from 'react';


const ContactCtx = (props) => {

    return (
            <div className="CP_contentRow">
                <div className="CP_headerBox HeaderBox">{props.cpHeader}</div>
                <div className="DescriptionBox">{props.cpDescription}</div>
            </div>
    );
}

export default ContactCtx;
