import React, { useState } from "react";
// import UseEffectHook from "./UseEffectHook";
import UseMemoHook from "./UseMemoHook";

function App() {
	// const [count, setCount] = useState(4);
	const [count, setCount] = useState(() => {
		console.log("state console.log is running");
		return 4;
	});

	const handleCount = () => {
		// setCount(count + 1); this will not work
		// setCount(count + 1); it will only does the increment of 1
		setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
	};
	return (
		<div>
			{/* <UseEffectHook /> */}
			<UseMemoHook />
			<button onClick={handleCount}>Increment count</button>
			<div>{count}</div>
		</div>
	);
}

export default App;
