import { combineReducers } from "redux";
// import other reducers here

import incrementReducer from "./reducers/IncrementReducer";
import decrementReducer from "./reducers/DecrementReducer";
import darkLightReducer from "./reducers/DarkLightReducer";
const rootReducer = combineReducers({
	increase: incrementReducer,
	decrease: decrementReducer,
	changedark: darkLightReducer,
});

export default rootReducer;
