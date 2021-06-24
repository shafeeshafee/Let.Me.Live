import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Slide from "react-reveal/Slide";

function ReportForm() {
	const [data, setData] = useState({
		whatHappened: "",
		location: "",
		feeling: "",
		soughtResources: false,
		plan: "",
	});

	const [incidentInfo, setIncidentInfo] = useState("");
	const [locationInfo, setLocationInfo] = useState("");
	const [feelingInfo, setFeelingInfo] = useState("");
	const [soughtHelpInfo, setSoughtHelpInfo] = useState("");
	const [nextSteps, setNextSteps] = useState("");

	const history = useHistory();

	const redirect = () => {
		history.push("/allreports");
	};

	const postData = async () => {
		return await axios({
			url: `https://lml-reports.herokuapp.com/api/submit-report`,
			method: "POST",
			data: data,
		})
			.then((res) => {
				console.log("Post successful.");
			})
			.catch((err) => console.log(err));
	};

	const handlePost = (e) => {
		e.preventDefault();

		postData();
		redirect();
	};

	function checkProperties(obj) {
		for (let key in obj) {
			console.log(obj[key]);
			if (obj[key] === null || obj[key] === "") return false;
		}

		return true;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		setData([
			...data,
			{ whatHappened: incidentInfo, location: locationInfo, feeling: feelingInfo, soughtResources: soughtHelpInfo, plan: nextSteps },
		]);
	};

	useEffect(() => {
		setData({
			whatHappened: incidentInfo,
			location: locationInfo,
			feeling: feelingInfo,
			soughtResources: soughtHelpInfo,
			plan: nextSteps,
		});
	}, [incidentInfo, locationInfo, feelingInfo, nextSteps]);

	return (
		<div className="pt-5 pb-24 bg-charcoal font-bodySans">
			<div className="pt-10 pb-20">
				<h1 className="text-6xl text-shockingYellow font-bold font-bodySans">Submit a Report</h1>
				<p className="pt-3 text-offwhite text-xl">Let your story be heard...</p>
			</div>

			<form>
				<Slide bottom>
					{/* what happened */}
					<div className="submit-subtitle">
						<div className="makeEven mb-2 flex flex-col items-start justify-center">
							<p className="mb-3">What happened?</p>
							<span className="text-sm text-gray-400">Describe the incident.</span>
						</div>
						<textarea
							onChange={(e) => setIncidentInfo(e.target.value)}
							className="text-jetblack text-2xl focus:outline-none border-none"
							name=""
							rows="4"
							cols="50"
						></textarea>
					</div>
					{/* where it happened */}
					<div className="submit-subtitle">
						<div className="makeEven mb-2 flex flex-col items-start justify-between">
							<p className="mb-3">Where did it take place?</p>
							<span className="text-sm text-gray-400">We recommend vague information like zipcodes and not addresses.</span>
						</div>
						<input
							className="text-jetblack text-2xl focus:outline-none border-none"
							onChange={(e) => setLocationInfo(e.target.value)}
							type="text"
						/>
					</div>
					{/* how it made u feel */}
					<div className="submit-subtitle">
						<div className="makeEven mb-2 flex flex-col items-start justify-center">
							<p className="mb-3">How did this incident make you feel?</p>
							<span className="text-sm text-gray-400">Be honest about your experience. Let the world hear.</span>
						</div>
						<textarea
							className="text-jetblack text-2xl focus:outline-none border-none"
							onChange={(e) => setFeelingInfo(e.target.value)}
							name=""
							rows="4"
							cols="50"
						></textarea>
					</div>
					{/* sought resources */}
					<div className="submit-subtitle">
						<div className="makeEven mb-2 flex flex-col items-start justify-between">
							<p className="mb-3">Have you sought help for this problem?</p>
							<span className="text-sm text-gray-400">It's okay if you didn't. We know it can be difficult.</span>
						</div>
						<div className="flex items-center">
							<input
								className="text-jetblack text-2xl focus:outline-none border-none"
								onChange={(e) => setSoughtHelpInfo(e.target.value)}
								className="m-3"
								type="radio"
								value="Yes"
								name="choice"
							/>
							<p className="text-offwhite text-2xl">Yes</p>
							<br />
							<input
								className="text-jetblack text-2xl focus:outline-none border-none"
								onChange={(e) => setSoughtHelpInfo(e.target.value)}
								className="m-3"
								type="radio"
								value="No"
								name="choice"
							/>
							<p className="text-offwhite text-2xl">No</p>
						</div>
					</div>
					<div className="submit-subtitle">
						<div className="makeEven mb-2 flex flex-col items-start justify-center">
							<p className="mb-3">What would you like done about this?</p>
							<span className="text-sm text-gray-400">Preach.</span>
						</div>
						<textarea
							className="text-jetblack text-2xl focus:outline-none border-none"
							onChange={(e) => setNextSteps(e.target.value)}
							name=""
							rows="4"
							cols="50"
						></textarea>
					</div>
					<div className="border-t-2 py-3 w-1/12 m-auto"></div>
					<div className="flex flex-col justify-center items-center">
						{!checkProperties(data) ? (
							<button
								onClick={handleSubmit}
								className={`${
									checkProperties(data)
										? "hidden"
										: "block bg-lightgray w-11/12 lg:w-1/6 mt-5 mx-3 py-3 px-5 rounded smoothed font-bold focus:outline-none border-none"
								}`}
							>
								{checkProperties(data) ? "Confirm Document" : "Incomplete"}
							</button>
						) : (
							<button
								onClick={handlePost}
								className="focus:outline-none border-none w-11/12 lg:w-1/6 mt-5 mx-3 bg-shockingYellow text-jetblack hover:bg-green-500 hover:text-offwhite smoothed font-bold py-3 px-5 rounded"
							>
								Submit
							</button>
						)}
					</div>
				</Slide>
			</form>
		</div>
	);
}

export default ReportForm;
