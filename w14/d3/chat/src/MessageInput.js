import { useState } from "react";

const MessageInput = () => {
	const [inputtedText, setInputtedText] = useState("");
	const sendMessage = (event) => {
		event.preventDefault();
		console.log(inputtedText);
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
