import { useEffect, useState } from "react";
import APIURL from "./APIURL";
import "./App.css";
import Form from "./Form.js";
import Table from "./Table.js";

function App() {
	const [shoes, setShoes] = useState([]);

	const getShoes = async () => {
		const response = await fetch(`${APIURL}/shoes`);
		const data = await response.json();
		setShoes(data.shoes);
	};

	useEffect(() => {
		getShoes();
	}, []);

	return (
		<div className="App container">
			<Form getShoes={getShoes} />
			<Table shoes={shoes} />
		</div>
	);
}

export default App;
