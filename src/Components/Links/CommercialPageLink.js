import React from 'react';
import { Link } from 'react-router-dom';

const CommercialPageLink = ({ ...rest }) => (
  <Link to="/#commercial" role="menuitem" {...rest}>
    Commercial
  </Link>
);

export default CommercialPageLink;
