import React from "react";

import EmailLink from "../Links/EmailLink.js";
import PhoneLink from "../Links/PhoneLink.js";
import AddressLink from "../Links/AddressLink.js";

const SiteFooter = () => (
  <footer className="SiteFooter">
    <section className="RequestMeeting">
      <h1>Build Your Dream Home Today</h1>
      <p>
        <EmailLink text={<button type="button"> REQUEST A QUOTE </button>} />
      </p>
    </section>
    <section className="ContactUs">
      <h1>Contact us</h1>

      <figure>
        <figcaption>Address:</figcaption>
        <AddressLink />
      </figure>

      <figure>
        <figcaption>Phone:</figcaption>
        <PhoneLink />
      </figure>

      <figure>
        <figcaption>Email:</figcaption>
        <EmailLink />
      </figure>
    </section>

    <section className="Copyright">
      <div className="blank" />
      <label>&copy; 2018 Lenssen Inc.</label>
      <span className="social">
        <a
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <img src={"/img/16px-logo-facebook.svg"} alt="" />{" "}
        </a>
        <a
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={"/img/16px-logo-instagram.svg"} alt="" />{" "}
        </a>
        <a
          href="http://www.pinterest.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={"/img/16px-logo-pinterest.svg"} alt="" />{" "}
        </a>
        <a
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={"/img/16px-logo-twitter.svg"} alt="" />{" "}
        </a>
      </span>
    </section>
  </footer>
);

export default SiteFooter;
