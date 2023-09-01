const Table = ({ shoes }) => {
	return (
		<table className="table table-striped table-hover">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Size</th>
					<th>Ocassions</th>
				</tr>
			</thead>
			<tbody>
				{shoes.map((shoe) => {
					console.log(shoe);
					return (
						<tr key={shoe.id}>
							<td>{shoe.name}</td>
							<td>{shoe.type}</td>
							<td>{shoe.size}</td>
							<td>
								{shoe.ocassions
									.map((occObj) => {
										return occObj.name;
									})
									.join(", ")}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
