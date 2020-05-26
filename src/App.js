import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



/* ---------- App imports ---------- */
import Navbar from './JS_Files/Navigaton/Navbar';
import Footer from './JS_Files/Footer/Footer';
import  Home_Page from './JS_Files/Home_Page/Home_Page';
import  Treatments_Page from './JS_Files/Treatmets_Page/Treatments_Page';
import  Pricelist_Page from './JS_Files/Pricelist_Page/Pricelist_Page';
import  Team_Page from './JS_Files/Team_Page/Team_Page';
import Contact_Page from './JS_Files/Contact_Page/Contact_Page';


const App = ()  => {
  return (
    <Router>
        <Navbar />
        <div className="nav_mainBarBox"></div>
        <Switch>
          <Route path="/" exact component={Home_Page}/>
          <Route path="/zabiegi" component={Treatments_Page}/>
          <Route path="/cennik" component={Pricelist_Page}/>
          <Route path="/nasz-zespol" component={Team_Page}/>
          <Route path="/kontakt" component={Contact_Page}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
