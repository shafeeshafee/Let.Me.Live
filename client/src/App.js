import { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import AllReports from "./pages/AllReports";
import ReportForm from "./pages/ReportForm";
import Faq from "./pages/Faq";
import AboutUs from "./pages/AboutUs";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", hideMenu);

		return () => {
			window.removeEventListener("resize", hideMenu);
		};
	}, [isOpen]);

	return (
		<div className="App">
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route exact path="/allreports">
					<AllReports />
				</Route>
				<Route exact path="/report">
					<ReportForm />
				</Route>
				<Route exact path="/faq">
					<Faq />
				</Route>
				<Route exact path="/aboutus">
					<AboutUs />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
