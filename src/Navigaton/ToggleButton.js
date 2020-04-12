import React from 'react';


const ToggleBtn = (props) => {

    let buttonClassList = "burgerToggle";

    if (props.buttonStatus){
        buttonClassList = "burgerToggle toggle"
    }

    return(
        <div className={buttonClassList} onClick={props.click}>
            <div className="burgerLine_1 burgerToggleBar burgerToggleBar_2"></div>
            <div className="burgerLine_2 burgerToggleBar burgerToggleBar_2"></div>
            <div className="burgerLine_3 burgerToggleBar burgerToggleBar_2"></div>
        </div>
    );

};

export default ToggleBtn;