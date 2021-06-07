import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="flex justify-between px-10 bg-yellow-200 py-3">
			<div className="flex">
				<Link className="mx-3" to="/">
					Facebook Icon
				</Link>
				<Link className="mx-3" to="/">
					Twitter Icon
				</Link>
				<Link className="mx-3" to="/">
					Instagram Icon
				</Link>
			</div>
			<div>
				<Link to="/">Logo</Link>
			</div>
			<div className="flex">
				<Link className="mx-3" to="/allreports">
					View Reports
				</Link>
				<Link className="mx-3" to="/report">
					Submit a Report
				</Link>
				<Link className="mx-3" to="/faq">
					FAQ
				</Link>
				<Link className="mx-3" to="/aboutus">
					About Us
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
