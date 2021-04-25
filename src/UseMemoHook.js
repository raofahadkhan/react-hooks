import React, { useMemo, useEffect, useState } from "react";

function slowFunction(num) {
	for (let index = 0; index < 100000000; index++) {}
	return num * 2;
}

function UseMemoHook() {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	const doubleNumber = useMemo(() => {
		console.log("use memo is running");
		return slowFunction(number);
	}, [number]);

	const themeStyles = useMemo(() => {
		return {
			background: dark ? "black" : "white",
			color: dark ? "white" : "black",
		};
	}, [dark]);

	useEffect(() => {
		console.log("theme changed");
	}, [themeStyles]);

	return (
		<>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<br />
			<br />
			<button onClick={() => setDark((prevDark) => !prevDark)}>
				Change Theme
			</button>
			<div style={themeStyles}>{doubleNumber}</div>
		</>
	);
}

export default UseMemoHook;
