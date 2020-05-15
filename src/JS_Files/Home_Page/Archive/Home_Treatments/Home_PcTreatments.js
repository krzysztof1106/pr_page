import React from 'react';
import {Link} from 'react-router-dom';


//All imports
import lashesPic from './img/stylizacjaRzes.jpg';
import eyebrowPic from './img/stylizacjaBrwi.jpg';
import nailsPic from './img/stylizacjaPaznokci.jpg';
import chairPic from './img/styliacjaWlosow.jpg';


const HomePcTreat = () => {
    
    return (
            <div className="MainContent homeTreat">

                <div className="MainBorder"></div>

                <div className="MainTopic">Oferowane zabiegi</div>

                <div className="homeTreatPcBox">
                    
                    <div className="homeTreatPcRowStyle">
                        <div className="homeTreatPcRow">
                            <div className="homeTreatPcPic">
                                <div className="homeTreatPcStyle_1"></div>
                                <img src={lashesPic} alt="PinkRoom - Wrocław" />
                            </div>
                            <div className="homeTreatPcContentBox">
                                <div className="MainHeader homeTreatPcOddStyle">Stylizacja rzęs</div>
                                <div className="MainDescription homeTreatPcDescription">
                                    Przedłużanie rzęs ma ułatwiać życie i podkreślać głębię oczu. Stylizacja rzęs ma na celu powiększyć oko, wydłużyć jego kąciki. Dzięki takiemu zabiegowi możemy zaoszczędzić czas na makijaż i codzienną pielęgnację rzęs.
                                </div>
                                <div className="homeTreatPcOddStyle">
                                    <Link to="/zabiegi">
                                        <div className="MainDescription homeTreatGoForMore">
                                            Zobacz więcej...
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="homeTreatPcRowStyle">
                        <div className="homeTreatPcRow">
                            <div className="homeTreatPcContentBox">
                                <div className="MainHeader homeTreatPcEvenStyle">Stylizacja brwi</div>
                                <div className="MainDescription homeTreatPcDescription">
                                    Przedłużanie rzęs ma ułatwiać życie i podkreślać głębię oczu. Stylizacja rzęs ma na celu powiększyć oko, wydłużyć jego kąciki. Dzięki takiemu zabiegowi możemy zaoszczędzić czas na makijaż i codzienną pielęgnację rzęs.
                                </div>
                                <div className="homeTreatPcEvenStyle">
                                    <Link to="/zabiegi">
                                        <div className="MainDescription homeTreatGoForMore">
                                            Zobacz więcej...
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="homeTreatPcPic">
                                <div className="homeTreatPcStyle_2"></div>
                                <img src={eyebrowPic} alt="PinkRoom - Wrocław" />
                            </div>
                        </div>
                    </div>

                    <div className="homeTreatPcRowStyle">
                        <div className="homeTreatPcRow">
                            <div className="homeTreatPcPic">
                                    <div className="homeTreatPcStyle_3"></div>
                                    <img src={nailsPic} alt="PinkRoom - Wrocław" />
                                </div>
                            <div className="homeTreatPcContentBox">
                                <div className="MainHeader homeTreatPcOddStyle">Stylizacja paznokci</div>
                                <div className="MainDescription homeTreatPcDescription">
                                    Przedłużanie rzęs ma ułatwiać życie i podkreślać głębię oczu. Stylizacja rzęs ma na celu powiększyć oko, wydłużyć jego kąciki. Dzięki takiemu zabiegowi możemy zaoszczędzić czas na makijaż i codzienną pielęgnację rzęs.
                                </div>
                                <div className="homeTreatPcOddStyle">
                                    <Link to="/zabiegi">
                                        <div className="MainDescription homeTreatGoForMore">
                                            Zobacz więcej...
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="homeTreatPcRowStyle">
                        <div className="homeTreatPcRow">
                            <div className="homeTreatPcContentBox">
                                <div className="MainHeader homeTreatPcEvenStyle">Stylizacja włosów</div>
                                <div className="MainDescription homeTreatPcDescription">
                                    Przedłużanie rzęs ma ułatwiać życie i podkreślać głębię oczu. Stylizacja rzęs ma na celu powiększyć oko, wydłużyć jego kąciki. Dzięki takiemu zabiegowi możemy zaoszczędzić czas na makijaż i codzienną pielęgnację rzęs.
                                </div>
                                <div className="homeTreatPcEvenStyle">
                                    <Link to="/zabiegi">
                                        <div className="MainDescription homeTreatGoForMore">
                                            Zobacz więcej...
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="homeTreatPcPic">
                                    <div className="homeTreatPcStyle_4"></div>
                                    <img src={chairPic} alt="PinkRoom - Wrocław" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    );
}

export default HomePcTreat;
