
const photoSizes = {
	"1200x720": {
		name: "1200x720",
		width: 1200,
		height: 720,
		pixels: 1200 * 720,
	},
	"750x450": {
		name: "750x450",
		width: 750,
		height: 450,
		pixels: 750 * 450,
	},
	"140x84": {
		name: "140x84",
		width: 140,
		height: 84,
		pixels: 140 * 84,
	},
};

const defaultSizesLandscape = {
	"1200x720": photoSizes["1200x720"],
	"750x450": photoSizes["750x450"],
	"140x84": photoSizes["140x84"],
};

const defaultSizesPortrait = {
};

export default photoSizes;

export { defaultSizesLandscape, defaultSizesPortrait };
