import React, { useReducer } from "react";

const initialState = {
	count: 0,
	name: "fahad",
};
function reducer(state, action) {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count: state.count + action.payload,
			};
		case "DECREMENT":
			return {
				...state,
				count: state.count - action.payload,
			};
		case "update-name":
			return {
				...state,
				name: action.payload,
			};
		case "RESET":
			return {
				name: "fahad",
				count: 0,
			};
		default:
			return state;
	}
}

const UseReducerHook = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// const increment = (value) {
	//   return{
	//     type: 'INCREMENT',
	//     payload: value
	//   }
	// } written this for task
	return (
		<div>
			<div>Name: {state.name}</div>
			<div>Count: {state.count}</div>
			<button
				onClick={() => dispatch({ type: "update-name", payload: "daniyal" })}
			>
				Update Name
			</button>
			<button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
		</div>
	);
};

export default UseReducerHook;
