import React from 'react';

    
const SidebarBgd = (props) => {

    let sidebarBacgroundClassName = "nav_sidebarBackground nav_sidebarBackground-Deactive";

    if(props.sidebarBgdStatus){
        sidebarBacgroundClassName = "nav_sidebarBackground nav_sidebarBackground-Active";
    }

    return (
            <div className={sidebarBacgroundClassName}></div>
    );
}

export default SidebarBgd;