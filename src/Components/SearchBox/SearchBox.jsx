import React from "react";
import { useDispatch } from "react-redux";
import { editSearchText } from "../../Actions";
import "./SearchBox.css";

const SearchBox = () => {
	const dispatch = useDispatch();

	return (
		<input
			type="text"
			placeholder="🔍 Search free high resolution photos"
			onChange={(e) => dispatch(editSearchText(e.target.value))}
		/>
	);
};

export default SearchBox;
