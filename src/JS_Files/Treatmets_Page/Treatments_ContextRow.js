import React from 'react';


const TreatContext = (props)  => {
    return (
        <div className="tp_rowBox">
            <div className="tp_picBox"><img src={props.picture} alt="Pink Room Wrocław" /></div>
            <div className="tp_descriptionBox">{props.description}</div>
        </div>
    );
}

export default TreatContext;