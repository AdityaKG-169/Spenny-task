export const editSearchText = (text) => {
	return {
		type: "EDIT_SEARCH_TEXT",
		payload: text,
	};
};

export const editPageNumber = (number) => {
	return {
		type: "EDIT_PAGE_NUMBER",
		payload: number,
	};
};

export const addImages = (imagesObject) => {
	return {
		type: "ADD_IMAGES",
		payload: imagesObject,
	};
};
