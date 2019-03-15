import { parsePhotoJson } from '../../Components/projects/parseProjectsJson.js';
import residentialProjectsData from '../../Components/projects/residentialProjectsData.json';
import PhotoCollection from '../../Components/photos/PhotoCollection.js';

const HomePageGalleryPhotos = new PhotoCollection();

const photo1 = parsePhotoJson(residentialProjectsData["project B"]["photos"]["photo 1"]);

const photo2 = parsePhotoJson(residentialProjectsData["project A"]["photos"]["photo 1"]);

HomePageGalleryPhotos.add(photo1, photo2);

export default HomePageGalleryPhotos;
