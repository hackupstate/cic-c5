import { useEffect, useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Card from "./Card.js";

const Home = () => {
	const [dropdownValue, setDropdownValue] = useState("");
	const [filterResults, setFilterResults] = useState();
	const [cards, setCards] = useState([
		{
			imgURL: "https://images.unsplash.com/photo-1690151711465-2bfe4e69f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1311&q=80",
			title: "First Card",
			cardBody:
				"Some quick example text to build on the card title and make up the bulk of the card's content.",
		},
		{
			imgURL: "https://images.unsplash.com/photo-1690155593307-f98e48ed9b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80",
			title: "Second title",
			cardBody:
				"Some quick example text to build on the card title and make up the bulk of the card's content.",
		},
		{
			imgURL: "https://images.unsplash.com/photo-1690122991917-a06094f2e65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80",
			title: "Difference",
			cardBody: "It has different card text",
		},
		{
			imgURL: "https://images.unsplash.com/photo-1690122991917-a06094f2e65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80",
			title: "Difference",
			cardBody: "It has different card text",
		},
	]);

	useEffect(() => {
		console.log("Hello fellow developer. Why you in my console?");
	}, []);

	const theyDoneClickedTheButton = (event) => {
		alert("You clicked it!");
	};

	return (
		<div className="container" id="home">
			<div className="row">
				<div className="col">
					<h1
						className="redText"
						style={{ textDecoration: "underline" }}
					>
						Hello World!
					</h1>
				</div>
				<div className="col">
					<p>Second column</p>
				</div>
				<button onClick={theyDoneClickedTheButton}>Click Me!</button>
				<Link to="/page2">Link it baby!</Link>
			</div>
			<Adder />
			<div className="row">
				<select
					value={dropdownValue}
					onChange={(evt) => {
						setDropdownValue(evt.target.value);

						setFilterResults(
							cards.filter((filterItem) => {
								return filterItem.title === evt.target.value;
							})
						);
					}}
				>
					{cards.map((card) => {
						return <option key={card.title}>{card.title}</option>;
					})}
				</select>
				{(filterResults || cards).map((card) => {
					return (
						<Card
							key={card.title}
							imgURL={card.imgURL}
							title={card.title}
							cardBody={card.cardBody}
						/>
					);
				})}
			</div>
		</div>
	);
};

const Adder = () => {
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [sum, setSum] = useState();

	const addNumbers = () => {
		setSum(parseInt(num1) + parseInt(num2));
	};

	// useEffect(() => {
	// 	setSum(parseInt(num1) + parseInt(num2));
	// }, [num1, num2]);

	return (
		<>
			<div className="row">
				<div className="col">
					Num 1:
					<input
						type="number"
						id="num1"
						value={num1}
						onChange={(evt) => {
							setNum1(evt.target.value);
						}}
					/>
				</div>
				<div className="col">
					Num 2:
					<input
						type="number"
						id="num2"
						value={num2}
						onChange={(evt) => {
							setNum2(evt.target.value);
						}}
					/>
				</div>
			</div>
			<div>
				<button onClick={addNumbers}>Add em up</button>
			</div>
			<div id="result">{sum}</div>
		</>
	);
};

export default Home;
