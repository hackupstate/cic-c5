const ReceivedMessage = ({ message }) => {
	// console.log(message);
	return (
		<div className="row">
			<div className="col-10">
				<span className="messageText">{message.content}</span>
				<div style={{ fontSize: 12, paddingTop: 5 }}>
					<span>
						{new Date(message.timestamp).toLocaleTimeString(
							navigator.language,
							{
								hour: "2-digit",
								minute: "2-digit",
							}
						)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ReceivedMessage;
