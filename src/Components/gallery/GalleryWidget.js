import React, { Component } from "react";
import classnames from "classnames";
import photoSizes from "../photos/photoSizes.js";
import ImageGallery from "react-image-gallery";
import photoUrlFactory from "../photos/photoUrlFactory.js";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const defaultStageSize = photoSizes["750x450"];
const defaultThumbnailSize = photoSizes["140x84"];

export default class GalleryWidget extends Component {
  constructor(props) {
    super(props);

    const {
      photos,
      stageSize = defaultStageSize,
      thumbnailSize = defaultThumbnailSize
    } = props;

    this.state = {
      items: photos.map(galleryPhoto => {
        const { photo } = galleryPhoto;
        return {
          original: photoUrlFactory.getUrl(photo, stageSize),
          thumbnail: photoUrlFactory.getUrl(photo, thumbnailSize),
          caption: galleryPhoto.caption
        };
      }),
      currentIndex: 0
    };
  }

  renderLeftNav = (onClick) => {
    return <span className="image-gallery-custom-left-nav" onClick={onClick} ref={element => this._leftNav = element}></span>;
  };

  renderRightNav = (onClick) => {
    return <span className="image-gallery-custom-right-nav" onClick={onClick} ref={element => this._rightNav = element}></span>;
  };


  _setElement(element) {
		// const { stageSize = defaultFullSize } = this.props;

		// if (element) {
		// 	const imageGallery = element.querySelector('.image-gallery');
		// 	imageGallery.style.width = `${stageSize.width}px`;

		// 	const stage = imageGallery.querySelector('.image-gallery-slide-wrapper');
		// 	stage.style.width = `${stageSize.width}px`;
		// 	stage.style.height = `${stageSize.height}px`;
		// }
	}

  render() {
    const { items, currentIndex } = this.state;
    const {
      className,
      showThumbnails = true,
      showPlayButton = true,
      showFullscreenButton = true
    } = this.props;

    const item = items[currentIndex];

    let caption = item && item.caption ? item.caption : null;

    return (
      <figure
        className={classnames("GalleryWidget", className)}
        style={{}}
        ref={element => {
          this._setElement(element);
        }}
      >
        {caption}
        <ImageGallery
          items={items}
          showThumbnails={showThumbnails}
          showPlayButton={false}
          showFullscreenButton={showFullscreenButton}
          onSlide={index => {
            this.setState({ currentIndex: index });
          }}
          renderLeftNav={this.renderLeftNav}
          renderRightNav={this.renderRightNav}
        />
      </figure>
    );
  }
}
