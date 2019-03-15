import React from 'react';
import { Link } from 'react-router-dom';

const OurPeoplePageLink = ({ ...rest }) => (
  <Link to="/#ourPeople" role="menuitem" {...rest}>
    Our People
  </Link>
);

export default OurPeoplePageLink;
