// #15 Get access to all the props from #14
const SentMessage = (props) => {
	const deleteMessage = async () => {
		if (window.confirm("Are you sure you want to delete this message?")) {
			await fetch(`http://localhost:3010/message/${props.id}`, {
				method: "DELETE",
			});
			props.updateMessages();
		}
	};

	const editMessage = async () => {
		const updatedText = window.prompt(
			"What would you like to change the message content to?"
		);
		await fetch(`http://localhost:3010/message/${props.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ updatedText }),
		});
		props.updateMessages();
	};

	return (
		<div className="row" id={`${props.lastMessage ? "lastMessage" : ""}`}>
			<div className="col-2">{/* Empty on purpose */}</div>
			<div className="col-10 text-end ">
				<span className="messageText sentMessageText">
					{/* #16 Use the props from #14 & #15 to make the content show up in our HTML */}
					{props.content}
				</span>
				<div style={{ fontSize: 12, paddingTop: 5 }}>
					<span>
						{new Date(props.timestamp).toLocaleTimeString(
							navigator.language,
							{
								hour: "2-digit",
								minute: "2-digit",
							}
						)}
					</span>
					{" | "}
					<span onClick={editMessage} style={{ cursor: "pointer" }}>
						Edit
					</span>
					{" | "}
					<span
						onClick={deleteMessage}
						style={{ color: "red", cursor: "pointer" }}
					>
						Delete
					</span>
				</div>
			</div>
		</div>
	);
};

export default SentMessage;
