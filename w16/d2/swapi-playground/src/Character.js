import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Character = ({ name }) => {
	const { id } = useParams();
	const [character, setCharacter] = useState();

	useEffect(() => {
		const makeAPICall = async () => {
			const response = await fetch(`https://swapi.dev/api/people/${id}`);
			const data = await response.json();
			console.log(data);
			setCharacter(data);
		};
		makeAPICall();
	}, [id]);

	if (!character) {
		return <BarLoader />;
	}

	if (character.name === "R2-D2") {
		return (
			<img
				className="animate__animated animate__flash"
				src="https://static.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png"
			/>
		);
	} else if (character.name === "C-3PO") {
		return <h1 style={{ color: "yellow" }}>C3PO</h1>;
	} else {
		return <h1>Different character</h1>;
	}

	return (
		<>
			<div>
				<h1>Character Page: {character.name}</h1>
				<h2>Birth year: {character.birth_year}</h2>
				<h3>Eye color: {character.eye_color}</h3>
			</div>
			<div>
				<h1>More content</h1>
				{character.films.map((film) => {
					return (
						<li>
							<a key={film} href={film}>
								{film}
							</a>
						</li>
					);
				})}
			</div>
		</>
	);
};

export default Character;
