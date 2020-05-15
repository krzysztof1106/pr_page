import React from 'react';
import {Link} from 'react-router-dom';


//Importowane zdjecia
import lashesPic from './img/stylizacjaRzes.jpg';
import eyebrowPic from './img/stylizacjaBrwi.jpg';
import nailsPic from './img/stylizacjaPaznokci.jpg';
import chairPic from './img/styliacjaWlosow.jpg';

class HomeMobTreat extends React.Component {

    //Opisy
        lashesDes = "Stylizacja rzęs";
        eyebrowDes = "Stylizacja brwi";
        nailsDes = "Stylizacja paznokci";
        hairDes = "Stylizacja wlosów";
    
    //Linki do podstron
        lashesLink = "/zabiegi";
        eyebrowLink = "/zabiegi";
        nailsLink = "/zabiegi";
        hairLink = "/zabiegi";
        
        
    state ={
        image: [
            lashesPic, eyebrowPic, nailsPic, chairPic
        ],

        description: [
            this.lashesDes, this.eyebrowDes, this.nailsDes, this.hairDes,
        ],

        link:[
            this.lashesLink, this.eyebrowLink, this.nailsLink, this.hairLink,
        ],


        idx: 0,
    };

    nextContent = () => {
        var x = this.state.description.length;

        if (this.state.idx > x - 2){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.idx = -1
        };

        this.setState({
            idx: this.state.idx + 1
        });
    };

    prevContent = () => {
        var x = this.state.description.length;

        if (this.state.idx < 1){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.idx = x;
        };

        this.setState({
            idx: this.state.idx - 1
        });
    };

    render(){
        return (

            <div className="homeTreatMobileBox">
                    <div className="homeTreatMobileRow">
                        <div className="homeTreatMobileContentBox">
                            <div className="homeTreatMobileStyling"></div>
                            <div className="homeTreatMobileBtnBox">
                                <div className="homeTreatMobileBtn" onClick={this.prevContent}>
                                    <i className="fas fa-arrow-circle-left"></i>
                                </div>
                            </div>

                            <div className="homeTreatMobilePic">
                                <img src={this.state.image[this.state.idx]} alt="PinkRoom - Wrocław" />
                            </div>

                            <div className="homeTreatMobileBtnBox">
                                <div className="homeTreatMobileBtn" onClick={this.nextContent}>
                                    <i className="fas fa-arrow-circle-right"></i>
                                </div>
                            </div>
                        </div>
                        <Link to = {this.state.link[this.state.idx]}>
                            <div className="homeTreatMobileDes"> {this.state.description[this.state.idx]} </div>

                            <div className="homeTreatMobileMore">Zobacz więcej...</div>
                        </Link>
                    </div>
            </div>
        );
    }
}

export default HomeMobTreat;