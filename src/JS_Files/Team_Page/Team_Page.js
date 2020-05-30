import React from 'react';


//Imports
import Topic from "../_Main_Components/Side_Topic";
import TeamRow from "./Team_ContentRow";
import Member_1 from './img/TestPic.jpg';

//Content
const pic_1 = Member_1;
const mem_1 = "Lena Pelczar";
const skills_1 = "Stylizacja rzęs | Stylizacja brwi";
const des_1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

const pic_2 = Member_1;
const mem_2 = "Lena Pelczar 2";
const skills_2 = "Stylizacja paznokci";
const des_2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

const pic_3 = Member_1;
const mem_3 = "Lena Pelczar 3";
const skills_3 = "Zabiegi na włosy";
const des_3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";


const TeamContent = ()  => {
    return (
        <article className="ContentStyle">
            <div className="ContentBox ContentMaxWidth">
                <Topic topic = "Nasz zespół" />
            </div>
            <TeamRow picture={pic_1} member={mem_1} skills={skills_1} description={des_1}/>
            <TeamRow picture={pic_2} member={mem_2} skills={skills_2} description={des_2}/>
            <TeamRow picture={pic_3} member={mem_3} skills={skills_3} description={des_3}/>
        </article>
    );
}

export default TeamContent;