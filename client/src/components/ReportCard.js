function ReportCard({ whatHappened, location, feeling, soughtResources, plan, time }) {
	return (
		<div className="font-headerSans border-4 px-10 py-5 w-full">
			<div className="">
				<p className="font-bodySans font-bold my-6 bg-jetblack text-primaryYellow w-10/12 p-2">
					{time.slice(0, 10)} | {location}
				</p>
			</div>
			<p className="subtitle">What happened?</p>
			<p className="makeEven truncated">{whatHappened}</p>
			<p className="subtitle">Where did it take place?</p>
			<p className="makeEven truncated">{location}</p>
			<p className="subtitle">How did this incident make you feel?</p>
			<p className="makeEven truncated">{feeling}</p>
			<p className="subtitle">Have you sought help for this problem?</p>
			<p className="makeEven truncated">{soughtResources ? "I sought resources." : "I did not seek resources."}</p>
			<p className="subtitle">What would you like done about this?</p>
			<p className="makeEven truncated">{plan}</p>
		</div>
	);
}

export default ReportCard;
