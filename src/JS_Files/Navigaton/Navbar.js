import React from 'react';


//Import
import NavLogo from './NavbarLogo';
import ToggleBtn from './ToggleButton';
import NavLinks from './NavbarLinks';
import SubLinks from './NavbarSubLinks';
import SidebarBgr from './SidebarBackground';


class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        //Main navigation links
            mainLinksStatus: false,
            sideBgrStatus: false,

        //Sub navigation links
            subbarOpen: false,
            treatDivHeight: 0,
            treatArrowStatus: "block",
        };
    };


    OpenSideBar = () => {

        let displyWidtht = window.innerWidth;

        if(displyWidtht <= 1180){
            if(!this.state.subbarOpen){
                this.setState((prevState) => {
                    return {
                        sideBgrStatus: !prevState.sideBgrStatus,
                        mainLinksStatus: !prevState.mainLinksStatus,
                    };
                });
                this.setState({
                    treatDivHeight: 0,
                    subbarOpen: false,
                })
            }
            else{
                this.setState((prevState) => {
                    return {
                        sideBgrStatus: !prevState.sideBgrStatus,
                    };
                });
                this.setState({
                    treatDivHeight: 0,
                    subbarOpen: false,
                })

            }
        }

        else{
            this.setState({
                treatDivHeight: 0,
                subbarOpen: false,
            })
        }
    };

    OpenSubBar = () => {

        let displyWidtht = window.innerWidth;

        if(displyWidtht > 1180){
            this.setState({
                treatArrowStatus: "none",
            })

            if(this.state.treatDivHeight === 0){
                this.setState({
                    treatDivHeight: this.refs.inner.clientHeight
                })
            }
            else{
                this.setState({
                    treatDivHeight: 0
                })
            }
        }

        else{
            this.setState((prevState) => {
                return {
                    subbarOpen: !prevState.subbarOpen,
                    treatArrowStatus: "block",        
                };
            });

            if(!this.state.subbarOpen){
                this.setState((prevState) => {
                    return {
                        mainLinksStatus: !prevState.mainLinksStatus,
                    }
                })

                setTimeout(() => {
                    this.setState(() => {
                        return {
                            treatDivHeight: this.refs.inner.clientHeight
                        }
                    })
                }, 200)

            }
            else{
                this.setState(() => {
                    return {
                        treatDivHeight: 0
                    }
                })

                setTimeout(() => {
                    this.setState((prevState) => {
                        return {
                            mainLinksStatus: !prevState.mainLinksStatus,
                        }
                    })
                }, 200)
            }
        }
    };


    render() {

        return (
            <nav>  
                <div className="nav_mainBox">
                    <div className="nav_mainBarBox">
                        <NavLogo mainLinksStatus={this.state.sideBgrStatus} subLinksStatus={this.state.treatDivHeight} navLogoClick={this.OpenSideBar}/>

                        <div className="nav_spacerBox"></div>

                        <ToggleBtn buttonStatus={this.state.sideBgrStatus} buttonClick={this.OpenSideBar} />

                        <NavLinks sidebarStatus={this.state.mainLinksStatus} subLinks={this.OpenSubBar} mainLinks={this.OpenSideBar} />
                    </div>

                    <div className="nav_subbarMainBox" style={{height: this.state.treatDivHeight + 'px'}}>
                        <div ref="inner">
                            <SubLinks subLinkClick={this.OpenSideBar} treatBackArrowClick={this.OpenSubBar} treatArrowStatus={this.state.treatArrowStatus} />
                        </div>
                    </div>

                    <SidebarBgr sideBgrStatus = {this.state.mainLinksStatus}/>

                </div>
            </nav>
        );
    };
};
export default Navbar;