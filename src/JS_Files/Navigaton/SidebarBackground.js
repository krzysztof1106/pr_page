import React from 'react';

    
const SidebarBgr = (props) => {

    let bacgroundClass = "nav_sidebarBackground nav_sidebarBackground-Deactive";

    if(props.sideBgrStatus){
        bacgroundClass = "nav_sidebarBackground nav_sidebarBackground-Active";
    }

    return (
            <div className={bacgroundClass}></div>
    );
}

export default SidebarBgr;