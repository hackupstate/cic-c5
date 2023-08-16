import { useState } from "react";

const MessageInput = ({ setMessages }) => {
	const [inputtedText, setInputtedText] = useState("");

	const sendMessage = async (event) => {
		event.preventDefault();
		const response = await fetch(`http://localhost:3010/message`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				messageText: inputtedText,
			}),
		});
		const data = await response.json();
		setMessages(data.messages);
		setInputtedText("");

		setTimeout(() => {
			//This is bad react code because it is using the browser's DOM
			//instead of the virtual.
			//TODO: Refactor this to use a useRef hook instead of document
			//MZM 8/15/23
			document.getElementById("lastMessage").scrollIntoView();
		}, 500);
	};

	return (
		<form className="row" onSubmit={sendMessage}>
			<div className="col-10">
				<input
					type="text"
					className="form-control"
					value={inputtedText}
					onChange={(event) => {
						setInputtedText(event.target.value);
					}}
				/>
			</div>
			<div className="col-2">
				<button type="submit" className="btn btn-success">
					Send
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
