import React from 'react';
import { Link } from 'react-router-dom';

const ResidentialPageLink = ({ ...rest }) => (
  <Link to="/#residential" role="menuitem" {...rest}>
    Residential
  </Link>
);

export default ResidentialPageLink;
