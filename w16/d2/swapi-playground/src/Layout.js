import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ name }) => {
	return (
		<div>
			<Navbar />
			<Outlet name={name} />
			<Footer />
		</div>
	);
};

export default Layout;
