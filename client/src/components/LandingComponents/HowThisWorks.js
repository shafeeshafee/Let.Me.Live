import HowItWorksCard from "./HowItWorksCard";

function HowThisWorks() {
	return (
		<div className="bg-shockingYellow font-bodySans pb-20">
			<h1 className="text-5xl font-bold pt-20">How Does This Work?</h1>
			<div className="flex flex-wrap justify-around">
				<div>
					<HowItWorksCard
						title="We keep it anonymous"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi tenetur. Eum dolore facilis quasi reiciendis laborum quibusdam cumque obcaecati, unde numquam expedita. Eveniet porro inventore repellendus error eaque officia."
						image="https://picsum.photos/500/300"
					/>
				</div>
				<div>
					<HowItWorksCard
						title="Let the world know"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi tenetur. Eum dolore facilis quasi reiciendis laborum quibusdam cumque obcaecati, unde numquam expedita. Eveniet porro inventore repellendus error eaque officia."
						image="https://picsum.photos/500/300"
					/>
				</div>
				<div>
					<HowItWorksCard
						title="End tenant harassment"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi tenetur. Eum dolore facilis quasi reiciendis laborum quibusdam cumque obcaecati, unde numquam expedita. Eveniet porro inventore repellendus error eaque officia."
						image="https://picsum.photos/500/300"
					/>
				</div>
			</div>
		</div>
	);
}

export default HowThisWorks;
