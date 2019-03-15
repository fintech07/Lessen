import React from 'react';
import classnames from 'classnames';

const HomeSection = ({ children, caption, className }) => (
	<figure className={classnames('HomeSection', className)}>
		<figcaption>
			{caption}
		</figcaption>
		{children}
	</figure>
);

export default HomeSection;
