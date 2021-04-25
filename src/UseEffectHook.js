import React, { useState, useEffect } from "react";
import axios from "axios";
function UseEffectHook() {
	const [posts, setPosts] = useState([]);
	const [id, setId] = useState(1);
	const [postId, setPostId] = useState(1);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((res) => setPosts(res.data))
			.catch((e) => console.log(e));
	}, [postId]);

	const handleSetId = (id) => {
		setPostId(id);
	};

	return (
		<div className="App">
			<input type="number" value={id} onChange={(e) => setId(e.target.value)} />
			<button type="button" onClick={(e) => handleSetId(id)}>
				Fetch Data
			</button>
			<ul>
				{/* {posts.map((post) => (  
					<li key={post.id}>{post.title}</li>
				))} */}
				<li>{posts.title}</li>
			</ul>
		</div>
	);
}

export default UseEffectHook;
