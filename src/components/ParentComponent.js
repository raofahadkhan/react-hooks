import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
const ParentComponent = () => {
	const [age, setAge] = useState(30);
	const [salary, setSalary] = useState(50000);

	const incrementAge = useCallback(() => setAge((prevAge) => prevAge + 1), []);

	const incrementSalary = useCallback(
		() => setSalary((prevSalary) => prevSalary + 12000),
		[]
	);
	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleIncrement={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleIncrement={incrementSalary}>Increment Salary</Button>
		</div>
	);
};

export default ParentComponent;
