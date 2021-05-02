import React from "react";
import ParentComponent from "./components/ParentComponent";

const UseCallbackHook = () => {
	return (
		<div>
			<ParentComponent />
		</div>
	);
};

export default UseCallbackHook;
// useCallback return a memoized callback
