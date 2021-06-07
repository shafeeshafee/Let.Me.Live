import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import AllReports from "./pages/AllReports";
import ReportForm from "./pages/ReportForm";
import Faq from "./pages/Faq";
import AboutUs from "./pages/AboutUs";

function App() {
	return (
		<div className="App">
			<Navbar />
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
		</div>
	);
}

export default App;
