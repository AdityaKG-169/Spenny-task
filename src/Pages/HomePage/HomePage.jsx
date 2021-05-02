import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { addImages } from "../../Actions";
import ImageContainer from "../../Components/ImageContainer/ImageContainer";
import "./HomePage.css";

const HomePage = () => {
	const dispatch = useDispatch();
	const searchText = useSelector((state) => state.searchTextReducer);

	useEffect(() => {
		let cancel;
		axios({
			method: "GET",
			url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_IMAGE_KEY}&text=${searchText}&media=photos&per_page=15&page=1&format=json&nojsoncallback=1`,
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then(({ data }) => dispatch(addImages(data.photos.photo)))
			.catch((e) => {
				if (axios.isCancel(e)) return;
			});
		return () => cancel();
	}, [dispatch, searchText]);

	return (
		<div className="homepage__container">
			<h1>Image Grid</h1>
			<SearchBox />
			<ImageContainer />
		</div>
	);
};

export default HomePage;
