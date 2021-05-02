import React, { memo } from "react";

const Button = ({ handleIncrement, children }) => {
	console.log(`rendering button - ${children}`);
	return (
		<div>
			<button onClick={handleIncrement}>{children}</button>
		</div>
	);
};

export default memo(Button);
