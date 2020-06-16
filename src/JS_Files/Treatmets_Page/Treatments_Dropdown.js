import React from 'react';

import DropHead from './Treatments_DropdownHeader';
import DropCont from './Treatments_DropdownContent';

// const TreatDrop = (props)  => {

class TreatDrop extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dropStatus_1: false,
            dropStatus_2: false,
        };
    };
    
    OpenContent_1 = () => {
        this.setState((prevState) => {
            if (this.state.dropStatus_2){
                return {
                    dropStatus_1: !prevState.dropStatus_1,
                    dropStatus_2: !prevState.dropStatus_2,
                };
            }
            else{
                return {
                    dropStatus_1: !prevState.dropStatus_1,
                };
            }
        });
    };

    OpenContent_2 = () => {
        this.setState((prevState) => {
            if (this.state.dropStatus_1){
                return {
                    dropStatus_1: !prevState.dropStatus_1,
                    dropStatus_2: !prevState.dropStatus_2,
                };
            }
            else{
                return {
                    dropStatus_2: !prevState.dropStatus_2,
                };
            }
        });
    };
    

    render() {
        return (
            <div className="tp_dropdownMainBox">
                <div className="HeaderStyle tp_dropdownHeader">
                    <DropHead dropHeader="Pielengnacja" clickStatus={this.OpenContent_1}/>
                    <DropHead dropHeader="Przeciwwskazania" clickStatus={this.OpenContent_2}/>
                </div>
                <div className="tp_dropdownContent">
                    <DropCont dropContent="Pielengnacja" dropdownStatus={this.state.dropStatus_1}/>
                    <DropCont dropContent="Przeciwwskazania" dropdownStatus={this.state.dropStatus_2}/>
                </div>
        </div>
        );
    };
};
export default TreatDrop;

