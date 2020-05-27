import React from 'react';


const ContactRow = (props) => {

    return (
        <div className="cp_contentRow">
            <div className="HeaderStyle cp_headerBox">{props.header}</div>
                <a href={props.link} target="_blank" rel="noopener noreferrer" title={props.title}>
                    <div>
                        {props.description}
                    </div>
                </a>
        </div>
    );
} 

export default ContactRow;