import { useState } from "react";
import APIURL from "./APIURL.js";

const Form = ({ getShoes }) => {
	const [name, setName] = useState("");
	const [size, setSize] = useState(10);
	const [type, setType] = useState("");
	const [occasions, setOccasions] = useState([]);
	const [success, setSuccess] = useState(false);

	const addOccasion = () => {
		// occasions.push("") //not allowed
		setOccasions([...occasions, ""]);
	};

	const formSubmission = async (event) => {
		event.preventDefault();

		const response = await fetch(`${APIURL}/shoes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, size, type, occasions }),
		});

		setName("");
		setType("");
		setOccasions([]);
		setSuccess(true);
		setTimeout(() => {
			setSuccess(false);
		}, 5000);
		getShoes();
	};

	return (
		<form onSubmit={formSubmission}>
			<label>Name</label>
			<input
				type="text"
				className="form-control"
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>

			<label>Size</label>
			<input
				type="number"
				className="form-control"
				value={size}
				onChange={(event) => {
					setSize(event.target.value);
				}}
			/>

			<label>Type</label>
			<select
				className="form-control"
				value={type}
				onChange={(event) => {
					setType(event.target.value);
				}}
			>
				<option></option>
				<option>Boot</option>
				<option>Sneaker</option>
				<option>Sandal</option>
			</select>

			<label>Ocassions</label>
			{occasions.map((occasion, index) => {
				return (
					<input
						type="text"
						value={occasion}
						key={index}
						className="form-control"
						onChange={(event) => {
							const occasionsCopy = [...occasions];
							occasionsCopy[index] = event.target.value;
							setOccasions(occasionsCopy);
						}}
					/>
				);
			})}

			<br />
			<button
				className="btn btn-success"
				onClick={addOccasion}
				type="button"
			>
				Add occasion
			</button>
			<br />
			<button className="btn btn-primary" type="submit">
				Save Shoe
			</button>
			{success && <p>Shoe added to database successfully</p>}
		</form>
	);
};

export default Form;
