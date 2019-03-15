import parseProjectsJson from './parseProjectsJson.js';
import commercialProjectsData from './commercialProjectsData.json';

const commercialProjects = parseProjectsJson(commercialProjectsData);

export default commercialProjects;
