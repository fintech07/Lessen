import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//css...
import "./css/Website.css";

import { getSiteRoot } from './Components/util/environment.js';
import SiteHeader from './Components/SiteHeader/SiteHeader.js';
import SiteFooter from './Components/SiteFooter/SiteFooter.js';
import HomePage from './pages/home/index.js';
import OurPeoplePage from './pages/ourPeople/OurPeoplePage.js';
import OurMethodsPage from './pages/ourMethods/OurMethodsPage.js';
import ResidentialTimelinePage from './pages/residential/ResidentialTimelinePage.js';
import CommercialTimelinePage from './pages/commercial/CommercialTimelinePage.js';

class Website extends Component {
  render() {
    return (
      <Router basename={getSiteRoot()}>
        <div className="Website">
          <SiteHeader />
          <main>
            <Route exact path="/" component={HomePage} />
            <Route path="/ourPeople" component={OurPeoplePage} />
            <Route path="/ourMethods" component={OurMethodsPage} />
            <Route path="/residential" component={ResidentialTimelinePage} />
            <Route path="/commercial" component={CommercialTimelinePage} />
          </main>
          <SiteFooter />
        </div>
      </Router>
    );
  }
}

export default Website;
