import React from 'react';

import DropHead from './Treatments_DropdownHeader';
// import DropCont from './Treatments_DropdownContent';


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
                    dropStatus_2: !prevState.dropStatus_2,
                    dropStatus_1: !prevState.dropStatus_1,
                };
            }
            else{
                return {
                    dropStatus_1: !prevState.dropStatus_1,
                };
            }
        });
        this.setState({
            height: this.refs.inner.clientHeight
        });
        console.log(this.refs.inner.clientHeight)
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

        const {dropStatus_1, height} = this.state;

        const currentheight = dropStatus_1 ? height: 0;

        return (
            <div className="tp_dropdownMainBox">
                <div className="HeaderStyle tp_dropdownHeader">
                    <DropHead dropHeader="Pielengnacja" clickStatus={this.OpenContent_1}/>
                </div>
                <div className="tp_dropdownContent" style={{height: currentheight + 'px'}}>
                    <div ref="inner">
                        Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja Pielengnacja
                    </div>
                </div>
        </div>
        );
    };
};
export default TreatDrop;