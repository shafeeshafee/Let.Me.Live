function ReportForm() {
	return (
		<div className="pt-5 pb-24 bg-charcoal font-bodySans">
			<div className="pt-10 pb-20">
				<h1 className="text-6xl text-shockingYellow font-bold font-bodySans">Submit a Report</h1>
				<p className="pt-3 text-offwhite text-xl">Let your story be heard...</p>
			</div>

			<form>
				{/* what happened */}
				<div className="submit-subtitle">
					<div className="makeEven mb-2 flex flex-col items-start justify-center">
						<p className="mb-3">What happened?</p>
						<span className="text-sm text-gray-400">Describe the incident.</span>
					</div>
					<textarea className="" name="w3review" rows="4" cols="50"></textarea>
				</div>
				{/* where it happened */}
				<div className="submit-subtitle">
					<div className="makeEven mb-2 flex flex-col items-start justify-between">
						<p className="mb-3">Where did it take place?</p>
						<span className="text-sm text-gray-400">We recommend vague information like zipcodes and not addresses.</span>
					</div>
					<input type="text" />
				</div>
				{/* how it made u feel */}
				<div className="submit-subtitle">
					<div className="makeEven mb-2 flex flex-col items-start justify-center">
						<p className="mb-3">How did this incident make you feel?</p>
						<span className="text-sm text-gray-400">Be honest about your experience. Let the world hear.</span>
					</div>
					<textarea className="" name="w3review" rows="4" cols="50"></textarea>
				</div>
				{/* sought resources */}
				<div className="submit-subtitle">
					<div className="makeEven mb-2 flex flex-col items-start justify-between">
						<p className="mb-3">Have you sought help for this problem?</p>
						<span className="text-sm text-gray-400">It's okay if you didn't. We know it can be difficult.</span>
					</div>
					<div className="flex items-center">
						<input className="m-3" type="radio" value="Yes" name="choice" />
						<p className="text-offwhite text-2xl">Yes</p>
						<br />
						<input className="m-3" type="radio" value="No" name="choice" />
						<p className="text-offwhite text-2xl">No</p>
					</div>
				</div>
				{/* next steps */}
				<div className="submit-subtitle">
					<div className="makeEven mb-2 flex flex-col items-start justify-center">
						<p className="mb-3">What would you like done about this?</p>
						<span className="text-sm text-gray-400">Preach.</span>
					</div>
					<textarea className="" name="w3review" rows="4" cols="50"></textarea>
				</div>
			</form>
			<div className="border-t-2 py-3 w-1/12 m-auto"></div>
			<button className="mt-5 bg-primaryYellow text-jetblack hover:bg-jetblack hover:text-offwhite smoothed font-bold py-3 px-5 rounded">
				Submit
			</button>
		</div>
	);
}

export default ReportForm;
