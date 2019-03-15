
export default class PhotoCollection {
	constructor() {
		this._photos = {};
	}

	toArray() {
		return Object.keys(this._photos).map(key => this._photos[key]);
	}

	add(...photos) {
		photos.forEach(photo => {
			this._addOne(photo);
		});
	}

	_addOne(photo) {
		if (this._photos[photo.name]) {
			throw new Error('Collection already has a photo by that name');
		}
		this._photos[photo.name] = photo;
	}
}
