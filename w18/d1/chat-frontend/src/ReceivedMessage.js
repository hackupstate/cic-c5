const ReceivedMessage = ({ message }) => {
	return (
		<div className="row">
			<div className="col-10">
				<span className="messageText">{message.content}</span>
			</div>
		</div>
	);
};

export default ReceivedMessage;
