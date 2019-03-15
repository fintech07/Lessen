import React from 'react';
import ProjectGalleryWidget from './ProjectGalleryWidget.js';

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const ProjectsTimelineWidget = ({ projects }) => {
	const sortedProjects = projects.toArray()
	.sort((project1, project2) => {
		if (project1.completedDate < project2.completedDate) {
			return -1;
		}
		if (project1.completedDate > project2.completedDate) {
			return 1;
		}
		return 0;
	});

	const galleries = sortedProjects.map(project => {
		const { completedDate } = project;
		const name = `${MONTHS[completedDate.getMonth()]} ${completedDate.getFullYear()}`;

		return <ProjectGalleryWidget project={project} title={name} />;
	});

	return (
		<div className="ProjectsTimelineWidget">
			<p>
				hey there
			</p>
			{galleries}
		</div>
	);
};

export default ProjectsTimelineWidget;
