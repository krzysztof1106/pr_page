import React from 'react';

//All imports
import FP_PCTreat from "./FP_Pc_Treatments";
import FB_MobTreat from "./FP_Mobile_Treatments";


const FP_Treatments_Context = () => {

    return (
        <article>
            <FP_PCTreat />
            <FB_MobTreat />
        </article>
    );
}

export default FP_Treatments_Context;
