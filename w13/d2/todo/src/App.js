import { useState } from "react";

const App = () => {
	const [items, setItems] = useState([]);

	const addItem = (event) => {
		event.preventDefault();
		const itemText = event.target.elements.task.value;
		setItems([...items, itemText]);
		console.log(items);
	};

	return (
		<div>
			<h1>To Do List App</h1>
			<form onSubmit={addItem}>
				<label>New To Do Item: </label>
				<input type="text" name="task" />
				<button type="submit">Add Item</button>
			</form>
			{items.map((item, index) => {
				return <li key={index}>{item}</li>;
			})}
		</div>
	);
};

export default App;
