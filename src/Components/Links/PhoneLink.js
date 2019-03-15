import React from 'react';

const number = '+15097500945';
const numberFormatted = '(509) 750-0945';

const PhoneLink = () => (
	<a href={`tel:${number}`} target="phone">
		{numberFormatted}
	</a>
);

export default PhoneLink;
