import "./App.css";
import Header from "./Header.js";
import MessagesList from "./MessagesList.js";
import MessageInput from "./MessageInput.js";
import { useState } from "react";

function App() {
	const [messages, setMessages] = useState([
		{
			content: "Hello out there",
			sent: true,
		},
		{ content: "Hello from the other side", sent: false },
	]);
	return (
		<div className="App container">
			<Header />
			<MessagesList messages={messages} />
			<MessageInput />
		</div>
	);
}

export default App;
