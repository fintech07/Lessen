import React from 'react';

const address = '2326 Plum St, Ephrata, WA 98823';
const googleMapsUrl = 'http://maps.google.com/maps?q=2326+Plum+St,+Ephrata,+WA+98823';

const AddressLink = () => (
	<a href={googleMapsUrl} target="map">
		{address}
	</a>
);

export default AddressLink;
