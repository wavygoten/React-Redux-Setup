import { isDark } from "../constants/DarkLightType";

const initialState = {
	isdark: true,
};

const darkLightReducer = (state = initialState, action) => {
	switch (action.type) {
		case isDark:
			return {
				...state,
				isdark: !state.isdark,
			};
		default:
			return state;
	}
};

export default darkLightReducer;
