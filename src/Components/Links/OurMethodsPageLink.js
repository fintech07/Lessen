import React from 'react';
import { Link } from 'react-router-dom';

const OurMethodsPageLink = ({ ...rest }) => (
  <Link to="/#ourMethods" role="menuitem" {...rest}>
    Our Methods
  </Link>
);

export default OurMethodsPageLink;
