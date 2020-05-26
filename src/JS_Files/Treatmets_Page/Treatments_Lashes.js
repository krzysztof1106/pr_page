import React from 'react';
import TreatContextRow from './Treatments_ContentRow';

//Picture import
import Topic from '../_Main_Components/Side_Topic';
import LashPic from './img/TestPic.jpg';

//Content
const pic_1 = LashPic;
const des_1 = "TEKST 1";

const pic_2 = LashPic;
const des_2 = "TEKST 2";

const pic_3 = LashPic;
const des_3 = "TEKST 3";



const PricelistContent = (props)  => {
    return (
        <div>
            <div className="ContentBox ContentMaxWidth">
                <Topic topic="Stylizacja rzęs" />
            </div>
            <TreatContextRow picture={pic_1} description={des_1}/>
            <TreatContextRow picture={pic_2} description={des_2}/>
            <TreatContextRow picture={pic_3} description={des_3}/>
            <TreatContextRow picture={pic_3} description={des_3}/>
        </div>
    );
}

export default PricelistContent;
