import React from 'react';
import GalleryPhotoCaption from './GalleryPhotoCaption.js';

const GalleryTestimonialTextWidget = ({ testimonial }) => (
	testimonial ? (
		<GalleryPhotoCaption>
			<blockquote className="GalleryTestimonialTextWidget">
				{testimonial.quote}
				<cite>
					&nbsp;- {testimonial.author}
				</cite>
			</blockquote>
		</GalleryPhotoCaption>
	) : null
);

export default GalleryTestimonialTextWidget;