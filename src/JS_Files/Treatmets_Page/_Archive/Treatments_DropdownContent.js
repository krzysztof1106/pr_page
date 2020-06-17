import React from 'react';


const TreatDropCont = (props)  => {

    let dropContentStatus = "tp_dropdownContent-Deactive";

    if(props.dropdownStatus){
        dropContentStatus = "tp_dropdownContent-Active";
    }

    return (
        <div className={dropContentStatus} >
            {props.dropContent}
        </div>
    );
}

export default TreatDropCont;
