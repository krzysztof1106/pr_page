import React from 'react';


class TreatDrop extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dropStatus: false,
            width: 35,
        };
    };

    SwitchContent = () => {
        this.setState((prevState) => {
            return {
                dropStatus: !prevState.dropStatus,
            };
        });
        this.setState({
            height: this.refs.inner.clientHeight
        });
    };


    render () {

        const {dropHeader, dropContent} = this.props;
        const {dropStatus, height, width, color} = this.state;
        const currentHeight = dropStatus ? height: 0;
        const styleBar = dropStatus ? width: 4;


        return (
            <div className="tp_dropdownMainBox">
                <div className="HeaderStyle tp_dropdownHeader" onClick={this.SwitchContent}>
                    <div onMouseOver={this.StyleBarHover} className="tp_dropdownHeadStyle tp_dropdownHeadStyle-Deactive" style={{width: styleBar + 'px', backgroundColor: color}}></div>
                    <div>
                        {dropHeader}
                    </div>
                </div>
                <div className="tp_dropdownContent" style={{height: currentHeight + 'px'}}>
                    <div ref="inner">
                        {dropContent}
                    </div>
                </div>
        </div>
        );
    }
    
};
export default TreatDrop;