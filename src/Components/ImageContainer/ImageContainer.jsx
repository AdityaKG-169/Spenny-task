import React from "react";
import { useSelector } from "react-redux";
import "./ImageContainer.css";

const ImageContainer = () => {
	const images = useSelector((state) => state.imagesReducer);

	return (
		<div>
			{console.log(images)}
			{images ? (
				images.map((i, j) => {
					return (
						<img
							src={`https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`}
							key={j}
							alt={i.title}
						/>
					);
				})
			) : (
				<h1>Loading</h1>
			)}
		</div>
	);
};

export default ImageContainer;
