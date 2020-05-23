import React from 'react';


const TreatContext = (props)  => {
    return (
        <div className="tp_rowBgd">
            <div className="ContentMaxWidth tp_rowBox">
                <div className="tp_contentBox"><img src={props.picture} alt="Pink Room Wrocław" /></div>
                <div className="tp_contentBox">{props.description}</div>
            </div>
        </div>
    );
}

export default TreatContext;