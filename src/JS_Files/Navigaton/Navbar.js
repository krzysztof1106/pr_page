import React from 'react';


//Import
import NavLinks from "./NavbarLinks";
import ToggleBtn from "./ToggleButton";
import NavLogo from './NavbarLogo';
import SidebarBgd from "./SidebarBackground";


class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            sidebarOpen: false,
        };
    };


    OpenSideBar = () => {

        let nav_currentDisplyWidtht = window.innerWidth;

        if(nav_currentDisplyWidtht <= 1180){
            this.setState((prevState) => {
                return {sidebarOpen: !prevState.sidebarOpen};
            });
        }
    };
    


render() {

    return (
        <nav>  
            <div className="nav_mainBox">
                <div className="nav_mainBarBox">
                    <NavLogo navLogoSS={this.state.sidebarOpen} navLogoClick={this.OpenSideBar}/>
                    <div className="nav_spacerBox"></div>
                    <NavLinks sidebarStatus={this.state.sidebarOpen} navLinksClick={this.OpenSideBar}/>
                    <ToggleBtn buttonStatus={this.state.sidebarOpen} click={this.OpenSideBar} />
                </div>
                <SidebarBgd sidebarBgdStatus={this.state.sidebarOpen}/>
            </div>
        </nav>
    );
};

};
export default Navbar;