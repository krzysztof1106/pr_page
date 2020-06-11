import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



/* ---------- App imports ---------- */
import Navbar from './JS_Files/Navigaton/Navbar';
import Footer from './JS_Files/Footer/Footer';
import Home from './JS_Files/Home_Page/Home_Page';
import Treatments from './JS_Files/Treatmets_Page/Treatments_Lashes';
import Pricelist from './JS_Files/Pricelist_Page/Pricelist_Page';
import Appointment from './JS_Files/Appointment/Appointment_Page';
import Team from './JS_Files/Team_Page/Team_Page';
import Contact from './JS_Files/Contact_Page/Contact_Page';


const App = ()  => {
  return (
    <Router>
        <Navbar />
        {/* <div className="nav_mainBarBox"></div> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/zabiegi" component={Treatments}/>
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
