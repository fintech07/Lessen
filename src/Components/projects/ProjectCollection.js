
export default class ProjectCollection {
	constructor() {
		this.projects = {};
	}

	add(project) {
		if (this.projects[project.name]) {
			throw new Error(`There is already a project called ${project.name}`);
		}
		this.projects[project.name] = project;
	}

	toArray() {
		return Object.keys(this.projects).map(key => this.projects[key]);
	}
}
