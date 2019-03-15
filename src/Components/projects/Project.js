import PhotoCollection from '../photos/PhotoCollection.js';
import TestimonialCollection from '../testimonials/TestimonialCollection.js';

export default class Project {
	constructor({ name, photos, completedDate = (new Date()), testimonials }) {
		this.name = name;
		this.photos = photos || new PhotoCollection();
		this.testimonials = testimonials || new TestimonialCollection();
		this.completedDate = completedDate;
	}
}
