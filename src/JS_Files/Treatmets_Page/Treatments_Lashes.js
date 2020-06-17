import React from "react";

import Topic from '../_Main_Components/Side_Topic';
import TreatmentRow from './Treatments_ContentRow';
import Dropdown from './Treatments_Dropdown';
import Gallery from './Treatments_Gallery';
import MainDesc from './Treatments_MainDescription';


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
        const lashDropHead_1 = "Pielengnacja";
        const lashDropCont_1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
        const lashDropHead_2 = "Przeciwwskazania";
        const lashDropCont_2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

    //Lash Filler
        const fillerPic_1 = LashPic;
        const fillerPic_2 = LashPic;
        const fillerPic_3 = LashPic;
        const filler_hed = "Lash Filler - laminacja rzęs"
        const filler_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
        const fillerDropHead_1 = "Pielengnacja";
        const fillerDropCont_1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
        const fillerDropHead_2 = "Przeciwwskazania";
        const fillerDropCont_2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

    //Our products
        const productPic = <div className="tp_galleryContent"><img src={LashPic} alt="PinkRoom - Wrocław" /></div>;
        const product_hed = "Nasze produkty"
        const product_des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

    return (
        <article className="ContentStyle">
            <div className="ContentBox ContentMaxWidth">
                <Topic topic="Stylizacja rzęs" />
            </div>
                <TreatmentRow 
                    gallery={<Gallery pic_1={lashPic_1} pic_2={lashPic_2} pic_3={lashPic_3} />}
                    content={<MainDesc header={lash_head} description={lash_des} />}
                    drop_1={<Dropdown dropHeader={lashDropHead_1} dropContent={lashDropCont_1} />}
                    drop_2={<Dropdown dropHeader={lashDropHead_2} dropContent={lashDropCont_2} />}
                />
                <TreatmentRow 
                    gallery={<Gallery pic_1={fillerPic_1} pic_2={fillerPic_2} pic_3={fillerPic_3} />}
                    content={<MainDesc header={filler_hed} description={filler_des} />}
                    drop_1={<Dropdown dropHeader={fillerDropHead_1} dropContent={fillerDropCont_1} />}
                    drop_2={<Dropdown dropHeader={fillerDropHead_2} dropContent={fillerDropCont_2} />}
                />
                <TreatmentRow 
                    gallery={productPic}
                    content={<MainDesc header={product_hed} description={product_des} />}
                />
        </article>
    );
}

export default LashContent;
