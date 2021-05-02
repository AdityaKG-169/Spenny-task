import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { addImages, editPageNumber, addMoreImages } from "../../Actions";
import ImagesContainer from "../../Components/ImagesContainer/ImagesContainer";
import "./HomePage.css";

const HomePage = () => {
	const dispatch = useDispatch();
	const searchText = useSelector((state) => state.searchTextReducer);
	const pageNumber = useSelector((state) => state.pageNumberReducer);

	let prevState = useRef(searchText);

	useEffect(() => {
		let cancel;
		axios({
			method: "GET",
			url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_IMAGE_KEY}&text=${searchText}&media=photos&per_page=15&page=${pageNumber}&format=json&nojsoncallback=1`,
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then(({ data }) => {
				if (prevState === searchText) {
					dispatch(addMoreImages(data.photos.photo));
				} else {
					dispatch(addImages(data.photos.photo));
					dispatch(editPageNumber(1));
				}
			})
			.catch((e) => {
				if (axios.isCancel(e)) return;
			});
		prevState.current = searchText;
		return () => cancel();
	}, [dispatch, pageNumber, searchText]);

	return (
		<div className="homepage__container">
			<h1>Image Grid</h1>
			<SearchBox />
			<ImagesContainer />
		</div>
	);
};

export default HomePage;
