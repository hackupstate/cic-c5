const Header = ({ setUsername, setMessageColor }) => {
	const updateUsername = () => {
		const typedInName = window.prompt(
			"What would you like your username to be?"
		);
		setUsername(typedInName);
	};

	const updateColor = () => {
		const typedInColor = window.prompt(
			"What would you like your color to be?"
		);
		setMessageColor(typedInColor);
	};

	return (
		<header className="text-center">
			<h1>My Messages</h1>
			<button onClick={updateUsername} className="btn btn-primary">
				Set username
			</button>
			<button onClick={updateColor} className="btn btn-primary">
				Set color
			</button>
		</header>
	);
};

export default Header;
