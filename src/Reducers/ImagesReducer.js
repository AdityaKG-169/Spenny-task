const imagesReducer = (state = null, action) => {
	switch (action.type) {
		case "ADD_IMAGES":
			return action.payload;
		default:
			return state;
	}
};

export default imagesReducer;
