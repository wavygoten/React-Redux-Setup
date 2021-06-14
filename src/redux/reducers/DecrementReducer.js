import { DECREMENT } from "../constants/DecrementType";

const initialState = {
	count: 0,
};

const incrementReducer = (state = initialState, action) => {
	switch (action.type) {
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
};

export default incrementReducer;
