import React from "react";

import Topic from '../_Main_Components/Side_Topic';
import TreatmentRow from './Treatments_ContentRow';
import Gallery from './Treatments_Gallery';


//Picture import
import LashPic from './img/TestPic.jpg';


const LashContent = ()  => {

    //Content
        // const pic_1 = LashPic;
        const hed_1 = "Nagłówek 1"
        const des_1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

        // const pic_2 = LashPic;
        const hed_2 = "Nagłówek 2"
        const des_2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

        // const pic_3 = LashPic;
        const hed_3 = "Nagłówek 3"
        const des_3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

    return (
        <article className="ContentStyle">
            <div className="ContentBox ContentMaxWidth">
                <Topic topic="Stylizacja rzęs" />
            </div>
            <TreatmentRow gallery={<Gallery pic1={LashPic} pic2={LashPic} pic3={LashPic} />} header={hed_1} description={des_1}/>
            <TreatmentRow gallery={<Gallery pic1={LashPic} pic2={LashPic} pic3={LashPic} />} header={hed_2} description={des_2}/>
            <TreatmentRow gallery={<Gallery pic1={LashPic} pic2={LashPic} pic3={LashPic} />} header={hed_3} description={des_3}/>
        </article>
    );
}

export default LashContent;