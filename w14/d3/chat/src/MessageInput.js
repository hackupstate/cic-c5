import { useState } from "react";

const MessageInput = (props) => {
	const [inputtedText, setInputtedText] = useState("");
	const sendMessage = (event) => {
		event.preventDefault();
		console.log(inputtedText);

		let newMessages = [
			...props.existingMessages,
			{ content: inputtedText, sent: true, timestamp: new Date() },
		];

		props.setMessages(newMessages);

		setInputtedText("");

		setTimeout(() => {
			props.setMessages([
				...newMessages,
				{
					content:
						"Hmm. Good message. This is the computer responding.",
					sent: false,
					timestamp: new Date(),
				},
			]);
		}, 3000);
	};

	return (
		<form onSubmit={sendMessage} className="row inputBar">
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
			{/* End of col-10 */}
			<div className="col-2">
				<button type="submit" className="btn btn-success">
					Send
				</button>
			</div>
			{/* End of col-2 */}
		</form>
	);
};

export default MessageInput;
