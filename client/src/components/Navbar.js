import { useState, useCallback, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
	const [y, setY] = useState(window.scrollY);
	const [dropShadow, setDropShadow] = useState("");

	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				setDropShadow("shadow");
			} else if (y < window.scrollY || y === window.scrollY) {
				setDropShadow("shadow-2xl");
			}
			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<nav
			className={`font-bodySans font-bold text-sm lg:text-lg bg-shockingYellow z-40 top-0 flex justify-between items-center h-24 text-black shadow-sm header-font transition duration-1000 ease-in-out ${dropShadow}`}
			role="navigation"
		>
			<div className="flex py-5">
				<Link className="mx-3" to="/">
					<img className="w-7 mx-3" src="images/icons/facebook.svg" alt="facebook icon" />
				</Link>
				<Link className="mx-3" to="/">
					<img className="w-7 mx-3" src="images/icons/instagram.svg" alt="instagram icon" />
				</Link>
				<Link className="mx-3" to="/">
					<img className="w-7 mx-3" src="images/icons/twitter.svg" alt="twitter icon" />
				</Link>
			</div>
			<Link to="/" className="flex items-center text-lg">
				<div>
					<Link to="/">
						<img className="hidden xl:block" src="images/logo.png" alt="logo" />
					</Link>
				</div>
			</Link>
			<div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="pr-8 xl:flex md:block hidden">
				<div className="flex">
					<Link className="mx-3" to="/resources">
						<p>Resources</p>
					</Link>
					<Link className="mx-3" to="/allreports">
						<p>View Reports</p>
					</Link>

					<Link className="mx-3" to="/report">
						<p>Submit a Report</p>
					</Link>
					<Link className="mx-3" to="/faq">
						<p>FAQ</p>
					</Link>
					<Link className="mx-3" to="/aboutus">
						<p>About Us</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
