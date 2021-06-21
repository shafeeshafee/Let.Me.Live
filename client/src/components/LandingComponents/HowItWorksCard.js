function HowItWorksCard({ title, text, image }) {
	return (
		<div>
			<div className="pt-20 pb-30 min-w-screen flex items-center justify-center font-bodySans">
				<div>
					<div className="flex flex-col max-w-md px-8 py-6 rounded-xl space-y-5 items-center">
						<img className="w-auto h-56 rounded-md" src={image} alt={title} />
						<h3 className="font-bold text-gray-900 text-2xl">{title}</h3>
						<p className="text-justify leading-relaxed">{text}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HowItWorksCard;
