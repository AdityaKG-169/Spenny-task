import React from "react";
import { useDispatch } from "react-redux";
import { editSearchText } from "../../Actions";
import "./SearchBox.css";

const SearchBox = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<input
				type="text"
				placeholder="🔍 Search free high resolution photos"
				onChange={(e) => dispatch(editSearchText(e.target.value))}
			/>
		</div>
	);
};

export default SearchBox;
