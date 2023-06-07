const postJSON = window.localStorage.getItem("posts");
const posts = JSON.parse(postJSON);
const postsDiv = document.getElementById("posts");

let generatedHTML = "";

for (const post of posts) {
	generatedHTML += `<div class="col-4">
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">${post.title}</h5>
			<div class="card-text">
				<div class="author">by ${post.author}</div>
				<div class="timestamp">${new Date(post.timestamp).toLocaleTimeString()}</div>
				<p>
					${post.content.slice(0, 100)}${post.content.length > 100 ? "..." : ""}
				</p>
			</div>
			<a href="read.html" class="btn btn-primary">Read more</a>
		</div>
	</div>
	<!-- end of my card-->
	</div>`;
}

postsDiv.innerHTML = generatedHTML;
