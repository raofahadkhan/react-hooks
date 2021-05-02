import React from "react";
import useBudget from "./useBudget";
const CustomHook = () => {
	const { incrementBudget, decrementBudget, resetBudget, budget } = useBudget();
	return (
		<div>
			<div>Our budget is {budget}</div>
			<button onClick={incrementBudget}>Increment</button>
			<button onClick={decrementBudget}>Decrement</button>
			<button onClick={resetBudget}>reset</button>
		</div>
	);
};

export default CustomHook;
