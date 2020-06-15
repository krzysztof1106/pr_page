import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



/* ---------- App imports ---------- */
import Navbar from './JS_Files/Navigaton/Navbar';
import Footer from './JS_Files/Footer/Footer';
import Home from './JS_Files/Home_Page/Home_Page';
import Pricelist from './JS_Files/Pricelist_Page/Pricelist_Page';
import Appointment from './JS_Files/Appointment/Appointment_Page';
import Team from './JS_Files/Team_Page/Team_Page';
import Contact from './JS_Files/Contact_Page/Contact_Page';

//Treatments
import Treatments from './JS_Files/Treatmets_Page/Treatments_Lashes';
import LashPage from './JS_Files/Treatmets_Page/Treatments_Lashes';
import EyebrowPage from './JS_Files/Treatmets_Page/Treatments_Evebrow';



const App = ()  => {
  return (
    <Router>
        <Navbar />
        {/* <div className="nav_mainBarBox"></div> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          {/* Treatments */}
            <Route path="/zabiegi" component={Treatments}/>
            <Route path="/stylizacja-rzes" component={LashPage}/>
            <Route path="/stylizacja-brwi" component={EyebrowPage}/>
          <Route path="/cennik" component={Pricelist}/>
          <Route path="/umow_wizyte" component={Appointment}/>
          <Route path="/nasz-zespol" component={Team}/>
          <Route path="/kontakt" component={Contact}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
