
function isDev() {
	return process.env.NODE_ENV === 'development';
}

function isProd() {
	return process.env.NODE_ENV === 'production';
}

function isPreview() {
	return isProd();
}

function getSiteRoot() {
	return isDev() ? '/lenssen-inc-preview/' : '/';
}

function getPublicUrlRoot() {
	return isDev() ? process.env.PUBLIC_URL : getSiteRoot();
}

export { isPreview, isProd, isDev, getSiteRoot, getPublicUrlRoot };
