import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
	return (
		<div
			className={isOpen ? "grid grid-rows-2 w-full z-50 text-center items-center antialiased bg-lightgray text-charcoal fixed" : "hidden"}
			onClick={toggle}
		>
			<Link className="py-4 border" to="/">
				Home
			</Link>
			<Link className="py-4 border" to="/resources">
				Resources
			</Link>
			<Link className="py-4 border" to="/allreports">
				View Reports
			</Link>
			<Link className="py-4 border" to="/report">
				Submit a Report
			</Link>
			<Link className="py-4 border" to="/faq">
				FAQ
			</Link>
			<Link className="py-4 border" to="/aboutus">
				About Us
			</Link>
		</div>
	);
};

export default Dropdown;
