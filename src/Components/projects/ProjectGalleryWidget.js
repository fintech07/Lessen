import React from 'react';
import GalleryWidget from '../gallery/GalleryWidget.js';
import GalleryTestimonialTextWidget from '../gallery/GalleryTestimonialTextWidget.js';
import GalleryPhoto from '../gallery/GalleryPhoto.js';

const ProjectGalleryWidget = ({ project, title }) => {

	const photos = project.photos.toArray().map((photo) => {
		const testimonial = project.testimonials.getNext();
		const caption = <GalleryTestimonialTextWidget testimonial={testimonial} />;
		const galleryPhoto = new GalleryPhoto( photo, caption );
		return galleryPhoto;
	});
	
	return (
		<section>
			<h1>{title || project.name}</h1>
			<GalleryWidget photos={photos} />
		</section>
	);

};

export default ProjectGalleryWidget;
