import path from 'path';
import { getPublicUrlRoot } from '../util/environment.js';

class PhotoUrlFactory {

	getUrl(photo, containerSize) {
		const size = getSizeThatFits(photo, containerSize);

		const url = path.join(
			getPublicUrlRoot(),
			photo.url,
			size.name + '.jpg'
		);

		return url;
	}

}

function getSizeThatFits(photo, containerSize) {
	let bestSize;

	Object.keys(photo.sizes).forEach(sizeId => {
		const testSize = photo.sizes[sizeId];

		if (!bestSize) {
			bestSize = testSize; 
		} else {
			if (fitsWithin(testSize, containerSize)) {
				if (fallsOutsideOf(testSize, bestSize) || fallsOutsideOf(bestSize, containerSize)) {
					bestSize = testSize;
				}
			} else if (fitsWithin(testSize, bestSize)) {
				bestSize = testSize;
			}
		}
	});

	return bestSize;
}

function fitsWithin(testSize, containerSize) {
	return testSize.width <= containerSize.width && testSize.height <= containerSize.height;
}

function fallsOutsideOf(testSize, containerSize) {
	return testSize.width > containerSize.width || testSize.height > containerSize.height;
}


const photoUrlFactory = new PhotoUrlFactory();

export default photoUrlFactory;
