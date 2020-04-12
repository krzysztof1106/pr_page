import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



/* ---------- App imports ---------- */
import Navbar from './Navigaton/Navbar';
import Footer from './Footer/FooteContext';

import  Home_Page from './Home_Page';
import  Treatments_Page from './Treatments_Page';
import  Pricelist_Page from './Pricelist/Pricelist_Page';
import  Team_Page from './Team_Page';
import Contact_Page from './Contact_Page';



const App = ()  => {
  return (
    <Router>
        <Navbar />
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
