import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../redux";
const Decrement = () => {
	const count = useSelector((state) => state.decrease.count);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Count - {count} </h2>

			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};

export default Decrement;
