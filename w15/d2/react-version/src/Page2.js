import "./Page2.scss";
import { Link } from "react-router-dom";

const Page2 = () => {
	return (
		<div id="page2">
			<h1>Page2</h1>
			<Link to="/">Go back</Link>
		</div>
	);
};

export default Page2;
