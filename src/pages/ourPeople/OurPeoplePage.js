import React from 'react';
import lenssenFamilyPhotoUrl from './lenssenFamily.jpg';

const OurPeoplePage = () => (
	<article>
		<h1>
			Keith Lenssen, President
		</h1>

		<aside>
			<figure>
				<img src={lenssenFamilyPhotoUrl} alt="the Lenssen family" />
				<figcaption>
					Keith, Connor, Jana & Jillian
				</figcaption>
			</figure>
		</aside>

		<p>
			Keith opened this company in 2005, before its inception, Keith had 12 years of construction experience,
			four years of which the held the title of Project Manager of a 40 home development, “Orchard View Homes”.
			In 1998 Keith established his own successful company, “Keith Lenssen Construction”, where he performed
			residential construction in the Grant County area. This company was dissolved in 2001. Beginning in 2001
			Keith worked in the field of information technology in the capacity of Field Operation Manager & Sales. 
		</p>

		<p>
			Keith now lives in Ephrata with his wife, Jana, and their two children Jillian & Connor.  In his free time
			he enjoys spending time with his family, church and working on his rustic cabin north of Spokane.
		</p>
	</article>
);

export default OurPeoplePage;
