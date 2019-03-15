import Photo from '../photos/Photo.js';

export default class ProjectPhoto extends Photo {
	constructor({ project, ...rest }) {
		super({ ...rest });
		this.project = project;
		this.project.photos.add(this);
	}
}
