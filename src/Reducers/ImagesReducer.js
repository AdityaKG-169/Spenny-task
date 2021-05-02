const imagesReducer = (state = null, action) => {
	switch (action.type) {
		case "ADD_IMAGES":
			return action.payload;
		case "ADD_MORE_IMAGES":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default imagesReducer;
