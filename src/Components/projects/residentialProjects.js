import parseProjectsJson from './parseProjectsJson.js';
import residentialProjectsData from './residentialProjectsData.json';

const residentialProjects = parseProjectsJson(residentialProjectsData);

export default residentialProjects;

