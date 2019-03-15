import React from 'react';
import GalleryWidget from '../../Components/gallery/GalleryWidget.js';
import GalleryPhoto from '../../Components/gallery/GalleryPhoto.js';
import GalleryPhotoCaption from '../../Components/gallery/GalleryPhotoCaption.js';
import HomePageGalleryPhotos from './HomePageGalleryPhotos.js';

import { urls } from './urls.js';

const Caption = () => (
	<GalleryPhotoCaption>
		<div></div>
		<div className="GalleryQuote">
			<h1>
				Transform your vision into a beautiful home.
			</h1>
			<div className="InputQuote">
				<input type="text" placeholder="Your name and number" />
				<button type="button">
					REQUEST A QUOTE
				</button>
			</div>
		</div>
		<div className="social">
			<div className="SocialLinks">
				<a href={urls.social.twitter} rel="noopener noreferrer" target="_blank" > <img src={"/img/16px-grey-logo-twitter.svg"} alt="" /></a>
				<a href={urls.social.pinterest} rel="noopener noreferrer" target="_blank"><img src={"/img/16px-grey-logo-pinterest.svg"} alt="" /></a>
				<a href={urls.social.instagram} rel="noopener noreferrer" target="_blank"><img src={"/img/16px-grey-logo-instagram.svg"} alt="" /></a>
				<a href={urls.social.facebook} rel="noopener noreferrer" target="_blank"><img src={"/img/16px-grey-logo-facebook.svg"} alt="" /></a>		
			</div>
			<div className="Trail">
				<div onClick={handleLeftNavClick} className="TrailLeft"><img src={"/img/16px-trail-left.svg"} alt="" /></div>
				<div onClick={handleRightNavClick} className="TrailRight"><img src={"/img/16px-trail-right.svg"} alt="" /></div>
			</div>
		</div>
	</GalleryPhotoCaption>
);

const handleLeftNavClick = () => {
	this._gallery._leftNav.click();
};

const handleRightNavClick = () => {
	this._gallery._rightNav.click();
};

const HomePageGallery = ({ project, title }) => {

    const galleryPhotos = HomePageGalleryPhotos.toArray().map(photo => {
		return new GalleryPhoto(photo, <Caption />);
	});

	return (
		<GalleryWidget
			className="HomePageGallery"
			photos={galleryPhotos}
			showThumbnails={false}
			showPlayButton={true}
			showFullscreenButton={false}
			ref={comp => this._gallery = comp}
		/>
    );
}

export default HomePageGallery;
