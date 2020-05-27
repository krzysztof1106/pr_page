import React from 'react';
import TreatContextRow from './Treatments_ContentRow';

//Picture import
import Topic from '../_Main_Components/Side_Topic';
import LashPic from './img/TestPic.jpg';

//Content
const pic_1 = LashPic;
const hed_1 = "Nagłówek 1"
const des_1 = "TEKST 1";

const pic_2 = LashPic;
const hed_2 = "Nagłówek 2"
const des_2 = "TEKST 2";

const pic_3 = LashPic;
const hed_3 = "Nagłówek 3"
const des_3 = "TEKST 3";



const LashContent = (props)  => {
    return (
        <div>
            <div className="ContentBox ContentMaxWidth">
                <Topic topic="Stylizacja rzęs" />
            </div>
            <TreatContextRow picture={pic_1} header={hed_1} description={des_1}/>
            <TreatContextRow picture={pic_2} header={hed_2} description={des_2}/>
            <TreatContextRow picture={pic_3} header={hed_3} description={des_3}/>
            <TreatContextRow picture={pic_3} header={hed_3} description={des_3}/>
        </div>
    );
}

export default LashContent;
