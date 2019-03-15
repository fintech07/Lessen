import React from "react";

import Logo from "../Logo/Logo.js";
import HomePageLink from "../Links/HomePageLink.js";
import OurPeoplePageLink from "../Links/OurPeoplePageLink.js";
import OurMethodsPageLink from "../Links/OurMethodsPageLink.js";
import ResidentialPageLink from "../Links/ResidentialPageLink.js";
import CommercialPageLink from "../Links/CommercialPageLink.js";

const SiteHeader = () => (
  <header className="SiteHeader">
    <div className="Logo">
      <Logo />
    </div>
    <nav>
      <ul role="menu">
        <li>
          <HomePageLink />
        </li>
        <li>
          <OurPeoplePageLink />
        </li>
        <li>
          <OurMethodsPageLink />
        </li>
        <li>
          <ResidentialPageLink />
        </li>
        <li>
          <CommercialPageLink />
        </li>
      </ul>
    </nav>
    <div className="PhoneNumber">
      <div className="PhoneImage">
        <span>
          <i className="fa fa-phone" />
        </span>
      </div>
      <div className="PhoneText">
        <div>069</div>
        <div>426-725</div>
      </div>
    </div>
  </header>
);

export default SiteHeader;
