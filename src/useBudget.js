import React, { useState } from "react";

const useBudget = () => {
	const [budget, setBudget] = useState(0);
	const incrementBudget = () => setBudget(budget + 1);
	const decrementBudget = () => setBudget(budget - 1);
	const resetBudget = () => setBudget(0);
	return {
		incrementBudget,
		decrementBudget,
		resetBudget,
		budget,
	};
};

export default useBudget;
