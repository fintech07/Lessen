import React from 'react';
import { Link } from 'react-router-dom';

const HomePageLink = ({ children = "Home", ...rest }) => (
	<Link to="/" role="menuitem" {...rest}>
		{children}
	</Link>
);

export default HomePageLink;