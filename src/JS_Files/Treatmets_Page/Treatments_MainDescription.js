import React from 'react';

const TreatMainDescription = (props)  => {
    return (
        <div>
            <div className="HeaderStyle">
                {props.header}
            </div>
            <div>
                {props.description}
            </div>
        </div>

    );
}

export default TreatMainDescription;