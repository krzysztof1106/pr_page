import React from "react";

import Topic from '../_Main_Components/Side_Topic';
import TreatmentRow from './Treatments_ContentRow';
import Gallery from './Treatments_Gallery';


//Picture import
import LashPic from './img/TestPic.jpg';


const LashContent = ()  => {

    //Content
    //Lashes
        const lashPic_1 = LashPic;
        const lashPic_2 = LashPic;
        const lashPic_3 = LashPic;
        const lash_head = "Przedłużanie rzęs"
        const lash_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

    //Lash Filler
        const fillerPic_1 = LashPic;
        const fillerPic_2 = LashPic;
        const fillerPic_3 = LashPic;
        const filler_hed = "Lash Filler - laminacja rzęs"
        const filler_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

    //Our products
        const productPic = LashPic;
        const product_hed = "Nasze produkty"
        const product_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

    return (
        <article className="ContentStyle">
            <div className="ContentBox ContentMaxWidth">
                <Topic topic="Stylizacja rzęs" />
            </div>
            <TreatmentRow gallery={<Gallery pic1={lashPic_1} pic2={lashPic_2} pic3={lashPic_3} />} header={lash_head} description={lash_des}/>
            
            <TreatmentRow gallery={<Gallery pic1={fillerPic_1} pic2={fillerPic_2} pic3={fillerPic_3} />} header={filler_hed} description={filler_des}/>

            <TreatmentRow gallery={<img src={productPic} alt="PinkRoom - Wrocław" />} header={product_hed} description={product_des}/>
        </article>
    );
}

export default LashContent;