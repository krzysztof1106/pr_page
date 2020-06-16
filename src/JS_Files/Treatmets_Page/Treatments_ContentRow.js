import React from 'react';

import Drop from './Treatments_Dropdown';

const TreatRow = (props)  => {
    return (
        <div className="tp_rowBox">
            <div className="tp_contentBox">
                    {props.gallery}
                <div className="tp_styleBox"></div>
            </div>
            <div className="tp_contentBox">
                <div className="HeaderStyle">
                    {props.header}
                </div>
                <div>
                    {props.description}
                </div>
                <div>
                    <Drop />
                </div>
            </div>
        </div>
    );
}

export default TreatRow;