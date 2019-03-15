import ProjectCollection from './ProjectCollection.js';
import Project from './Project.js';
import Testimonial from '../testimonials/Testimonial.js';
import TestimonialCollection from '../testimonials/TestimonialCollection.js';
import Photo from '../photos/Photo.js';
import PhotoCollection from '../photos/PhotoCollection.js';
import { defaultSizesLandscape, defaultSizesPortrait } from '../photos/photoSizes.js';

function parsePhotoJson(photoData) {
	let sizes;

	switch (photoData.sizes) {
		case undefined:
		case "landscape":
			sizes = defaultSizesLandscape;
		break;
		case "portrait":
			sizes = defaultSizesPortrait
		break;
		default:
			sizes = photoData.sizes;

			Object.keys(sizes).forEach(sizeId => {
				const sizeData = sizes[sizeId];
				sizeData.pixels = sizeData.width * sizeData.height;
				sizeData.name = sizeData.name || sizeId;
			});
		break;
	}

	return new Photo({
		name: photoData.name,
		url: photoData.url,
		sizes,
	});
}

export { parsePhotoJson };

export default function parseProjectsJson(projectsData) {
	const projects = new ProjectCollection();

	Object.keys(projectsData || {}).forEach(projectKey => {
		const projectData = projectsData[projectKey];

		const photosArray = Object.keys(projectData.photos || {}).map(photoKey => {
			const photo = parsePhotoJson(projectData.photos[photoKey]);
			photo.name = photo.name || photoKey;
			return photo;
		});

		const photos = new PhotoCollection();
		photos.add(...photosArray);

		const completedDate = new Date(projectData.completedDate || null);

		const testimonials = new TestimonialCollection();

		(projectData.testimonials || []).forEach(testimonialData => {
			const t = new Testimonial(testimonialData.quote, testimonialData.author);
			testimonials.add(t);
		});

		const projectName = projectsData.name || projectKey;

		projects.add( new Project({ name: projectName, photos, completedDate, testimonials }) );
	});

	return projects;
}
