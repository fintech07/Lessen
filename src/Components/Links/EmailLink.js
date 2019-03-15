import React from 'react';

const address = 'info@lensseninc.com';

const EmailLink = ({ text = address }) => (
	<a className="EmailLink" href={`mailto:${address}`} target="_blank">
		{text}
	</a>
);

export default EmailLink;
