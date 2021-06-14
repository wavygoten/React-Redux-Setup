import { combineReducers } from "redux";
// import other reducers here

import incrementReducer from "./reducers/IncrementReducer";
import decrementReducer from "./reducers/DecrementReducer";

const rootReducer = combineReducers({
	increase: incrementReducer,
	decrease: decrementReducer,
});

export default rootReducer;
