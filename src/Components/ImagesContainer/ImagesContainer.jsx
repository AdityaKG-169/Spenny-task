import React, { useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPageNumber } from "../../Actions";
// import ImageContainer from "../ImageContainer/ImageContainer";
import "./ImagesContainer.css";

const ImagesContainer = () => {
	const images = useSelector((state) => state.imagesReducer);
	const pageNumber = useSelector((state) => state.pageNumberReducer);
	const dispatch = useDispatch();

	const observer = useRef();
	const lastImageElementRef = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					console.log(pageNumber);
					dispatch(editPageNumber(pageNumber + 1));
				}
			});
			if (node) observer.current.observe(node);
		},
		[dispatch, pageNumber]
	);

	return (
		<div className="images__container">
			{images ? (
				images.map((i, j) => {
					if (images.length === j + 1) {
						return (
							<div className="gallery-item" key={j} ref={lastImageElementRef}>
								<div className="image">
									<img
										src={`https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`}
										alt={i.title}
									/>
								</div>
							</div>
						);
					} else {
						return (
							<div className="gallery-item" key={j}>
								<div className="image">
									<img
										src={`https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`}
										alt={i.title}
									/>
								</div>
							</div>
						);
					}
				})
			) : (
				<h1>⌛ Loading</h1>
			)}
		</div>
	);
};

export default ImagesContainer;
