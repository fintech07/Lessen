
export default class TestimonialCollection {
	constructor() {
		this._items = [];
		this._pointer = 0;
	}

	getNext() {
		this._pointer++;

		if (this._pointer >= this._items.length) {
			this._pointer = 0;
		}

		return this._items[this._pointer];
	}

	add(item) {
		this._items.push(item);
	}
}
