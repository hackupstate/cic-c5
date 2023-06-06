const createPost = (event) => {
	event.preventDefault();
	console.log("Button clicked");
	const post = {
		title: event.target.elements.title.value,
		content: event.target.elements.content.value,
		author: event.target.elements.author.value,
		timestamp: Date.now(),
	};

	console.log(post);
};
