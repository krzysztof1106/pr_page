import React from 'react';


const TreatDropHeader = (props)  => {
    return (
        <li onClick={props.clickStatus}>
            {props.dropHeader}
        </li>
    );
}

export default TreatDropHeader;