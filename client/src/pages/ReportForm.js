import { useState } from "react";
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
	const [soughtHelpInfo, setSoughtHelpInfo] = useState(false);
	const [nextSteps, setNextSteps] = useState("");

	const postData = async (id) => {
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

	const handleSubmit = (e) => {
		e.preventDefault();
		setData({
			whatHappened: incidentInfo,
			location: locationInfo,
			feeling: feelingInfo,
			soughtResources: soughtHelpInfo,
			plan: nextSteps,
		});

		postData();
	};

	console.log(data);

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
							className="text-jetblack text-2xl"
							name="w3review"
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
						<input className="text-jetblack text-2xl" onChange={(e) => setLocationInfo(e.target.value)} type="text" />
					</div>
					{/* how it made u feel */}
					<div className="submit-subtitle">
						<div className="makeEven mb-2 flex flex-col items-start justify-center">
							<p className="mb-3">How did this incident make you feel?</p>
							<span className="text-sm text-gray-400">Be honest about your experience. Let the world hear.</span>
						</div>
						<textarea
							className="text-jetblack text-2xl"
							onChange={(e) => setFeelingInfo(e.target.value)}
							className=""
							name="w3review"
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
								className="text-jetblack text-2xl"
								onChange={(e) => setSoughtHelpInfo(e.target.value)}
								className="m-3"
								type="radio"
								value="Yes"
								name="choice"
							/>
							<p className="text-offwhite text-2xl">Yes</p>
							<br />
							<input
								className="text-jetblack text-2xl"
								onChange={(e) => setSoughtHelpInfo(e.target.value)}
								className="m-3"
								type="radio"
								value="No"
								name="choice"
							/>
							<p className="text-offwhite text-2xl">No</p>
						</div>
					</div>
					{/* next steps */}
					<div className="submit-subtitle">
						<div className="makeEven mb-2 flex flex-col items-start justify-center">
							<p className="mb-3">What would you like done about this?</p>
							<span className="text-sm text-gray-400">Preach.</span>
						</div>
						<textarea
							className="text-jetblack text-2xl"
							onChange={(e) => setNextSteps(e.target.value)}
							className=""
							name="w3review"
							rows="4"
							cols="50"
						></textarea>
					</div>
					<div className="border-t-2 py-3 w-1/12 m-auto"></div>
					<button
						onClick={handleSubmit}
						className="mt-5 bg-primaryYellow text-jetblack hover:bg-jetblack hover:text-offwhite smoothed font-bold py-3 px-5 rounded"
					>
						Submit
					</button>
				</Slide>
			</form>
		</div>
	);
}

export default ReportForm;
