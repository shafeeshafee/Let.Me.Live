import HowItWorksCard from "./HowItWorksCard";

function HowThisWorks() {
	return (
		<div className="bg-shockingYellow font-bodySans pb-20">
			<h1 className="text-5xl font-bold pt-20">How Does This Work?</h1>
			<div className="flex flex-wrap justify-around">
				<div>
					<HowItWorksCard
						title="We keep it anonymous"
						text="You don't have to reveal who you are. Here, you are safe to be honest and share your story with the world."
						image="https://picsum.photos/500/300"
					/>
				</div>
				<div>
					<HowItWorksCard
						title="Let the world know"
						text="When there is injustice happening, to keep it inside would be injustice to our communities. Let your story be heard. The first step to solving tenant harassment is to show the world."
						image="https://picsum.photos/500/300"
					/>
				</div>
				<div>
					<HowItWorksCard
						title="End tenant harassment"
						text="Whether now or in the future, tenant harassment must come to an end. Especially for those who are from disadvantaged communities due to gentrification and systemtic racism."
						image="https://picsum.photos/500/300"
					/>
				</div>
			</div>
		</div>
	);
}

export default HowThisWorks;
