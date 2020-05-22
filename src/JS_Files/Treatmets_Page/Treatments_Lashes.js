import React from 'react';
import TreatContextRow from './Treatments_ContextRow';

//Picture import
import Topic from '../_Main_Components/Side_Topic';
import LashPic from './img/TestPic.jpg';

//Content
const pic_1 = LashPic;
const des_1 = "hahahahah ahaalalalal allalaj sjsjsjsj sjs jsndndn dnndnd nd ajajajajaj sjsjsjsj dmddmd ajajaj";

const pic_2 = LashPic;
const des_2 = "hahahahah ahaalalalal allalaj sjsjsjsj sjs jsndndn dnndnd nd ajajajajaj sjsjsjsj dmddmd ajajaj";

const pic_3 = LashPic;
const des_3 = "hahahahah ahaalalalal allalaj sjsjsjsj sjs jsndndn dnndnd nd ajajajajaj sjsjsjsj dmddmd ajajaj";



const PricelistContent = (props)  => {
    return (
        <div className="MainBox">
            <Topic topic="Stylizacja rzęs" />
            <TreatContextRow picture={pic_1} description={des_1}/>
            <TreatContextRow picture={pic_2} description={des_2}/>
            <TreatContextRow picture={pic_3} description={des_3}/>

        </div>
    );
}

export default PricelistContent;
