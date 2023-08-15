const MessageInput = () => {
	return (
		<form className="row">
			<div className="col-10">
				<input type="text" className="form-control" />
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
