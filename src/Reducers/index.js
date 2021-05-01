import { combineReducers } from "redux";
import pageNumberReducer from "./PageNumberReducer";
import searchTextReducer from "./SearchTextReducer";
import imagesReducer from "./ImagesReducer";

const allReducers = combineReducers({
	pageNumberReducer,
	searchTextReducer,
	imagesReducer,
});

export default allReducers;
