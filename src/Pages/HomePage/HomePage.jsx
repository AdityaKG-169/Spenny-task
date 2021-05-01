import React, { useEffect } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { addImages } from "../../Actions";
import "./HomePage.css";
import ImageContainer from "../../Components/ImageContainer/ImageContainer";

const HomePage = () => {
	const dispatch = useDispatch();
	const searchText = useSelector((state) => state.searchTextReducer);

	useEffect(() => {
		fetch(
			`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_IMAGE_KEY}&text=${searchText}&media=photos&per_page=15&page=1&format=json&nojsoncallback=1`
		)
			.then((response) => response.json())
			.then((data) => dispatch(addImages(data.photos.photo)));
	}, [dispatch, searchText]);

	return (
		<>
			<h1>Image Grid</h1>
			<SearchBox />
			<ImageContainer />
		</>
	);
};

export default HomePage;
