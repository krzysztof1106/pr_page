import React from 'react';


const ToggleBtn = (props) => {

    let buttonClass = "burgerToggle";

    if (props.buttonStatus){
        buttonClass = "burgerToggle toggle"
    }

    return(
        <div className={buttonClass} onClick={props.buttonClick}>
            <div className="burgerLine_1 burgerToggleBar burgerToggleBar_2"></div>
            <div className="burgerLine_2 burgerToggleBar burgerToggleBar_2"></div>
            <div className="burgerLine_3 burgerToggleBar burgerToggleBar_2"></div>
        </div>
    );

};

export default ToggleBtn;