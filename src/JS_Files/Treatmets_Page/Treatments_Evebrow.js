import React from "react";

import Topic from '../_Main_Components/Side_Topic';
import TreatmentRow from './Treatments_ContentRow';
import Gallery from './Treatments_Gallery';


//Picture import
import LashPic from './img/TestPic.jpg';


const LashContent = ()  => {

    //Content
    //Pernament eyebrow
        const perPic_1 = LashPic;
        const perPic_2 = LashPic;
        const perPic_3 = LashPic;
        const per_head = "Makijaż permanentny brwi"
        const per_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

        //Eyebrow Arch
        const archPic_1 = LashPic;
        const archPic_2 = LashPic;
        const archPic_3 = LashPic;
        const arch_head = "Architektura brwi"
        const arch_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

        //Brow Filler
        const fillerPic_1 = LashPic;
        const fillerPic_2 = LashPic;
        const fillerPic_3 = LashPic;
        const filler_head = "Brow Filler - laminacja brwi"
        const filler_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
        
        //Our Products
        const productPic = LashPic;
        const product_head = "Nasze produkty"
        const product_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

    return (
        <article className="ContentStyle">
            <div className="ContentBox ContentMaxWidth">
                <Topic topic="Stylizacja brwi" />
            </div>
            <TreatmentRow gallery={<Gallery pic1={perPic_1} pic2={perPic_2} pic3={perPic_3} />} header={per_head} description={per_des}/>

            <TreatmentRow gallery={<Gallery pic1={archPic_1} pic2={archPic_2} pic3={archPic_3} />} header={arch_head} description={arch_des}/>

            <TreatmentRow gallery={<Gallery pic1={fillerPic_1} pic2={fillerPic_2} pic3={fillerPic_3} />} header={filler_head} description={filler_des}/>
            
            <TreatmentRow gallery={<img src={productPic} alt="PinkRoom - Wrocław" />} header={product_head} description={product_des}/>
        </article>
    );
}

export default LashContent;