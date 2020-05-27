import React from 'react';


const TreatRow = (props)  => {
    return (
        <div className="tp_rowBox">
            <div className="tp_contentBox">
                <img src={props.picture} alt="Pink Room Wrocław" />
                <div className="tp_styleBox"></div>
            </div>
            <div className="tp_contentBox">
                <div className="HeaderStyle">
                    {props.header}
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default TreatRow;