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
			timestamp: new Date(),
		},
		{
			content: "Hello from the other side",
			sent: false,
			timestamp: new Date(),
		},
	]);
	const [username, setUsername] = useState();
	const [messageColor, setMessageColor] = useState("");

	return (
		<div className="App container">
			<Header
				setUsername={setUsername}
				setMessageColor={setMessageColor}
			/>
			{/* #1 Update messages list to have setMessages prop so we can update the list from that component */}
			<MessagesList
				messages={messages}
				setMessages={setMessages}
				username={username}
				messageColor={messageColor}
			/>
			<MessageInput
				existingMessages={messages}
				setMessages={setMessages}
			/>
		</div>
	);
}

export default App;
