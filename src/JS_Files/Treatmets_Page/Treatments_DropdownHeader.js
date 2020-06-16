import React from 'react';


const TreatDropHeader = (props)  => {
    return (
        <p onClick={props.clickStatus}>
            {props.dropHeader}
        </p>
    );
}

export default TreatDropHeader;