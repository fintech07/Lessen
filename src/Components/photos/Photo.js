
import { defaultSizesLandscape } from './photoSizes.js';

export default class Photo {
	constructor({ name, url, sizes = defaultSizesLandscape }) {
		this.name = name;
		this.url = url;
		this.sizes = sizes;
	}
}
