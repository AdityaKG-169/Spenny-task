import React from "react";
import "./ImageContainer.css";

const ImageContainer = ({ imageLink, imageText }) => {
	return (
		<div className="gallery-item">
			<div className="image">
				<img src={imageLink} alt={imageText} />
			</div>
		</div>
	);
};

export default ImageContainer;
