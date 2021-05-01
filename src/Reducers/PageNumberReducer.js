const pageNumberReducer = (state = 1, action) => {
	switch (action.type) {
		case "EDIT_PAGE_NUMBER":
			return action.payload;
		default:
			return state;
	}
};

export default pageNumberReducer;
