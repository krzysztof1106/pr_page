import React from 'react';


const MiddleTopic = (props) => {

    return (
        <div>
            {/* <div className="nav_mainBarBox"></div> */}
            <div className="TopicStyle TopicSideBox">
                <div className="TopicSideText">{props.topic}</div>
                <div className="TopicSideBeam"></div>
            </div>
        </div>
    );
}

export default MiddleTopic;
