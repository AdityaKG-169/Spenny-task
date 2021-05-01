const searchTextReducer = (state = "", action) => {
	switch (action.type) {
		case "EDIT_SEARCH_TEXT":
			return  action.payload 
		default:
			return state;
	}
};

export default searchTextReducer;
