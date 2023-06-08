const login = (event) => {
	event.preventDefault();
	const email = event.target.elements.email.value;
	const password = event.target.elements.password.value;

	if (email === "maxm@hackupstate.com" && password === "superSecret") {
		window.localStorage.setItem("isLoggedIn", "true");
		window.location = "index.html";
	} else {
		alert("Login credentials are incorrect");
	}
};
