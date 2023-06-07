const createPost = (event) => {
	event.preventDefault();
	console.log("Button clicked");
	const post = {
		title: event.target.elements.title.value,
		content: event.target.elements.content.value,
		author: event.target.elements.author.value,
		timestamp: Date.now(),
	};

	//get the existing posts from local storage
	const postsString = window.localStorage.getItem("posts");
	let postsArray;

	if (!postsString) {
		//if the posts have not been created yet, make a new empty array
		postsArray = [];
	} else {
		//convert the local storage string to an array
		postsArray = JSON.parse(postsString);
	}

	//add our new post object to end of the array
	postsArray.push(post);

	//convert the array back to a string
	const newPostsArray = JSON.stringify(postsArray);

	//put the stringified array back into local storage
	window.localStorage.setItem("posts", newPostsArray);
	window.location = "/";
};
